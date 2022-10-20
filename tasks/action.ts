import { task } from 'hardhat/config';
import { getFirstSigner } from '../helpers/contracts-helpers';
import {LendingPool__factory} from '../types/factories/LendingPool__factory';
import {MintableERC20__factory} from '../types/factories/MintableERC20__factory';
import { eContractid, eNetwork } from '../helpers/types';
import {getDb, getMarketDb, waitForTx, readDateString} from '../helpers/misc-utils';
import {BigNumber} from 'bignumber.js';

task('init-next-period', 'Initialize next period')
.addParam('market', 'The market ID')
.addParam('managementFeeRate', 'the rate of management fee')
.addParam('performanceFeeRate', 'the rate of performance fee')
.addParam('purchaseUpperLimit', 'upper limit for purchase')
.addParam('purchaseBeginTimestamp', 'purchase begin time stamp')
.addParam('purchaseEndTimestamp', 'purchase end timestamp')
.addParam('redemptionBeginTimestamp', 'redemptionBeginTimestamp')
.setAction(async ({market, managementFeeRate, performanceFeeRate, purchaseUpperLimit, 
                   purchaseBeginTimestamp, purchaseEndTimestamp, redemptionBeginTimestamp}
                   , DRE) => {
    await DRE.run('set-DRE');
    const signer = await getFirstSigner();
    const pool = await LendingPool__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPool}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    const _purchaseBeginTimestamp = readDateString(purchaseBeginTimestamp);
    const _purchaseEndTimestamp = readDateString(purchaseEndTimestamp);
    const _redemptionBeginTimestamp = readDateString(redemptionBeginTimestamp);
    const _purchaseUpperLimit = new BigNumber(purchaseUpperLimit).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed();
    await waitForTx(
        await ( pool.initializeNextPeriod(managementFeeRate, performanceFeeRate, _purchaseUpperLimit,
            _purchaseBeginTimestamp, _purchaseEndTimestamp, _redemptionBeginTimestamp))
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
    const totalAsset = new BigNumber(1000).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed();
    await waitForTx(
        await (
            usdt.mint(totalAsset)
        )
    );
    
    const pool = await LendingPool__factory.connect(
        (await getMarketDb()
          .get(`${eContractid.LendingPool}.${DRE.network.name}.${market}`)
          .value()).address,
        signer);
    await waitForTx(
        await (
            usdt.approve(pool.address, totalAsset)
        )
    );
    await waitForTx(
        await (
            pool.deposit(new BigNumber(1000).multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(),
            signerAddress,
            0))
    );
});