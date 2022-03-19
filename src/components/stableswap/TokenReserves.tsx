import React, { useEffect, useMemo, useState } from 'react';
import { Card } from '~components/card/Card';
import { FormattedMessage } from 'react-intl';
import { FaAngleUp, FaAngleDown, FaExchangeAlt } from 'react-icons/fa';
import { TokenMetadata } from '~services/ft-contract';
import { Pool } from '~services/pool';
import { useIntl } from 'react-intl';
import { PieChart, Cell, Pie } from 'recharts';
import { isMobile } from '~utils/device';
import { getPoolsByIds } from '~services/indexer';
import {
  toReadableNumber,
  toInternationalCurrencySystem,
  toPrecision,
  percent,
  calculateFeePercent,
} from '~utils/numbers';
import { InfoLine } from './LiquidityComponents';
import _ from 'lodash';
import BigNumber from 'bignumber.js';
import { useDayVolume } from '~state/pool';
import { scientificNotationToString } from '../../utils/numbers';
import { get24hVolume } from '../../services/indexer';

export function MagnetToTokenReserves({
  showTokenReserves,
  setShowTokenReserves,
}: {
  showTokenReserves: boolean;
  setShowTokenReserves: (e?: any) => void;
}) {
  return (
    <span
      className={`px-5 rounded-t-xl text-sm text-farmText mx-auto flex items-center cursor-pointer bg-cardBg pt-3 ${
        showTokenReserves ? 'pb-5' : 'pb-1.5'
      }`}
      style={{
        borderTop: '1px solid #415462',
        // height: '36px',
        width: '175px',
      }}
      onClick={() => {
        setShowTokenReserves(!showTokenReserves);
      }}
    >
      <span>
        <FormattedMessage id="token_reserves" defaultMessage="Token Reserves" />
      </span>
      <span className="ml-2">
        {showTokenReserves ? <FaAngleUp /> : <FaAngleDown />}
      </span>
    </span>
  );
}

export function MagnetConditional({
  swapPage,
  showReserves,
  setShowReserves,
}: {
  swapPage: boolean;
  showReserves: boolean;
  setShowReserves: (e?: any) => void;
}) {
  return swapPage ? (
    <MagnetToTokenReserves
      showTokenReserves={showReserves}
      setShowTokenReserves={setShowReserves}
    />
  ) : (
    <div
      className="flex justify-center my-4"
      onClick={() => {
        setShowReserves(!showReserves);
      }}
    >
      <div className="flex items-center text-white cursor-pointer">
        <p className="block text-sm">
          <FormattedMessage
            id="token_reserves"
            defaultMessage="Token Reserves"
          />
        </p>
        <div className="pl-1 text-sm">
          {showReserves ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
    </div>
  );
}

export function OnlyTokenReserves() {}

function TokenChart({
  tokens,
  coinsAmounts,
  tokensMap,
}: {
  tokens: TokenMetadata[];
  coinsAmounts: { [id: string]: BigNumber };
  tokensMap: { [id: string]: TokenMetadata };
}) {
  const tokensData = calculateTokenValueAndShare(
    tokens,
    coinsAmounts,
    tokensMap
  );
  const data = tokens.map((token, i) => {
    return {
      name: token.symbol,
      value: Number(coinsAmounts[token.id]),
      token: token,
      displayV: tokensData[token.id].display2,
    };
  });
  const color = {
    DAI: 'rgba(255, 199, 0, 0.45)',
    USDT: 'rgba(0, 198, 162, 0.47)',
    USDC: 'rgba(0, 163, 255, 0.45)',
    USN: 'rgba(255, 255, 255, 0.45)',
  };

  function customLabel(props: any) {
    let { cx, cy, x, y, midAngle, innerRadius, outerRadius, displayV, token } =
      props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x1 = cx + radius * Math.cos(-midAngle * RADIAN) - 15;
    const y1 = cy + radius * Math.sin(-midAngle * RADIAN) - 15;
    if (y < cy) {
      y = y - 5;
    }
    return (
      <g>
        <text
          x={x}
          y={y}
          fill="white"
          fontSize="14px"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {token.symbol}
        </text>
        <text
          x={x}
          y={y + 15}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {displayV}
        </text>
        <image width="30" height="30" x={x1} y={y1} xlinkHref={token.icon} />
      </g>
    );
  }
  let innerRadius = 55;
  let outerRadius = 75;
  let width = 400;
  if (isMobile()) {
    innerRadius = 35;
    outerRadius = 55;
    width = 380;
  }
  return (
    <PieChart width={width} height={280}>
      <Pie
        data={data}
        fill="#8884d8"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        dataKey="value"
        labelLine={false}
        label={customLabel}
      >
        {data.map((entry, index) => {
          return (
            <Cell
              key={`cell-${index}`}
              fill={color[tokens[index].symbol]}
              stroke=""
            />
          );
        })}
      </Pie>
    </PieChart>
  );
}

export const calculateTotalStableCoins = (
  pools: Pool[],
  tokens: { [id: string]: TokenMetadata }
) => {
  let coinsAmounts: { [id: string]: BigNumber } = {};

  pools.forEach((p) => {
    Object.entries(p.supplies).map(([id, amount]) => {
      coinsAmounts[id] = (
        coinsAmounts?.[id] ? coinsAmounts[id] : new BigNumber(0)
      ).plus(toReadableNumber(tokens[id].decimals, amount));
    });
  });

  const totalCoins = BigNumber.sum(...Object.values(coinsAmounts))
    .toNumber()
    .toLocaleString('fullwide', { useGrouping: false });

  return { totalCoins, coinsAmounts };
};
const calculateTokenValueAndShare = (
  tokens: TokenMetadata[],
  coinsAmounts: { [id: string]: BigNumber },
  tokensMap: { [id: string]: TokenMetadata }
): Record<string, any> => {
  let result: Record<string, any> = {};
  const totalShares = _.sumBy(Object.values(coinsAmounts), (o) => Number(o));

  let otherTokenNumber = '0';
  Object.values(tokensMap).forEach((token: TokenMetadata, index: number) => {
    const value = scientificNotationToString(coinsAmounts[token.id].toString());
    let percentStr: string | number;
    if (index == tokens.length - 1) {
      percentStr = new BigNumber(100).minus(otherTokenNumber).toFixed(2);
    } else {
      percentStr = toPrecision(
        percent(value, totalShares.toString()).toString(),
        2
      );
      otherTokenNumber = BigNumber.sum(otherTokenNumber, percentStr).valueOf();
    }
    result[token.id] = {
      token,
      value,
      percentStr,
      display: `${toInternationalCurrencySystem(value, 2)} (${percentStr}%)`,
      display2: `${toInternationalCurrencySystem(value, 2)} / ${percentStr}%`,
    };
  });
  return result;
};

export default function ({
  tokens,
  pools,
  swapPage,
  hiddenChart,
  hiddenMag,
  className,
}: {
  tokens: TokenMetadata[];
  pools: Pool[];
  swapPage?: boolean;
  hiddenMag?: boolean;
  hiddenChart?: boolean;
  className?: string;
}) {
  const [showReserves, setShowReserves] = useState<boolean>(true);
  const [chart, setChart] = useState(null);

  const ids = pools.map((p) => p.id);
  const [volume, setVolume] = useState<string>();

  const [tvl, setTvl] = useState<number>();

  let utilisationDisplay;

  useEffect(() => {
    if (ids) {
      if (ids.length > 1) {
        Promise.all(ids.map((id) => get24hVolume(id.toString()))).then(
          (vols) => {
            setVolume(_.sumBy(vols, (o) => Number(o)).toString());
          }
        );
      } else {
        get24hVolume(ids[0].toString()).then(setVolume);
      }

      getPoolsByIds({ pool_ids: ids.map((id) => id.toString()) }).then(
        (pools) => {
          setTvl(_.sumBy(pools, (o) => o.tvl));
        }
      );
    }
  }, [pools.map((p) => p.id).join('|')]);

  if (volume && tvl) {
    const utilisation = new BigNumber(volume).dividedBy(tvl).multipliedBy(100);
    if (new BigNumber('0.01').isGreaterThan(utilisation)) {
      utilisationDisplay = '<0.01%';
    } else {
      utilisationDisplay = utilisation.toFixed(2) + '%';
    }
  }

  const tokensMap: { [id: string]: TokenMetadata } = tokens.reduce(
    (pre, cur) => ({ ...pre, [cur.id]: cur }),
    {}
  );

  const intl = useIntl();

  const calTotalStableCoins = useMemo(() => {
    try {
      return calculateTotalStableCoins(pools, tokensMap).totalCoins;
    } catch (error) {
      return '0';
    }
  }, [pools, tokensMap]);

  const coinsAmounts = useMemo(() => {
    try {
      return calculateTotalStableCoins(pools, tokensMap).coinsAmounts;
    } catch (error) {
      return {};
    }
  }, [pools, tokensMap]);

  const tokensData = useMemo(() => {
    try {
      return calculateTokenValueAndShare(tokens, coinsAmounts, tokensMap);
    } catch (error) {
      return {};
    }
  }, [pools, tokens, coinsAmounts, tokensMap]);

  useEffect(() => {
    const chart = (
      <TokenChart
        tokens={tokens}
        coinsAmounts={coinsAmounts}
        tokensMap={tokensMap}
      />
    );
    setChart(chart);
  }, []);

  return (
    <div className={`${swapPage ? 'relative bottom-10' : ''} ${className}`}>
      {hiddenMag ? null : (
        <MagnetConditional
          swapPage={swapPage}
          showReserves={showReserves}
          setShowReserves={setShowReserves}
        />
      )}

      <Card
        padding="p-8"
        bgcolor="bg-cardBg"
        className={`text-xs text-primaryText ${!showReserves && 'hidden'}`}
        width="w-full"
      >
        <div className="">
          <FormattedMessage
            id="total_stable_coins"
            defaultMessage="Total stablecoins"
          />
        </div>
        <div
          className="text-white mt-1"
          title={toPrecision(calTotalStableCoins, 3)}
        >
          {toInternationalCurrencySystem(calTotalStableCoins, 3)}
        </div>
        <div
          className={`${hiddenChart ? 'hidden' : 'block'} flex justify-center`}
        >
          {chart}
        </div>
        {Object.values(tokensData).map(({ token, display }) => {
          return (
            <InfoLine
              key={token.symbol}
              title={token.symbol}
              value={display}
              valueTitle={toPrecision(
                scientificNotationToString(coinsAmounts[token.id].toString()),
                0
              )}
            />
          );
        })}
        <InfoLine
          title={intl.formatMessage({ id: 'total_stable_coins' })}
          value={toInternationalCurrencySystem(calTotalStableCoins, 3) || '0'}
          valueTitle={toPrecision(calTotalStableCoins, 0)}
        />
        <InfoLine
          title={intl.formatMessage({ id: 'liquidity_utilisation' })}
          value={utilisationDisplay || '-'}
          tipShow={true}
          tipContent={`<label class='text-xs'>${intl.formatMessage({
            id: 'volume_ratio',
          })}</label>`}
        />
        <InfoLine
          title={intl.formatMessage({ id: 'daily_volume' })}
          value={volume ? toInternationalCurrencySystem(volume) : '-'}
        />
      </Card>
    </div>
  );
}
