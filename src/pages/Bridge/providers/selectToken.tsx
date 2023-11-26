import React, { createContext, useContext, useRef, useState } from 'react';

import { TokenSelector, TokenSelectorProps } from '../components/TokenSelector';

type Props = {
  open: (
    props: Pick<TokenSelectorProps, 'chain' | 'token'>
  ) => Promise<BridgeModel.BridgeTokenMeta>;
};

const TokenSelectorContext = createContext<Props>(null);

export default function TokenSelectorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [chain, setChain] = useState<BridgeModel.BridgeSupportChain>('ETH');
  const [tokenMeta, setTokenMeta] = useState<BridgeModel.BridgeTokenMeta>();

  const [modalResolve, setModalResolve] =
    useState<(v: BridgeModel.BridgeTokenMeta) => void>();
  const [modalReject, setModalReject] = useState<() => void>();

  const open: Props['open'] = ({ chain, token }) => {
    setChain(chain);
    setTokenMeta(token);
    setShow(true);
    return new Promise<BridgeModel.BridgeTokenMeta>((resolve, reject) => {
      setModalResolve(() => resolve);
      setModalReject(() => reject);
    });
  };

  const exposes = {
    open,
  };
  return (
    <TokenSelectorContext.Provider value={exposes}>
      {children}
      <TokenSelector
        isOpen={show}
        toggleOpenModal={() => setShow(!show)}
        chain={chain}
        token={tokenMeta}
        onSelected={(item) => modalResolve?.(item)}
        onCancel={() => modalReject?.()}
      />
    </TokenSelectorContext.Provider>
  );
}

export function useTokenSelectorContext() {
  const context = useContext(TokenSelectorContext);
  if (!context) {
    throw new Error(
      'useTokenSelectorContext must be used within a TokenSelectorProvider'
    );
  }
  return context;
}
