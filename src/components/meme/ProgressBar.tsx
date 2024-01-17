import React, { useContext, useMemo } from 'react';
import Big from 'big.js';
import {
  DragonHead,
  DragonTail,
  DragonBody,
  LonkHead,
  LonkTail,
  LonkBody,
  NekoTail,
  NekoHead,
  NekoBody,
  ShitzuHead,
  ShitzuTail,
  ShitzuBody,
} from './icons';
import { MemeContext } from './context';
import { formatPercentage } from '../../utils/uiNumber';

const ProgressBar = () => {
  const config = getProgressConfig();
  const { seeds } = useContext(MemeContext);
  const totalTvl = useMemo(() => {
    const totalTvl = Object.entries(seeds)
      .reduce((acc, [seed_id, seed]) => {
        return acc.plus(seed.seedTvl || 0);
      }, Big(0))
      .toFixed();
    return totalTvl;
  }, [seeds]);
  return (
    <div className="text-white" style={{ marginTop: '80px' }}>
      <div className="flex items-center justify-center">
        <span className="text-3xl gotham_bold text-white">
          MEME Gauge Weight
        </span>
      </div>
      {/* Race */}
      {Object.entries(seeds).map(([seed_id, seed]) => {
        let addW = '0';
        let percent = '';
        const seedTvl = seed.seedTvl;
        if (Big(seedTvl).gt(0) && Big(totalTvl).gt(0)) {
          const p = Big(seedTvl).div(totalTvl);
          addW = p.mul(800).toFixed();
          percent = formatPercentage(p.mul(100).toFixed());
        }
        return (
          <RaceTemplate key={seed_id}>
            <div
              className="flex"
              style={{
                transform: `translateY(${config.progress[seed_id].translateY})`,
              }}
            >
              {config.progress[seed_id].tail}
              {config.progress[seed_id].body(
                config.progress[seed_id].initW,
                addW,
                percent
              )}
              {config.progress[seed_id].head}
            </div>
          </RaceTemplate>
        );
      })}
    </div>
  );
};

function RaceTemplate({ children }: any) {
  return (
    <div
      className="border-b border-greenLight border-opacity-10"
      style={{ height: '166px' }}
    >
      {children}
    </div>
  );
}

const LONK_CONFIG = {
  head: <LonkHead className="relative" style={{ top: '-21px' }} />,
  tail: <LonkTail className="relative" />,
  body: (initWidth, addWidth, percent) => {
    const w = Big(initWidth || 0)
      .plus(addWidth || 0)
      .toFixed();
    return (
      <div className="flex justify-center relative">
        <div
          style={{ width: `${w + 'px'}`, top: '-1px' }}
          className="relative overflow-hidden"
        >
          <LonkBody />
        </div>
        <span className="absolute top-2 text-xl text-white gotham_bold z-10">
          {percent || ''}
        </span>
      </div>
    );
  },
};
const NEKO_CONFIG = {
  head: <NekoHead className="relative" style={{ top: '-16px' }} />,
  tail: <NekoTail />,
  body: (initWidth, addWidth, percent) => {
    const w = Big(initWidth || 0)
      .plus(addWidth || 0)
      .toFixed();
    return (
      <div className="flex justify-center relative">
        <div
          style={{ width: `${w + 'px'}`, top: '12px' }}
          className="relative overflow-hidden"
        >
          <NekoBody />
        </div>
        <span className="absolute top-4 text-xl text-black gotham_bold z-10">
          {percent || ''}
        </span>
      </div>
    );
  },
};
const DRAGON_CONFIG = {
  head: <DragonHead className="relative" style={{ top: '-51px' }} />,
  tail: <DragonTail />,
  body: (initWidth, addWidth, percent) => {
    const w = Big(initWidth || 0)
      .plus(addWidth || 0)
      .toFixed();
    return (
      <div className="flex justify-center relative">
        <div
          style={{ width: `${w + 'px'}`, top: '0px' }}
          className="relative overflow-hidden"
        >
          <DragonBody />
        </div>
        <span className="absolute top-2 text-xl text-white gotham_bold z-10">
          {percent || ''}
        </span>
      </div>
    );
  },
};
const SHITZU_CONFIG = {
  head: <ShitzuHead className="relative" style={{ top: '-16px' }} />,
  tail: <ShitzuTail />,
  body: (initWidth, addWidth, percent) => {
    const w = Big(initWidth || 0)
      .plus(addWidth || 0)
      .toFixed();
    return (
      <div className="flex justify-center relative">
        <div
          style={{ width: `${w + 'px'}`, top: '19px' }}
          className="relative overflow-hidden"
        >
          <ShitzuBody />
        </div>
        <span className="absolute top-6 text-xl text-black gotham_bold z-10 transform translate-x-4">
          {percent || ''}
        </span>
      </div>
    );
  },
};
export function getProgressConfig(): any {
  const env: string = process.env.REACT_APP_NEAR_ENV;
  if (env == 'pub-testnet') {
    return {
      progress: {
        'lonk.fakes.testnet': '',
        'neko.fakes.testnet': '',
        'blackdragon.fakes.testnet': '',
        'shitzu.fakes.testnet': '',
      },
    };
  } else if (env == 'testnet') {
    return {
      progress: {
        'lonk.fakes.testnet': {
          head: LONK_CONFIG.head,
          tail: LONK_CONFIG.tail,
          body: LONK_CONFIG.body,
          translateY: '110px',
          initW: '40',
        },
        'neko.fakes.testnet': {
          head: NEKO_CONFIG.head,
          tail: NEKO_CONFIG.tail,
          body: NEKO_CONFIG.body,
          translateY: '100px',
          initW: '90',
        },
        'blackdragon.fakes.testnet': {
          head: DRAGON_CONFIG.head,
          tail: DRAGON_CONFIG.tail,
          body: DRAGON_CONFIG.body,
          translateY: '110px',
          initW: '0',
        },
        'shitzu.fakes.testnet': {
          head: SHITZU_CONFIG.head,
          tail: SHITZU_CONFIG.tail,
          body: SHITZU_CONFIG.body,
          translateY: '90px',
          initW: '60',
        },
      },
    };
  } else {
    return {
      progress: {
        'lonk.fakes.testnet': '',
        'neko.fakes.testnet': '',
        'blackdragon.fakes.testnet': '',
        'shitzu.fakes.testnet': '',
      },
    };
  }
}
export default ProgressBar;
