import React, { createContext, useContext, useEffect, useState } from 'react';

import BridgeTransactionStatusModal from '../components/BridgeTransactionStatus';
import { useRoute, useRouter } from '../hooks/useRouter';
import { toast } from 'react-toastify';
import useRainbowBridge from '../hooks/useRainbowBridge';
import bridgeHistoryService from '../services/history';

type Props = {
  openBridgeTransactionStatusModal: (
    transaction: BridgeModel.BridgeTransaction
  ) => void;
  unclaimedTransactions: BridgeModel.BridgeTransaction[];
};

const BridgeTransactionContext = createContext<Props>(null);

export function useBridgeTransactionContext() {
  return useContext(BridgeTransactionContext);
}

export default function BridgeTransactionProvider({ children }: any) {
  const { setupRainbowBridge, unclaimedTransactions } = useRainbowBridge({
    enableSubscribeUnclaimed: true,
  });

  useEffect(() => {
    setupRainbowBridge();
  }, [setupRainbowBridge]);

  const { query } = useRoute<{
    transactionHashes?: string;
    errorMessage?: string;
  }>();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  function openBridgeTransactionStatusModal(
    transaction: BridgeModel.BridgeTransaction
  ) {
    setTransaction(transaction);
    setIsOpen(true);
  }

  const [transaction, setTransaction] =
    useState<BridgeModel.BridgeTransaction>();

  useEffect(() => {
    async function handleTransactionStatus() {
      if (query.transactionHashes) {
        const result = await bridgeHistoryService.query({
          hash: query.transactionHashes,
        });
        if (result?.[0]) openBridgeTransactionStatusModal(result[0]);

        router.replace({ search: '' });
      }
      if (query.errorMessage) {
        const errorMessage =
          'Transaction Failed: ' + decodeURIComponent(query.errorMessage);
        toast.error(errorMessage, {
          theme: 'dark',
        });
        router.replace({ search: '' });
      }
    }
    handleTransactionStatus();
  }, []);

  const exposes = {
    openBridgeTransactionStatusModal,
    unclaimedTransactions,
  };

  return (
    <BridgeTransactionContext.Provider value={exposes}>
      {children}
      {transaction && (
        <BridgeTransactionStatusModal
          transaction={transaction}
          isOpen={isOpen}
          toggleOpenModal={toggleOpen}
        ></BridgeTransactionStatusModal>
      )}
    </BridgeTransactionContext.Provider>
  );
}
