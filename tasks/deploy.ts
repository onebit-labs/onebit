import { task } from 'hardhat/config';
import { getFirstSigner, withSaveAndVerify, insertContractAddressInDb } from '../helpers/contracts-helpers';
import {LendingPoolAddressesProviderRegistry__factory} from '../types/factories/LendingPoolAddressesProviderRegistry__factory';
import {LendingPoolAddressesProvider__factory} from '../types/factories/LendingPoolAddressesProvider__factory';
import {LendingPool__factory, LendingPoolLibraryAddresses} from '../types/factories/LendingPool__factory';
import {ReserveLogic__factory} from '../types/factories/libraries/logic/ReserveLogic__factory'
import {OToken__factory} from '../types/factories/OToken__factory';
import { eContractid, eNetwork } from '../helpers/types';
import {getDb, waitForTx} from '../helpers/misc-utils';

task('deploy-registry', 'Deploy registry')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const network = <eNetwork>DRE.network.name;
    
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();

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
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const network = <eNetwork>DRE.network.name;
    
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const args = ['test'];
    const provider = await withSaveAndVerify(
        //@ts-ignore
        await new LendingPoolAddressesProvider__factory(signer).deploy(...args),
        eContractid.LendingPoolAddressesProvider,
        args,
        verify
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
    const network = <eNetwork>DRE.network.name;
    
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const args = [];
    const reserveLogic = await withSaveAndVerify(
        await new ReserveLogic__factory(signer).deploy(),
        eContractid.ReserveLogic,
        [],
        verify
    );
})

task('deploy-lending-pool', 'Deploy lending pool')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const network = <eNetwork>DRE.network.name;
    
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const args = [];
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
        (await getDb()
          .get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setLendingPoolImpl(pool.address) )
    );
    const lendingPoolProxyAddress = await provider.getLendingPool();
    await insertContractAddressInDb(
        eContractid.LendingPool,
        lendingPoolProxyAddress,
    );
})

task('deploy-otoken', 'Deploy OToken')
.addFlag('verify', 'Verify contracts at Etherscan')
//.addFlag('test', 'Test environment.')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const network = <eNetwork>DRE.network.name;
    
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const oToken = await withSaveAndVerify(
        await new OToken__factory(signer).deploy(),
        eContractid.OToken,
        [],
        verify
        );
})

task('init-reserve', 'Initialize the reserve')
.addFlag('verify', 'Verify contracts at Etherscan')
.setAction(async ({verify}, DRE) => {
    await DRE.run('set-DRE');
    const network = <eNetwork>DRE.network.name;
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const db = await getDb();

})






