"use client";

import { Button } from "@/components/shadcn-ui/button";
import { useSignedUpload } from "@/hooks/use-signed-upload";
import React, { useRef, useState } from "react";

export default function IPFSTest() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadWithSignature, isPending } = useSignedUpload();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsLoading(true);
      const file = e.target.files?.[0];
      if (file) {
        uploadWithSignature(file).then(result => {
          console.log(result);
          setIsLoading(false);
        });
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
      <Button type="button" onClick={handleClick} disabled={isPending || isLoading}>
        {isPending ? "Waiting For Approval" : isLoading ? "Uploading..." : "IPFS Upload Test"}
      </Button>
    </>
  );
}
