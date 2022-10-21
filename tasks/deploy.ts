import { task } from 'hardhat/config';
import { getFirstSigner, withSaveAndVerify, insertContractAddressInDb } from '../helpers/contracts-helpers';
import {LendingPoolAddressesProviderRegistry__factory} from '../types/factories/LendingPoolAddressesProviderRegistry__factory';
import {LendingPoolAddressesProvider__factory} from '../types/factories/LendingPoolAddressesProvider__factory';
import {LendingPool__factory, LendingPoolLibraryAddresses} from '../types/factories/LendingPool__factory';
import {ReserveLogic__factory} from '../types/factories/libraries/logic/ReserveLogic__factory'
import {LendingPoolConfigurator__factory} from '../types/factories/LendingPoolConfigurator__factory'
import {OToken__factory} from '../types/factories/OToken__factory';
import {MintableERC20__factory} from '../types/factories/MintableERC20__factory';
import { IERC20Metadata__factory } from '../types/factories/dependencies/openzeppelin/contracts/IERC20Metadata__factory';
import { eContractid, eNetwork } from '../helpers/types';
import {getDb, getMarketDb, waitForTx} from '../helpers/misc-utils';

task('deploy-registry', 'Deploy registry')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    await withSaveAndVerify(
        //@ts-ignore
        await new LendingPoolAddressesProviderRegistry__factory(signer).deploy(),
        eContractid.LendingPoolAddressesProviderRegistry,
        [],
        verify
        );
})

task('deploy-provider', 'Deploy Provider')
.addFlag('verify', 'Verify contracts at Etherscan')
.addParam('market', 'The market ID')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const args = [market];
    const provider = await withSaveAndVerify(
        //@ts-ignore
        await new LendingPoolAddressesProvider__factory(signer).deploy(...args),
        eContractid.LendingPoolAddressesProvider,
        args,
        verify,
        market
        );
    const registry = await LendingPoolAddressesProviderRegistry__factory.connect(
        (await getDb()
          .get(`${eContractid.LendingPoolAddressesProviderRegistry}.${DRE.network.name}`)
          .value()).address,
        signer);
    await waitForTx(
        await registry.registerAddressesProvider(
            provider.address,
            1
        )
    );
})

task('deploy-reserve-logic', 'Deploy reserve logic')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const reserveLogic = await withSaveAndVerify(
        await new ReserveLogic__factory(signer).deploy(),
        eContractid.ReserveLogic,
        [],
        verify
    );
})

task('deploy-lending-pool', 'Deploy lending pool')
.addFlag('verify', 'Verify contracts at Etherscan')
.addParam('market', 'The market ID')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const reserveLogicAddress = (await getDb()
        .get(`${eContractid.ReserveLogic}.${DRE.network.name}`)
        .value()).address;
    const libraries = {
        ["contracts/libraries/logic/ReserveLogic.sol:ReserveLogic"]: reserveLogicAddress,
    };
    const poolImpl = await new LendingPool__factory(libraries, signer).deploy();
    const pool = await withSaveAndVerify(
        poolImpl,
        eContractid.LendingPoolImpl,
        [],
        verify
        );
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setLendingPoolImpl(pool.address) )
    );
    const lendingPoolProxyAddress = await provider.getLendingPool();
    await insertContractAddressInDb(
        eContractid.LendingPool,
        lendingPoolProxyAddress,
        market
    );
})

task('register-lending-pool', 'Deploy lending pool')
.addParam('market', 'The market ID')
//.addFlag('test', 'Test environment.')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const poolImpl = await LendingPool__factory.connect(
        (await getDb()
          .get(`${eContractid.LendingPoolImpl}.${DRE.network.name}`)
          .value()).address,
        signer);
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setLendingPoolImpl(poolImpl.address) )
    );
    const lendingPoolProxyAddress = await provider.getLendingPool();
    await insertContractAddressInDb(
        eContractid.LendingPool,
        lendingPoolProxyAddress,
        market
    );
})

task('deploy-lending-pool-configurator', 'Deploy lending pool configurator')
.addFlag('verify', 'Verify contracts at Etherscan')
.addParam('market', 'The market ID')
.setAction(async ({verify, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configuratorImpl = await withSaveAndVerify(
        await new LendingPoolConfigurator__factory(signer).deploy(),
        eContractid.LendingPoolConfiguratorImpl,
        [],
        verify
    );
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setLendingPoolConfiguratorImpl(configuratorImpl.address))
    );
    const configuratorAddress = await provider.getLendingPoolConfigurator();
    await insertContractAddressInDb(
        eContractid.LendingPoolConfigurator,
        configuratorAddress,
        market
    );
})

task('register-lending-pool-configurator', 'Deploy lending pool configurator')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configuratorImpl = await LendingPoolConfigurator__factory.connect(
        (await getDb()
          .get(`${eContractid.LendingPoolConfiguratorImpl}.${DRE.network.name}`)
          .value()).address,
        
        signer);
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setLendingPoolConfiguratorImpl(configuratorImpl.address))
    );
    const configuratorAddress = await provider.getLendingPoolConfigurator();
    await insertContractAddressInDb(
        eContractid.LendingPoolConfigurator,
        configuratorAddress,
        market
    );
})

task('set-pool-admin', 'set pool admin')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setPoolAdmin(signerAddress) )
    );
})

task('set-pool-operator', 'set pool operator')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setPoolOperator(signerAddress) )
    );
})

task('set-emergency-admin', 'set emergency admin')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const provider = await LendingPoolAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setEmergencyAdmin(signerAddress) )
    );
})

task('deploy-otoken', 'Deploy OToken')
.addFlag('verify', 'Verify contracts at Etherscan')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const oToken = await withSaveAndVerify(
        await new OToken__factory(signer).deploy(),
        eContractid.OToken,
        [],
        verify
        );
})

task('deploy-usdt', 'Deploy USDT')
.addFlag('verify', 'Verify contracts at Etherscan')
.setAction(async({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const args: [string, string, string] = ['USDT', 'USDT', '18'];
    const usdt = await withSaveAndVerify(
        await new MintableERC20__factory(signer).deploy(...args),
        'USDT',
        args,
        verify
        );
})

task('init-reserve', 'Initialize the reserve')
.addParam('fundAddress', 'The address to withdraw fund to')
.addParam('market', 'The market ID')
.setAction(async ({fundAddress, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configurator = await LendingPoolConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPoolConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const oTokenAddress = (await getDb()
                             .get(`${eContractid.OToken}.${DRE.network.name}`)
                             .value()).address;
    const assetAddress = (await getDb()
                             .get(`USDT.${DRE.network.name}`)
                             .value()).address;
    const asset = await IERC20Metadata__factory.connect(
        assetAddress,
        signer
    );
    const assetName = await asset.name();
    const assetSymbol = await asset.symbol();
    const assetDecimals = await asset.decimals();
    const oTokenName = `Onebit ${assetName}`;
    const oTokenSymbol = `O${assetSymbol}`;
    const reserveData = {
        oTokenImpl: oTokenAddress,
        underlyingAssetDecimals: assetDecimals,
        underlyingAsset: assetAddress,
        underlyingAssetName: assetName,
        oTokenName: oTokenName,
        oTokenSymbol: oTokenSymbol,
        fundAddress: fundAddress,
        params: '0x10',
    };
    await waitForTx(
        await ( configurator.initReserve(reserveData))
    );
})