"use client";

import { shimmerBlur } from "@/utils/blur";
import { cn } from "@/utils/shadcn-utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import React from "react";

// Accept all standard Image props, with optional `blur` and optional override class
export interface NextImageProps extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  alt: string;
  placeholder?: PlaceholderValue | undefined;
  loading?: "lazy" | "eager" | undefined;
  priority?: boolean;
  blurDataURL?: string;
  sizes?: string;
}

const NextImage: React.FC<NextImageProps> = ({
  alt,
  placeholder = "blur",
  loading = "lazy",
  blurDataURL = shimmerBlur(),
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "object-contain",
  ...props
}) => {
  return (
    <Image
      fill
      alt={alt}
      className={cn("object-contain", className)}
      sizes={sizes}
      priority={priority}
      loading={loading}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
};

export default NextImage;
