import { task } from 'hardhat/config';
import { getFirstSigner } from '../helpers/contracts-helpers';
import {Vault__factory} from '../types/factories/Vault__factory';
import { VaultConfigurator__factory } from '../types/factories/VaultConfigurator__factory';
import { VaultAddressesProvider__factory } from '../types/factories/VaultAddressesProvider__factory';
import {MintableERC20__factory} from '../types/factories/MintableERC20__factory';
import { eContractid, eNetwork } from '../helpers/types';
import {getDb, getMarketDb, waitForTx, readDateString} from '../helpers/misc-utils';
import {BigNumber} from 'bignumber.js';
import { OToken__factory } from '../types/factories/OToken__factory';
import { TimelockedExecutor__factory } from '../types/factories/governanace/TimelockedExecutor__factory';
import { VaultAddressesProvider } from '../types/VaultAddressesProvider';

task('init-next-period', 'Initialize next period')
.addParam('market', 'The market ID')
.addParam('managementFeeRate', 'the rate of management fee')
.addParam('performanceFeeRate', 'the rate of performance fee')
.addParam('purchaseUpperLimit', 'upper limit for purchase')
.addParam('softUpperLimit', '')
.addParam('purchaseBeginTimestamp', 'purchase begin time stamp')
.addParam('purchaseEndTimestamp', 'purchase end timestamp')
.addParam('redemptionBeginTimestamp', 'redemptionBeginTimestamp')
.setAction(async ({market, managementFeeRate, performanceFeeRate, purchaseUpperLimit, softUpperLimit,
                   purchaseBeginTimestamp, purchaseEndTimestamp, redemptionBeginTimestamp}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const _purchaseBeginTimestamp = readDateString(purchaseBeginTimestamp);
    const _purchaseEndTimestamp = readDateString(purchaseEndTimestamp);
    const _redemptionBeginTimestamp = readDateString(redemptionBeginTimestamp);
    const _purchaseUpperLimit = new BigNumber(purchaseUpperLimit).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed();
    const _softUpperLimit = new BigNumber(softUpperLimit).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed();
    // console.log(`${managementFeeRate}, ${performanceFeeRate}, ${_purchaseUpperLimit}, ${_softUpperLimit}, ${_purchaseBeginTimestamp}, ${_purchaseEndTimestamp}, ${_redemptionBeginTimestamp}`);
    await waitForTx(
        await ( configurator.initializeNextPeriod(
            managementFeeRate, performanceFeeRate, 
            _purchaseUpperLimit, _softUpperLimit,
            _purchaseBeginTimestamp, _purchaseEndTimestamp, _redemptionBeginTimestamp))
    );
});

task('move-purchase-begin', 'update the purchase begin timestamp')
.addParam('market', 'The market ID')
.addParam('purchaseBegin', 'the purchase begin timestamp')
.setAction(async ({market, purchaseBegin}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const _purchaseBeginTimestamp = readDateString(purchaseBegin);
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( configurator.moveThePurchasePeriod(_purchaseBeginTimestamp))
    );
});

task('move-lock-begin', 'update the lock begin timestamp')
.addParam('market', 'The market ID')
.addParam('lockBegin', 'the lock begin timestamp')
.setAction(async ({market, lockBegin}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const _purchaseEndTimestamp = readDateString(lockBegin);
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( configurator.moveTheLockPeriod(_purchaseEndTimestamp))
    );
});

task('move-redemption-begin', 'update the redemption begin timestamp')
.addParam('market', 'The market ID')
.addParam('redemptionBegin', 'the redemption begin timestamp')
.setAction(async ({market, redemptionBegin}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const _redemptionBeginTimestamp = readDateString(redemptionBegin);
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( configurator.moveTheRedemptionPeriod(_redemptionBeginTimestamp))
    );
});

task('set-whitelist-duration', 'Set the duration of every new entry in the whitelist.')
.addParam('market', 'The market ID')
.addParam('duration', 'The duration in days')
.setAction(async ({market, duration}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const configurator = await VaultConfigurator__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultConfigurator}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const ONE_DAY = 24 * 3600;
    const _duration = ONE_DAY * parseInt(duration);
    await waitForTx(
        await ( configurator.setWhitelistExpiration(_duration))
    );
});

task('get-current-value', 'get the current value')
.addParam('market', 'The market ID')
.setAction(async ({market}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const vault = await Vault__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.Vault}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const otoken = await OToken__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.OToken}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const original_value = await otoken.scaledTotalSupply();
    const value = await otoken.totalSupply();
    console.log(`original_value: ${original_value}, value: ${value}`);
});

task('update-net-value', 'update the net value')
.addParam('market', 'The market ID')
.addParam('netValue', 'the net value')
.setAction(async ({market, netValue}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const vault = await Vault__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.Vault}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const _netValue = new BigNumber(netValue).toFixed();
    // console.log(`${managementFeeRate}, ${performanceFeeRate}, ${_purchaseUpperLimit}, ${_softUpperLimit}, ${_purchaseBeginTimestamp}, ${_purchaseEndTimestamp}, ${_redemptionBeginTimestamp}`);
    await waitForTx(
        await ( vault.updateNetValue(_netValue))
    );
});

task('test-deposit', '')
.addParam('market', 'The market ID')
.setAction(async({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const usdt = await MintableERC20__factory.connect(
        (await getDb().get(`USDT.${DRE.network.name}`).value()).address,
        signer
    );
    const totalAsset = new BigNumber(100000).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed();
    await waitForTx(
        await (
            usdt.mint(totalAsset)
        )
    );
    
    const vault = await Vault__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.Vault}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await (
            usdt.approve(vault.address, totalAsset)
        )
    );
    await waitForTx(
        await (
            vault.deposit(new BigNumber(100000).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(),
            signerAddress,
            0))
    );
});

task('queue-timelocked-executor-set-admin', 'Deploy timelocked executor')
.addParam('role', 'The name of the role.')
.addParam('newAddress', 'The new address')
.addParam('waitingTime', 'The time to wait in seconds')
.setAction(async ({role, newAddress, waitingTime}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const executor = await TimelockedExecutor__factory.connect(
        (await getDb().get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`).value()).address,
        signer
    );
    const data = executor.interface.encodeFunctionData("setPendingAdmin", [newAddress]);
    const executeTime = (await Math.floor(Date.now() / 1000)) + parseInt(waitingTime);
    await waitForTx(
        await (
            executor.queueTransaction(
                executor.address, 0, '', 
                data, executeTime, false)
        )
    );
    console.log(`The executionTime is: ${executeTime}`);
});

task('execute-timelocked-executor-set-admin', 'Deploy timelocked executor')
.addParam('role', 'The name of the role.')
.addParam('newAddress', 'The new address')
.addParam('executeTime', 'The executeTime')
.setAction(async ({role, newAddress, executeTime}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const executor = await TimelockedExecutor__factory.connect(
        (await getDb().get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`).value()).address,
        signer
    );
    const data = executor.interface.encodeFunctionData("setPendingAdmin", [newAddress]);
    await waitForTx(
        await (
            executor.executeTransaction(
                executor.address, 0, '', 
                data, executeTime, false)
        )
    );
});

task('set-vault-admin-to-executor', 'set vault admin')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const role = 'VaultAdmin';
    const executorAddress = (await getDb()
        .get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`)
        .value()
        ).address;
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setVaultAdmin(executorAddress) )
    );
})

task('set-vault-operator-to-executor', 'set vault operator')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const role = 'VaultOperator';
    const executorAddress = (await getDb()
        .get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`)
        .value()
        ).address;
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setVaultOperator(executorAddress) )
    );
})

task('set-portfolio-manager-to-executor', 'set portfolio manager')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const role = 'PortfolioManager';
    const executorAddress = (await getDb()
        .get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`)
        .value()
        ).address;
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.setPortfolioManager(executorAddress) )
    );
})

task('set-owner-to-executor', 'set the owner of addresses provider')
.addParam('market', 'The market ID')
.setAction(async ({market}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const role = 'Owner';
    const executorAddress = (await getDb()
        .get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`)
        .value()
        ).address;
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await ( provider.transferOwnership(executorAddress) )
    );
})

task('queue-update-vault', 'Update vault')
.addParam('market', 'the market ID')
.addParam('waitingTime', 'in seconds')
.setAction(async ({market, waitingTime}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const role = 'Owner';
    const executor = await TimelockedExecutor__factory.connect(
        (await getDb().get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`).value()).address,
        signer
    );
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb().get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`).value()).address,
        signer);
    const vaultAddress = (await getDb().get(`${eContractid.VaultImpl}.${DRE.network.name}`).value()).address;
    const data = provider.interface.encodeFunctionData("setVaultImpl", [vaultAddress]);
    const executeTime = (await Math.floor(Date.now() / 1000)) + parseInt(waitingTime);
    await waitForTx(
        await (
            executor.queueTransaction(
                provider.address, 0, '', 
                data, executeTime, false)
        )
    );
    console.log(`The executionTime is: ${executeTime}`);
});

task('execute-update-vault', 'Update vault')
.addParam('market', 'the market ID')
.addParam('executeTime', 'executeTime')
.setAction(async ({market, executeTime}, DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const signerAddress = await signer.getAddress();
    const role = 'Owner';
    const executor = await TimelockedExecutor__factory.connect(
        (await getDb().get(`${eContractid.TimelockedExecutor}_${role}.${DRE.network.name}`).value()).address,
        signer
    );
    const provider = await VaultAddressesProvider__factory.connect(
        (await getMarketDb().get(`${eContractid.VaultAddressesProvider}.${DRE.network.name}.${market}`).value()).address,
        signer);
    const vaultAddress = (await getDb().get(`${eContractid.VaultImpl}.${DRE.network.name}`).value()).address;
    const data = provider.interface.encodeFunctionData("setVaultImpl", [vaultAddress]);
    await waitForTx(
        await (
            executor.executeTransaction(
                provider.address, 0, '', 
                data, executeTime, false)
        )
    );
});