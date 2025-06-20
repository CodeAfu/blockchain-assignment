-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('audio', 'video', 'image');

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "ipfsHash" TEXT NOT NULL,
    "mediaType" "MediaType" NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Media_ipfsHash_key" ON "Media"("ipfsHash");
