"use client";

import { UploadStatus } from "@/hooks/use-signed-upload";
import { cn } from "@/utils/shadcn-utils";
import React from "react";

interface DisplayUploadStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: UploadStatus;
}

const statusMessages: Record<Exclude<UploadStatus, null>, string> = {
  "no-wallet": "Please connect your wallet.",
  "uploading": "Uploading media...",
  "upload-failed": "Media upload failed.",
  "creating-nft": "Creating NFT metadata...",
  "minting": "Minting NFT...",
  "mint-failed": "Minting failed.",
  "success": "NFT minted successfully!",
};

const statusColors: Record<Exclude<UploadStatus, null>, string> = {
  "no-wallet": "text-red-500",
  "uploading": "text-gray-500",
  "upload-failed": "text-red-500",
  "creating-nft": "text-gray-500",
  "minting": "text-gray-500",
  "mint-failed": "text-red-500",
  "success": "text-green-600",
};

export default function DisplayUploadStatus({
  status,
  className,
  ...props
}: DisplayUploadStatusProps) {
  const message = status ? statusMessages[status] : null;
  const colorClass = status ? statusColors[status] : "";

  return (
    <div
      className={cn(
        "w-full text-sm text-center transition-opacity duration-500 ease-in-out",
        status ? "opacity-100" : "opacity-0",
        colorClass,
        className
      )}
      {...props}
    >
      {message}
    </div>
  );
}
