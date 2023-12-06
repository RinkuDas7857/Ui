import React, { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';

import SvgIcon from './SvgIcon';
import Button from './Button';
import { useRouter } from '../hooks/useRouter';
import useRainbowBridge from '../hooks/useRainbowBridge';
import { formatTxExplorerUrl } from '../utils/format';
import rainbowBridgeService from '../services/rainbowBridge';
import { BridgeConfig } from '../config';

export default function BridgeTransactionStatusModal({
  transaction: _transaction,
  toggleOpenModal,
  ...props
}: Modal.Props & {
  transaction: BridgeModel.BridgeTransaction;
  toggleOpenModal: () => void;
}) {
  const { callAction, actionLoading } = useRainbowBridge();

  const [transaction, setTransaction] =
    useState<BridgeModel.BridgeTransaction>(_transaction);

  const router = useRouter();

  function handleOpenHistory() {
    toggleOpenModal();
    router.push('/bridge/history');
  }

  async function handleAction() {
    await callAction(transaction.id);
    const result = await rainbowBridgeService.getById(transaction.id);
    setTransaction(result);
    // toggleOpenModal();
  }

  function handleNewTransfer() {
    toggleOpenModal();
    router.push('/bridge');
  }

  function handleOpenTx() {
    window.open(
      formatTxExplorerUrl(
        transaction.sourceNetwork,
        transaction.lockHashes?.[0] ||
          transaction.unlockHashes?.[0] ||
          transaction.burnHashes?.[0] ||
          transaction.mintHashes?.[0]
      )
    );
  }

  return (
    <Modal {...props} onRequestClose={toggleOpenModal}>
      <div className="bridge-modal" style={{ width: '428px' }}>
        <div className="flex items-center justify-between">
          <span className="text-base text-white font-medium">
            Transaction Detail
          </span>
          <Button text onClick={toggleOpenModal}>
            <SvgIcon name="IconClose" />
          </Button>
        </div>
        <div className="flex items-center justify-center my-8 gap-2">
          <SvgIcon
            name={
              transaction.sourceNetwork === 'ethereum'
                ? 'IconChainEthereum'
                : 'IconChainNear'
            }
            className="text-2xl"
          />
          <div className="bridge-status-process">
            {transaction.status === 'completed' ? (
              <SvgIcon name="IconSuccessCircle" className="text-5xl" />
            ) : (
              <SvgIcon name="IconWaiting" className="text-5xl" />
            )}
          </div>
          <SvgIcon
            name={
              transaction.sourceNetwork === 'near'
                ? 'IconChainEthereum'
                : 'IconChainNear'
            }
            className="text-2xl"
          />
        </div>
        <div className="my-6 text-center text-white">
          {transaction.status === 'completed' && `Bridge Completed`}
          {transaction.status === 'in-progress' &&
            `Est. Bridging Time: ${BridgeConfig.Rainbow.wait}`}
        </div>
        <div className="text-center mb-6">
          Transaction {transaction.status}. You can view your transaction on the{' '}
          <Button type="primary" text onClick={handleOpenHistory}>
            bridge transaction history
          </Button>
          .
        </div>
        <div className="text-center">
          <Button onClick={handleOpenTx}>
            <span className="inline-flex items-center text-primary text-xs">
              SRC TX <SvgIcon name="IconExport" className="text-xs ml-2" />
            </span>
          </Button>
        </div>
        <div className="mt-6">
          {transaction.status === 'action-needed' && transaction.callToAction && (
            <Button
              type="primary"
              size="large"
              className="w-full "
              loading={actionLoading}
              onClick={handleAction}
            >
              {transaction.callToAction}
            </Button>
          )}

          {transaction.status === 'completed' && (
            <Button
              size="large"
              plain
              className="w-full"
              onClick={handleNewTransfer}
            >
              + New Transfer
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
