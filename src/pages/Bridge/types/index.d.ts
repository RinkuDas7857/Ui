declare namespace BridgeModel {
  type BridgeSupportChain = 'ETH' | 'NEAR';
  type BridgeTokenMeta = {
    symbol: string;
    name: string;
    decimals: number;
    icon: string;
    addresses: {
      [k in BridgeSupportChain]: string;
    };
  };
  type BridgeTransferFormData = {
    from: BridgeTransfer;
    to: BridgeTransfer & {
      isCustomAccountAddress?: boolean;
      customAccountAddress?: string;
    };
  };
  type BridgeTransfer = {
    chain: BridgeSupportChain;
    tokenMeta?: BridgeTokenMeta;
    amount?: string;
    accountAddress?: string;
  };
  type BridgeTransaction = import('@near-eth/client').DecoratedTransfer & {
    amount?: string;
    decimals?: number;
    startTime: string;
    sourceNetwork: 'ethereum' | 'near';
    symbol?: string;
    lockHashes?: string[];
    unlockHashes?: string[];
    burnHashes?: string[];
    mintHashes?: string[];
  };
}
