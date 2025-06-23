"use client";

import { useAccount, useSignMessage } from "wagmi";
import { uploadFileWithSignature } from "@/actions/pinata";

export function useSignedUpload() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync, isPending } = useSignMessage();

  const uploadWithSignature = async (file: File) => {
    if (!isConnected || !address) {
      throw new Error("Wallet not connected");
    }

    try {
      // Create a message to sign
      const message = `Uploading file: ${file.name} (${file.size} bytes) at ${Date.now()}`;
      console.log(message);

      // Sign the message
      const signature = await signMessageAsync({ message });
      console.log("Signed");

      // Create FormData for server action
      const formData = new FormData();
      formData.append("file", file);

      // Upload with signature
      const result = await uploadFileWithSignature(formData, {
        signature,
        signer: address,
        message,
        timestamp: Date.now(),
      });

      return result;
    } catch (error) {
      console.error("Signed upload failed:", error);
      throw error;
    }
  };

  return {
    uploadWithSignature,
    isPending,
  };
}
