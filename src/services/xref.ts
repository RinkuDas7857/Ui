import {
  ONE_YOCTO_NEAR,
  REF_FI_CONTRACT_ID,
  REF_TOKEN_ID,
  refContractViewFunction,
  Transaction,
} from '../services/near';
import { toNonDivisibleNumber } from '../utils/numbers';
import { storageDepositAction } from '../services/creators/storage';
import getConfig from '../services/config';
import { checkTokenNeedsStorageDeposit } from './token';
import { ftGetStorageBalance } from '../services/ft-contract';
import { NEW_ACCOUNT_STORAGE_COST } from '../services/wrap-near';
import { getCurrentWallet } from '../utils/wallets-integration';
import { executeMultipleTransactionsV2 } from '../services/near';

const XREF_TOKEN_ID = getConfig().XREF_TOKEN_ID;
export const XREF_TOKEN_DECIMALS = 18;

export const metadata = async () => {
  return await refContractViewFunction({
    methodName: 'contract_metadata',
  });
};

export const getPrice = async () => {
  return await refContractViewFunction({
    methodName: 'get_virtual_price',
  }).catch(() => {
    return '0';
  });
};

interface StakeOptions {
  amount: string;
  msg?: string;
}

export const stake = async ({ amount, msg = '' }: StakeOptions) => {
  const transactions: Transaction[] = [
    {
      receiverId: REF_TOKEN_ID,
      functionCalls: [
        {
          methodName: 'ft_transfer_call',
          args: {
            receiver_id: XREF_TOKEN_ID,
            amount: toNonDivisibleNumber(XREF_TOKEN_DECIMALS, amount),
            msg,
          },
          amount: ONE_YOCTO_NEAR,
          gas: '50000000000000',
        },
      ],
    },
  ];

  const balance = await ftGetStorageBalance(XREF_TOKEN_ID);

  if (!balance || balance.total === '0') {
    transactions.unshift({
      receiverId: XREF_TOKEN_ID,
      functionCalls: [
        {
          methodName: 'storage_deposit',
          args: {
            account_id: getCurrentWallet()?.wallet?.getAccountId(),
            registration_only: true,
          },
          gas: '50000000000000',
          amount: NEW_ACCOUNT_STORAGE_COST,
        },
      ],
    });
  }

  const needDeposit = await checkTokenNeedsStorageDeposit();
  if (needDeposit) {
    transactions.unshift({
      receiverId: REF_FI_CONTRACT_ID,
      functionCalls: [storageDepositAction({ amount: needDeposit })],
    });
  }
  return await executeMultipleTransactionsV2(transactions);
};

interface UnstakeOptions {
  amount: string;
  msg?: string;
}
export const unstake = async ({ amount, msg = '' }: UnstakeOptions) => {
  const transactions: Transaction[] = [
    {
      receiverId: XREF_TOKEN_ID,
      functionCalls: [
        {
          methodName: 'unstake',
          args: {
            amount: toNonDivisibleNumber(XREF_TOKEN_DECIMALS, amount),
            msg,
          },
          amount: ONE_YOCTO_NEAR,
          gas: '100000000000000',
        },
      ],
    },
  ];
  const balance = await ftGetStorageBalance(REF_TOKEN_ID);

  if (!balance) {
    transactions.unshift({
      receiverId: REF_TOKEN_ID,
      functionCalls: [
        {
          methodName: 'storage_deposit',
          args: {
            account_id: getCurrentWallet().wallet.getAccountId(),
            registration_only: true,
          },
          gas: '50000000000000',
          amount: NEW_ACCOUNT_STORAGE_COST,
        },
      ],
    });
  }
  const needDeposit = await checkTokenNeedsStorageDeposit();
  if (needDeposit) {
    transactions.unshift({
      receiverId: REF_FI_CONTRACT_ID,
      functionCalls: [storageDepositAction({ amount: needDeposit })],
    });
  }

  return await executeMultipleTransactionsV2(transactions);
};
export interface XrefMetaData {
  version: string;
  owner_id: string;
  locked_token: string;
  undistributed_reward: string;
  locked_token_amount: string;
  cur_undistributed_reward: string;
  cur_locked_token_amount: string;
  supply: string;
  prev_distribution_time_in_sec: number;
  reward_genesis_time_in_sec: number;
  reward_per_sec: string;
  account_number: number;
}
