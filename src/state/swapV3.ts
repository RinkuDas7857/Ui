import React, { useState, useEffect, useContext } from 'react';
import {
  UserOrderInfo,
  list_active_orders,
  list_history_orders,
} from '../services/swapV3';
import { WalletContext } from '../utils/sender-wallet';

export const useMyOrders = () => {
  const [activeOrder, setActiveOrder] = useState<UserOrderInfo[]>();
  const [historyOrder, setHistoryOrder] = useState<UserOrderInfo[]>();

  const { globalState } = useContext(WalletContext);
  const isSignedIn = globalState.isSignedIn;

  useEffect(() => {
    if (!isSignedIn) return;

    list_active_orders().then(setActiveOrder);
    list_history_orders().then(setHistoryOrder);
  }, [isSignedIn]);

  return {
    activeOrder: activeOrder?.length > 0 ? activeOrder : null,
    historyOrder: historyOrder?.length > 0 ? historyOrder : null,
  };
};
