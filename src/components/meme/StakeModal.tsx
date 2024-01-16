import React, { useState, useContext, useMemo } from 'react';
import Big from 'big.js';
import { BlackDragonIcon, LonkIcon, NekoIcon, Shitzu } from './icons';
import {
  OprationButton,
  ButtonTextWrapper,
} from 'src/components/button/Button';
import { isMobile } from '../../utils/device';
import { ModalCloseIcon, ArrowRightIcon } from './icons';
import { InputAmount } from './InputBox';
import Modal from 'react-modal';
import { MemeContext } from './context';
import { toNonDivisibleNumber, toReadableNumber } from '../../utils/numbers';
import { stake } from '../../services/meme';
import { Seed, FarmBoost } from '~src/services/farm';
import {
  toInternationalCurrencySystem_usd,
  toInternationalCurrencySystem_number,
  formatPercentage,
} from '../../utils/uiNumber';

function StakeModal(props: any) {
  const { seeds, user_balances, tokenPriceList, user_seeds } =
    useContext(MemeContext);
  const { isOpen, onRequestClose, seed_id } = props;
  const [amount, setAmount] = useState('');
  const [stakeLoading, setStakeLoading] = useState(false);
  const seed = seeds[seed_id];
  const balance = toReadableNumber(
    seed.seed_decimal || 0,
    user_balances[seed_id] || '0'
  );
  const cardWidth = isMobile() ? '90vw' : '28vw';
  const cardHeight = isMobile() ? '90vh' : '80vh';
  const disabled = Big(amount || 0).lte(0) || Big(amount || 0).gt(balance);
  const [feedFrom, feedTo] = useMemo(() => {
    const from = toReadableNumber(
      seed.seed_decimal,
      user_seeds[seed_id]?.free_amount || '0'
    );
    const to = Big(amount || 0).plus(from);
    return [from, to];
  }, [amount, seed, user_seeds]);
  function stakeToken() {
    setStakeLoading(true);
    stake({
      seed_id,
      amount: Big(toNonDivisibleNumber(seed.seed_decimal, amount)).toFixed(0),
    });
  }
  function getSeedApr(seed_id: string) {
    const seed = seeds[seed_id];
    const farms = seed.farmList;
    let apr = new Big(0);
    const allPendingFarms = isPending(seed);
    farms.forEach(function (item: FarmBoost) {
      const pendingFarm = item.status == 'Created' || item.status == 'Pending';
      if (allPendingFarms || (!allPendingFarms && !pendingFarm)) {
        apr = apr.plus(item.apr);
      }
    });
    return formatPercentage(apr.mul(100).toFixed());
  }
  function isPending(seed: Seed) {
    let pending: boolean = true;
    const farms = seed.farmList;
    for (let i = 0; i < farms.length; i++) {
      if (farms[i].status != 'Created' && farms[i].status != 'Pending') {
        pending = false;
        break;
      }
    }
    return pending;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div className="flex flex-col">
        <div
          className="px-5 xs:px-3 md:px-3 py-6 rounded-2xl bg-swapCardGradient overflow-auto"
          style={{
            width: cardWidth,
            maxHeight: cardHeight,
            border: '1px solid rgba(151, 151, 151, 0.2)',
          }}
        >
          <div className="title flex items-center justify-end">
            <ModalCloseIcon
              className="cursor-pointer"
              onClick={onRequestClose}
            />
          </div>
          <div className="mt-5">
            <div className="flex flex-col items-center gap-5">
              <img
                src={seed?.token_meta_data.icon}
                style={{ width: '86px', height: '86px' }}
                className="rounded-full"
              />
              <span className="text-2xl text-white gotham_bold">
                Feed {seed?.token_meta_data.symbol}
              </span>
            </div>
            <InputAmount
              token={seed.token_meta_data}
              tokenPriceList={tokenPriceList}
              balance={balance}
              changeAmount={setAmount}
              amount={amount}
            />
            <div className="mt-4 px-2">
              <Template
                title="You feed"
                from={toInternationalCurrencySystem_number(feedFrom)}
                to={toInternationalCurrencySystem_number(feedTo)}
              />
              <Template title="Gauge Weight" from="64.2%" to="67.8%" />
              <Template title="Staking APR" value={getSeedApr(seed_id)} />
            </div>
            <OprationButton
              minWidth="7rem"
              disabled={disabled}
              onClick={stakeToken}
              className={`flex flex-grow items-center justify-center bg-greenLight text-boxBorder mt-6 rounded-xl h-12 text-base gotham_bold focus:outline-none ${
                disabled || stakeLoading ? 'opacity-40' : ''
              }`}
            >
              <ButtonTextWrapper
                loading={stakeLoading}
                Text={() => <>Feed</>}
              />
            </OprationButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function Template({
  title,
  from,
  to,
  value,
}: {
  title: string;
  from?: string;
  to?: string;
  value?: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-sm text-primaryText">{title}</span>
      {from ? (
        <div className="flex items-center text-sm text-white gap-2">
          <span className="line-through">{from}</span>
          <ArrowRightIcon />
          <span>{to}</span>
        </div>
      ) : (
        <span className="text-sm text-white">{value}</span>
      )}
    </div>
  );
}
export default StakeModal;
