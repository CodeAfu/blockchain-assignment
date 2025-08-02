import * as React from "react";
import Image from "next/image";
import { cn } from "@/utils/shadcn-utils";

interface MarketplaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  imageUrl?: string;
  mediaType?: "image" | "audio" | "video";
}

export function MarketplaceCard({
  title,
  description,
  imageUrl,
  mediaType = "image",
  className,
  ...props
}: MarketplaceCardProps) {
  const aspectRatio =
    mediaType === "image"
      ? "aspect-[4/5]"
      : mediaType === "video"
        ? "aspect-video"
        : "aspect-[1/1]";

  return (
    <div
      className={cn(
        "relative group rounded-xl overflow-hidden bg-white/10 backdrop-blur p-3 shadow transition hover:scale-[1.02] flex flex-col",
        className
      )}
      {...props}
    >
      <div className={cn("relative w-full rounded-md overflow-hidden mb-3 bg-muted", aspectRatio)}>
        {mediaType === "image" && imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        )}

        {mediaType === "video" && imageUrl && (
          <video src={imageUrl} controls className="w-full h-full object-cover" />
        )}

        {mediaType === "audio" && imageUrl && (
          <div className="flex items-center justify-center w-full h-full p-4 bg-black/50 text-sm">
            <audio controls src={imageUrl} className="w-full" />
          </div>
        )}

        {!imageUrl && (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            No media
          </div>
        )}
      </div>

      <div className="">
        <h3 className="font-semibold">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
    </div>
  );
}
