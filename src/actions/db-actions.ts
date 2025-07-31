"use server";

import { db } from "@/lib/database";
import { MediaNFTWithTempUri } from "@/types/media";
import { MediaNFT } from "@prisma/client";
import { getAccessLinkByCid } from "./nft-actions";

export async function getAllMedia(limit?: number, offset?: number): Promise<MediaNFT[]> {
  return await db.getAllMediaNFTs(limit, offset);
}

export async function getAllMediaWithURI(
  limit?: number,
  offset?: number
): Promise<MediaNFTWithTempUri[]> {
  const dbResult = await db.getAllMediaNFTs(limit, offset);
  const result = Promise.all(
    dbResult.map(async item => {
      const uri = await getAccessLinkByCid(item.cid);
      if (uri.error) {
        console.error("Failed to get URI from pinata.")
      }

      return {
        ...item,
        tempAccessUri: uri.data || "",
      };
    })
  );
  return result;
}
