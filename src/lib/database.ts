import { prisma } from "./prisma";
import type { MediaAccessData, MediaTransferData } from "../types/media";
import { FileType, MediaAccessLog, MediaNFT, MediaTransfer } from "@prisma/client";

export class DatabaseService {
  // Create a new media NFT record
  async createMediaNFT(data: {
    tokenId: number;
    creatorAddress: string;
    ownerAddress: string;
    title: string;
    description: string | null;
    cid: string;
    metadataCid: string;
    royaltyFeeInBasisPoints: bigint;
    price: number;
    priceInWei: bigint;
    tags: string[];
    fileType: FileType | null;
    fileSize: bigint | null;
    domain: string | null;
  }): Promise<MediaNFT> {
    try {
      return await prisma.mediaNFT.create({
        data: {
          tokenId: data.tokenId,
          creatorAddress: data.creatorAddress,
          ownerAddress: data.ownerAddress,
          title: data.title,
          description: data.description,
          cid: data.cid,
          metadataCid: data.metadataCid,
          royaltyFeeInBasisPoints: data.royaltyFeeInBasisPoints,
          price: data.price,
          priceInWei: data.priceInWei,
          tags: data.tags || [],
          fileType: data.fileType,
          fileSize: data.fileSize,
          domain: data.domain,
        },
      });
    } catch (error) {
      console.error("Error creating media NFT:", error);
      throw new Error("Failed to add media NFT to database");
    }
  }

  // Get a single media NFT by token ID
  async getMediaNFT(tokenId: number): Promise<MediaNFT | null> {
    try {
      return await prisma.mediaNFT.findUnique({
        where: { tokenId },
        include: {
          accessLogs: {
            orderBy: { accessedAt: "desc" },
            take: 10,
          },
          transfers: {
            orderBy: { transferredAt: "desc" },
            take: 10,
          },
        },
      });
    } catch (error) {
      console.error("Error fetching media NFT:", error);
      throw new Error("Failed to fetch media NFT");
    }
  }

  // Get all media NFTs with pagination
  async getAllMediaNFTs(limit: number = 50, offset: number = 0): Promise<MediaNFT[]> {
    try {
      return await prisma.mediaNFT.findMany({
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
        include: {
          _count: {
            select: {
              accessLogs: true,
              transfers: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error fetching media NFTs:", error);
      throw new Error("Failed to fetch media NFTs");
    }
  }

  // Get media NFTs by creator
  async getMediaNFTsByCreator(creatorAddress: string): Promise<MediaNFT[]> {
    try {
      return await prisma.mediaNFT.findMany({
        where: { creatorAddress },
        orderBy: { createdAt: "desc" },
        include: {
          _count: {
            select: {
              accessLogs: true,
              transfers: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error fetching creator NFTs:", error);
      throw new Error("Failed to fetch creator NFTs");
    }
  }

  // Get media NFTs by owner
  async getMediaNFTsByOwner(ownerAddress: string): Promise<MediaNFT[]> {
    try {
      return await prisma.mediaNFT.findMany({
        where: { ownerAddress },
        orderBy: { createdAt: "desc" },
        include: {
          _count: {
            select: {
              accessLogs: true,
              transfers: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error fetching owner NFTs:", error);
      throw new Error("Failed to fetch owner NFTs");
    }
  }

  // Update NFT owner (for transfers)
  async updateNFTOwner(tokenId: number, newOwnerAddress: string): Promise<MediaNFT> {
    try {
      return await prisma.mediaNFT.update({
        where: { tokenId },
        data: {
          ownerAddress: newOwnerAddress,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error("Error updating NFT owner:", error);
      throw new Error("Failed to update NFT owner");
    }
  }

  // Log media access
  async logMediaAccess(data: MediaAccessData): Promise<MediaAccessLog> {
    try {
      return await prisma.mediaAccessLog.create({
        data: {
          tokenId: data.tokenId,
          buyerAddress: data.buyerAddress,
          amountPaid: data.amountPaid,
          transactionHash: data.transactionHash,
        },
      });
    } catch (error) {
      console.error("Error logging media access:", error);
      throw new Error("Failed to log media access");
    }
  }

  // Log media transfer
  async logMediaTransfer(data: MediaTransferData): Promise<MediaTransfer> {
    try {
      return await prisma.mediaTransfer.create({
        data: {
          tokenId: data.tokenId,
          fromAddress: data.fromAddress,
          toAddress: data.toAddress,
          transactionHash: data.transactionHash,
        },
      });
    } catch (error) {
      console.error("Error logging media transfer:", error);
      throw new Error("Failed to log media transfer");
    }
  }

  // Get access logs for a token
  async getAccessLogs(tokenId: number): Promise<MediaAccessLog[]> {
    try {
      return await prisma.mediaAccessLog.findMany({
        where: { tokenId },
        orderBy: { accessedAt: "desc" },
      });
    } catch (error) {
      console.error("Error fetching access logs:", error);
      throw new Error("Failed to fetch access logs");
    }
  }

  // Get transfer logs for a token
  async getTransferLogs(tokenId: number): Promise<MediaTransfer[]> {
    try {
      return await prisma.mediaTransfer.findMany({
        where: { tokenId },
        orderBy: { transferredAt: "desc" },
      });
    } catch (error) {
      console.error("Error fetching transfer logs:", error);
      throw new Error("Failed to fetch transfer logs");
    }
  }

  // Search media NFTs
  async searchMediaNFTs(query: string): Promise<MediaNFT[]> {
    try {
      return await prisma.mediaNFT.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      console.error("Error searching media NFTs:", error);
      throw new Error("Failed to search media NFTs");
    }
  }
}

export const db = new DatabaseService();
