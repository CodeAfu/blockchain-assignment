# MediaNFT Database Schema Documentation

## Database Overview

This schema is designed for managing Media NFTs, enabling features such as upload, ownership tracking, and royalty handling for digital media (images, audio, and video). The database uses PostgreSQL and is managed through Prisma ORM.

---

## Data Models

### 1. `MediaNFT`

Stores information about each media NFT.

| Field                     | Type     | Description                                      |
| ------------------------- | -------- | ------------------------------------------------ |
| `id`                      | String   | Unique internal ID (`cuid()`)                    |
| `tokenId`                 | Int      | Unique on-chain token ID                         |
| `creatorAddress`          | String   | Wallet address of the original creator           |
| `ownerAddress`            | String   | Wallet address of the current owner              |
| `title`                   | String   | Title of the media NFT                           |
| `description`             | Text?    | Description (optional)                           |
| `royaltyFeeInBasisPoints` | BigInt   | Royalty fee in basis points (e.g., 500 = 5%)     |
| `price`                   | Float    | Price in ETH                                     |
| `priceInWei`              | String   | Price in Wei (as string to support large values) |
| `tags`                    | String[] | Comma-separated tags                             |
| `cid`                     | String   | IPFS CID for file                                |
| `metadataCid`             | String   | IPFS CID for metadata                            |
| `fileType`                | Enum     | IMAGE, AUDIO, or VIDEO                           |
| `fileSize`                | BigInt?  | Optional: size of the file                       |
| `domain`                  | String?  | Optional: domain/source of the file              |
| `createdAt`               | DateTime | Timestamp when created                           |
| `updatedAt`               | DateTime | Timestamp when last updated                      |

---

### 2. `MediaAccessLog`

Logs whenever a media NFT is accessed (e.g., viewed or purchased).

| Field             | Type     | Description                          |
| ----------------- | -------- | ------------------------------------ |
| `id`              | String   | Unique ID                            |
| `tokenId`         | Int      | Foreign key to `MediaNFT`            |
| `buyerAddress`    | String   | Address of the buyer                 |
| `amountPaid`      | BigInt   | Payment amount                       |
| `transactionHash` | String?  | Optional blockchain transaction hash |
| `accessedAt`      | DateTime | Access timestamp                     |

---

### 3. `MediaTransfer`

Tracks historical ownership changes of NFTs.

| Field             | Type     | Description                          |
| ----------------- | -------- | ------------------------------------ |
| `id`              | String   | Unique ID                            |
| `tokenId`         | Int      | Foreign key to `MediaNFT`            |
| `fromAddress`     | String   | Previous owner's wallet address      |
| `toAddress`       | String   | New owner's wallet address           |
| `transactionHash` | String?  | Optional blockchain transaction hash |
| `transferredAt`   | DateTime | Transfer timestamp                   |

---

### 4. `FileType` Enum

Defines types of media content:

- `IMAGE`
- `AUDIO`
- `VIDEO`

---

## Prisma Commands for Setup

```bash
npx prisma db push                              # Push schema to database
npx prisma studio                               # View and test data in GUI
npx prisma migrate reset                        # Reset database
npx prisma migrate dev --name migrate_name      # Database migration
```
