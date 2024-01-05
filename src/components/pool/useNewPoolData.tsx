import { useEffect, useState } from 'react';
import { get_shadow_records, list_farmer_seeds } from 'src/services/farm';
import { isStablePool, NEARX_POOL_ID } from 'src/services/near';
import { getStablePoolDecimal } from 'src/pages/stable/StableSwapEntry';
import {
  scientificNotationToString,
  toReadableNumber,
} from 'src/utils/numbers';
import { BigNumber } from 'bignumber.js';
import getConfigV2 from 'src/services/configV2';
import { getPoolsByIds, getYourPools } from 'src/services/indexer';
import { PoolRPCView } from 'src/services/api';
import {
  useFarmerSeedsStore,
  useShadowRecordStore,
} from 'src/stores/liquidityStores';
const configV2 = getConfigV2();

export type INewPool = any;

// todo: get rid of shares dep
export const useNewPoolData = ({ pool, shares }) => {
  const shadowRecords = useShadowRecordStore((state) => state.shadowRecords);
  const farmerSeeds = useFarmerSeedsStore((state) => state.farmerSeeds);
  const [newPool, setNewPool] = useState<INewPool>();
  const isShadowPool = configV2.SUPPORT_SHADOW_POOL_IDS.includes(
    pool.id?.toString()
  );

  useEffect(() => {
    updatePool();
  }, [pool]);

  const updatePool = () => {
    const pool2 = JSON.parse(JSON.stringify(pool));
    const poolSeed = farmerSeeds[pool2.id];
    pool2.raw = {
      farmerSeeds: poolSeed,
    };
    pool2.farmShare = poolSeed
      ? new BigNumber(poolSeed.free_amount)
          .plus(poolSeed.shadow_amount)
          .toFixed()
      : shares;
    // console.log('shares', pool2.id, shares, pool2.farmShare);
    const { availableShare, availableShareNonDivisible } =
      getPoolAvailableShare({
        pool: pool2,
        shadowRecords,
        shares,
      });
    pool2.availableShare = availableShare;
    pool2.availableShareNonDivisible = availableShareNonDivisible;
    setNewPool(pool2);
  };

  return { shadowRecords, farmerSeeds, newPool };
};

export const getPoolAvailableShare = ({ pool, shadowRecords, shares }) => {
  const decimal = isStablePool(pool.id) ? getStablePoolDecimal(pool.id) : 24;
  const sharesToken = toReadableNumber(
    decimal,
    scientificNotationToString(shares)
  );
  const isShadowPool = configV2.SUPPORT_SHADOW_POOL_IDS.includes(
    pool.id?.toString()
  );
  let availableShare = '';
  let availableShareNonDivisible = '';
  if (isShadowPool) {
    const { shadow_in_farm, shadow_in_burrow } =
      shadowRecords?.[Number(pool.id)] || {};

    const shadowFarm = shadow_in_farm
      ? toReadableNumber(decimal, scientificNotationToString(shadow_in_farm))
      : '0';
    const shadowBorrow = shadow_in_burrow
      ? toReadableNumber(decimal, scientificNotationToString(shadow_in_burrow))
      : '0';

    const highestUsed = Math.max(
      new BigNumber(shadowFarm).toNumber(),
      new BigNumber(shadowBorrow).toNumber()
    );
    // const share1 = new BigNumber(sharesToken).minus(shadowFarm).toNumber();
    // const share2 = new BigNumber(sharesToken).minus(shadowBorrow).toNumber();
    availableShare = new BigNumber(sharesToken).minus(highestUsed).toFixed();
    // console.log(
    //   `availableShare id:${pool.id} f:${shadowFarm}  b:${shadowBorrow} availableShare:${availableShare} shadowBorrow:${shadowBorrow} shadowFarm:${shadowFarm}`,
    // );
    const nonDivisibleShare1 = new BigNumber(shares)
      .minus(shadow_in_farm)
      .toNumber();
    const nonDivisibleShare2 = new BigNumber(shares)
      .minus(shadow_in_burrow)
      .toNumber();
    availableShareNonDivisible = new BigNumber(
      Math.min(nonDivisibleShare1, nonDivisibleShare2)
    ).toFixed();
  } else {
    availableShare = sharesToken;
    availableShareNonDivisible = shares;
  }
  return { availableShare, availableShareNonDivisible };
};
