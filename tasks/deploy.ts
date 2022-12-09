import { task } from 'hardhat/config';
import { getFirstSigner, withSaveAndVerify, insertContractAddressInDb } from '../helpers/contracts-helpers';
import {VaultAddressesProviderRegistry__factory} from '../types/factories/VaultAddressesProviderRegistry__factory';
import {VaultAddressesProvider__factory} from '../types/factories/VaultAddressesProvider__factory';
import {Vault__factory, VaultLibraryAddresses} from '../types/factories/Vault__factory';
import {ReserveLogic__factory} from '../types/factories/libraries/logic/ReserveLogic__factory'
import {VaultConfigurator__factory} from '../types/factories/VaultConfigurator__factory'
import {OToken__factory} from '../types/factories/OToken__factory';
import {MintableERC20__factory} from '../types/factories/MintableERC20__factory';
import { IERC20Metadata__factory } from '../types/factories/dependencies/openzeppelin/contracts/IERC20Metadata__factory';
import { eContractid, eNetwork } from '../helpers/types';
import {getDb, getMarketDb, waitForTx} from '../helpers/misc-utils';
import { TimelockedExecutor__factory } from '../types/factories/governanace/TimelockedExecutor__factory';

task('deploy-registry', 'Deploy registry')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    await withSaveAndVerify(
        //@ts-ignore
        await new VaultAddressesProviderRegistry__factory(signer).deploy(),
        eContractid.VaultAddressesProviderRegistry,
        [],
        verify
        );
});

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
        await new VaultAddressesProvider__factory(signer).deploy(...args),
        eContractid.VaultAddressesProvider,
        args,
        verify,
        market
        );
    const registry = await VaultAddressesProviderRegistry__factory.connect(
        (await getDb()
          .get(`${eContractid.VaultAddressesProviderRegistry}.${DRE.network.name}`)
          .value()).address,
        signer);
    await waitForTx(
        await registry.registerAddressesProvider(
            provider.address,
            1
        )
    );
});

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
});

task('deploy-vault-impl', 'Deploy vault implement')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const reserveLogicAddress = (await getDb()
        .get(`${eContractid.ReserveLogic}.${DRE.network.name}`)
        .value()).address;
    const libraries = {
        ["contracts/libraries/logic/ReserveLogic.sol:ReserveLogic"]: reserveLogicAddress,
    };
    const poolImpl = await new Vault__factory(libraries, signer).deploy();
    const pool = await withSaveAndVerify(
        poolImpl,
        eContractid.VaultImpl,
        [],
        verify
        );
});

task('deploy-vault', 'Deploy vault')
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
    const poolImpl = await new Vault__factory(libraries, signer).deploy();
    const pool = await withSaveAndVerify(
        poolImpl,
        eContractid.VaultImpl,
        [],
        verify
        );
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setVaultImpl(pool.address) )
    );
    const lendingPoolProxyAddress = await provider.getVault();
    await insertContractAddressInDb(
        eContractid.Vault,
        lendingPoolProxyAddress,
        market
    );
});

task('register-vault', 'Deploy vault')
.addParam('market', 'The market ID')
//.addFlag('test', 'Test environment.')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const poolImpl = await Vault__factory.connect(
        (await getDb()
          .get(`${eContractid.VaultImpl}.${DRE.network.name}`)
          .value()).address,
        signer);
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setVaultImpl(poolImpl.address) )
    );
    const lendingPoolProxyAddress = await provider.getVault();
    await insertContractAddressInDb(
        eContractid.Vault,
        lendingPoolProxyAddress,
        market
    );
});

task('update-vault', 'Upgrade a deployed vault')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const poolImpl = await Vault__factory.connect(
        (await getDb()
          .get(`${eContractid.VaultImpl}.${DRE.network.name}`)
          .value()).address,
        signer);
    
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const oldVaultAddress = await provider.getVault();
    console.log('\tSetting lending pool implementation with address:', poolImpl.address);
    await waitForTx(
        await ( provider.setVaultImpl(poolImpl.address) )
    );
    const lendingPoolProxyAddress = await provider.getVault();
    if(lendingPoolProxyAddress != oldVaultAddress){
        console.log('\tLending pool proxy is changed to:', lendingPoolProxyAddress);
        await insertContractAddressInDb(
            eContractid.Vault,
            lendingPoolProxyAddress,
            market
        );
    }
});

task('deploy-vault-configurator', 'Deploy vault configurator')
.addFlag('verify', 'Verify contracts at Etherscan')
.addParam('market', 'The market ID')
.setAction(async ({verify, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configuratorImpl = await withSaveAndVerify(
        await new VaultConfigurator__factory(signer).deploy(),
        eContractid.VaultConfiguratorImpl,
        [],
        verify
    );
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setVaultConfiguratorImpl(configuratorImpl.address))
    );
    const configuratorAddress = await provider.getVaultConfigurator();
    await insertContractAddressInDb(
        eContractid.VaultConfigurator,
        configuratorAddress,
        market
    );
});

task('deploy-vault-configurator-impl', 'Deploy vault configurator')
.addFlag('verify', 'Verify contracts at Etherscan')
.setAction(async ({verify, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configuratorImpl = await withSaveAndVerify(
        await new VaultConfigurator__factory(signer).deploy(),
        eContractid.VaultConfiguratorImpl,
        [],
        verify
    );
});

task('register-vault-configurator', 'Deploy vault configurator')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configuratorImpl = await VaultConfigurator__factory.connect(
        (await getDb()
          .get(`${eContractid.VaultConfiguratorImpl}.${DRE.network.name}`)
          .value()).address,
        
        signer);
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setVaultConfiguratorImpl(configuratorImpl.address))
    );
    const configuratorAddress = await provider.getVaultConfigurator();
    await insertContractAddressInDb(
        eContractid.VaultConfigurator,
        configuratorAddress,
        market
    );
});

task('update-vault-configurator', 'Update vault Configurator')
  .addParam('market', `The market ID`)
  .setAction(async ({ market }, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configuratorImpl = await VaultConfigurator__factory.connect(
        (await getDb()
          .get(`${eContractid.VaultConfiguratorImpl}.${DRE.network.name}`)
          .value()).address,    
        signer);
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    console.log(
        '\tSetting lending pool configurator implementation with address:',
        configuratorImpl.address);
    await waitForTx(
        await ( provider.setVaultConfiguratorImpl(configuratorImpl.address))
    );
      
    const lendingPoolConfiguratorProxyAddress = await provider.getVaultConfigurator();

    await insertContractAddressInDb(
        eContractid.VaultConfigurator,
        lendingPoolConfiguratorProxyAddress,
        market
    );
});

task('set-pool-admin', 'set pool admin')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
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
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
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
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setEmergencyAdmin(signerAddress) )
    );
})

task('set-kyc-admin', 'set KYC admin')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setKYCAdmin(signerAddress) )
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


task('deploy-btc', 'Deploy BTC')
.addFlag('verify', 'Verify contracts at Etherscan')
.setAction(async({verify}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const args: [string, string, string] = ['WBTC', 'WBTC', '18'];
    const usdt = await withSaveAndVerify(
        await new MintableERC20__factory(signer).deploy(...args),
        'BTC',
        args,
        verify
        );
})

task('init-reserve', 'Initialize the reserve')
.addParam('fundAddress', 'The address to withdraw fund to')
.addParam('market', 'The market ID')
.addParam('assetId', 'The asset')
.setAction(async ({fundAddress, market, assetId}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const oTokenAddress = (await getDb()
                             .get(`${eContractid.OToken}.${DRE.network.name}`)
                             .value()).address;
    const assetAddress = (await getDb()
                             .get(`${assetId}.${DRE.network.name}`)
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
    const pool = await Vault__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.Vault}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const oTokenProxyAddress = (await pool.getReserveData()).oTokenAddress;
    await insertContractAddressInDb(
        eContractid.OToken,
        oTokenProxyAddress,
        market
    );
})

task('set-whitelist-expiration', 'Set the expiration of whitelist')
.addParam('expiration', 'The new expiration for every new entry')
.addParam('market', 'The market ID')
.setAction(async ({expiration, market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( configurator.setWhitelistExpiration(expiration))
    );
})


task('deploy-timelocked-executor', 'Deploy timelocked executor')
.addFlag('verify', 'Verify contracts at Etherscan')
.addFlag('test', 'Test environment.')
.setAction(async ({verify, test}, DRE) => {
    await DRE.run('set-DRE');
    const ONE_DAY_IN_SECS = 24 * 60 * 60;
    const ONE_WEEK_IN_SECS = 7 * ONE_DAY_IN_SECS;
    const TWO_DAYS_IN_SECS = 2 * ONE_DAY_IN_SECS;
    const ONE_HOUR_IN_SECS = 60 * 60;
    const ONE_MINUTE_IN_SECS = 60;
    
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const args = [signerAddress,
        test?ONE_MINUTE_IN_SECS.toString():TWO_DAYS_IN_SECS.toString(),
        ONE_WEEK_IN_SECS.toString(),
        test?ONE_MINUTE_IN_SECS.toString():ONE_DAY_IN_SECS.toString(),
        ONE_WEEK_IN_SECS.toString()];

    await withSaveAndVerify(
        //@ts-ignore
        await new TimelockedExecutor__factory(signer).deploy(...args),
        eContractid.TimelockedExecutor,
        args,
        verify
        );
})