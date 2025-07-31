-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('IMAGE', 'AUDIO', 'VIDEO');

-- CreateTable
CREATE TABLE "MediaNFT" (
    "id" TEXT NOT NULL,
    "tokenId" INTEGER NOT NULL,
    "creatorAddress" VARCHAR(42) NOT NULL,
    "ownerAddress" VARCHAR(42) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "royaltyFeeInBasisPoints" BIGINT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "priceInWei" TEXT NOT NULL,
    "tags" TEXT[],
    "cid" VARCHAR(100) NOT NULL,
    "metadataCid" VARCHAR(100) NOT NULL,
    "fileType" "FileType",
    "fileSize" BIGINT,
    "domain" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MediaNFT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaAccessLog" (
    "id" TEXT NOT NULL,
    "tokenId" INTEGER NOT NULL,
    "buyerAddress" VARCHAR(42) NOT NULL,
    "amountPaid" BIGINT NOT NULL,
    "transactionHash" VARCHAR(66),
    "accessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaAccessLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaTransfer" (
    "id" TEXT NOT NULL,
    "tokenId" INTEGER NOT NULL,
    "fromAddress" VARCHAR(42) NOT NULL,
    "toAddress" VARCHAR(42) NOT NULL,
    "transactionHash" VARCHAR(66),
    "transferredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MediaNFT_tokenId_key" ON "MediaNFT"("tokenId");

-- CreateIndex
CREATE INDEX "MediaNFT_tokenId_idx" ON "MediaNFT"("tokenId");

-- CreateIndex
CREATE INDEX "MediaNFT_creatorAddress_idx" ON "MediaNFT"("creatorAddress");

-- CreateIndex
CREATE INDEX "MediaNFT_ownerAddress_idx" ON "MediaNFT"("ownerAddress");

-- CreateIndex
CREATE INDEX "MediaNFT_cid_idx" ON "MediaNFT"("cid");

-- CreateIndex
CREATE INDEX "MediaNFT_metadataCid_idx" ON "MediaNFT"("metadataCid");

-- CreateIndex
CREATE INDEX "MediaAccessLog_tokenId_idx" ON "MediaAccessLog"("tokenId");

-- CreateIndex
CREATE INDEX "MediaTransfer_tokenId_idx" ON "MediaTransfer"("tokenId");

-- AddForeignKey
ALTER TABLE "MediaAccessLog" ADD CONSTRAINT "MediaAccessLog_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "MediaNFT"("tokenId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaTransfer" ADD CONSTRAINT "MediaTransfer_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "MediaNFT"("tokenId") ON DELETE RESTRICT ON UPDATE CASCADE;
