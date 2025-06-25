"use client";

import { Button } from "@/components/shadcn-ui/button";
import { useSignedUpload } from "@/hooks/use-signed-upload";
import React, { useRef, useState } from "react";

const inputFields = [
  {
    name: "title",
    label: "Title",
  },
  {
    name: "description",
    label: "Description",
  },
  {
    name: "royaltyFee",
    label: "Royalty Fee",
  },
  {
    name: "tags",
    label: "Tags",
  },
];

export default function IPFSTest() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { uploadWithSignature, isConnected, isPending } = useSignedUpload();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Please connect to a wallet");
      return;
    }

    try {
      if (!fileInputRef.current || !fileInputRef.current.files || !formRef.current) {
        alert("Please upload a file");
        return;
      }

      setIsLoading(true);

      const file = fileInputRef.current.files[0];
      const formData = new FormData(formRef.current);

      const nftData = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        royaltyFee: BigInt((formData.get("royaltyFee") as string) || "0"),
        tags: ((formData.get("tags") as string) || "").split(",").map(tag => tag.trim()),
      };

      Object.entries(nftData).forEach(([key, value]) => {
        if (!value) {
          alert(`Key not defined: ${key}`);
          setIsLoading(false);
          return;
        }
      });

      if (file) {
        uploadWithSignature(file, nftData).then(result => {
          console.log(result);
          setIsLoading(false);
        });
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-4 w-[600px]">
      <div className="flex gap-2">
        <div
          className="border-2 w-32 rounded-lg border-dotted cursor-pointer flex items-center justify-center"
          onClick={handleInputClick}
        >
          <h3 className="text-xs text-primary">Click</h3>
        </div>
        <input type="file" ref={fileInputRef} className="hidden" />
        <div className="flex flex-col gap-2 flex-1">
          {inputFields.map(({ name, label }, index) => (
            <React.Fragment key={index}>
              <label htmlFor={name}>{label}</label>
              <input type="text" name={name} className="p-1 flex-1" />
            </React.Fragment>
          ))}
        </div>
      </div>
      <Button type="submit" disabled={isPending || isLoading}>
        {isPending ? "Waiting For Approval" : isLoading ? "Uploading..." : "IPFS Upload Test"}
      </Button>
    </form>
  );
}
