import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";
import { BrowserProvider, Contract, ethers, JsonRpcSigner } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

interface MediaContractProps {
  provider: BrowserProvider;
  signer: JsonRpcSigner;
  contract: Contract;
}

const ContractContext = createContext<MediaContractProps | undefined>(undefined);

export function ContractProvider({ children }: { children: React.ReactNode }) {
  const [contractState, setContractState] = useState<MediaContractProps>();

  useEffect(() => {
    const init = async () => {
      if (typeof window === "undefined" || !window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(MEDIA_CONTRACT_ADDRESS, MEDIA_CONTRACT_ABI, signer);

      setContractState({ provider, signer, contract });
    };

    init();
  }, []);

  if (!contractState) return null;

  return <ContractContext.Provider value={contractState}>{children}</ContractContext.Provider>;
}

export function useContract() {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error("useContract must be used within a ContractProvider.");
  }
  return context;
}
