import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";
import { BrowserProvider, Contract, ethers, JsonRpcSigner } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

interface MediaContractProps {
  provider: BrowserProvider;
  signer: JsonRpcSigner;
  contract: Contract;
}

const MediaContractContext = createContext<MediaContractProps | undefined>(undefined);

export function MediaContractProvider({ children }: { children: React.ReactNode }) {
  const [contractState, setContractState] = useState<MediaContractProps>();
  const [hasMetaMask, setHasMetaMask] = useState<boolean | undefined>();

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum === "undefined") {
        setHasMetaMask(false);
        return;
      }

      setHasMetaMask(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(MEDIA_CONTRACT_ADDRESS, MEDIA_CONTRACT_ABI, signer);

      console.log({ provider, signer, contract });

      setContractState({ provider, signer, contract });
    };

    init();
  }, []);

  if (!hasMetaMask) {
    return <div>Please Install MetaMask to Continue</div>
  }

  if (!contractState) {
    return <div>Loading Web3...</div>;
  }

  return (
    <MediaContractContext.Provider value={contractState}>{children}</MediaContractContext.Provider>
  );
}

export function useMediaContract() {
  const context = useContext(MediaContractContext);
  if (!context) {
    throw new Error("useContract must be used within a ContractProvider.");
  }
  return context;
}
