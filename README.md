# Blockchain Development Assignment

Industry: Media

Topic: Protect Digital Assets using NFTs and stuff something like that

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

- Create page to upload media files (audio, video, & image files) - Rion 🔨
- Create React component that tracks wallet information (MetaMask) - Jaedon ✅
- Mint NFT with uploaded media files - Hou Jin 🔨
- Do research and adjust smart contract implementation to work as NFT (mint, ownership, etc) - Jaedon 🔨
- Create page to browse user media - 

## Git Workflow

```bash
# 1. Start on up-to-date main
git checkout main
git pull origin main

# 2. Create a new branch for your feature
git checkout -b feature/login-form

# 3. Work locally, stage, and commit
git add .
git commit -m "Implement login form UI"

# 4. Push the feature branch
git push -u origin feature/login-form

# 5. Open a Pull Request (on GitHub)
#    - Describe changes
#    - Link issues if any (#42)
#    - Assign reviewers

# 6. Address feedback, commit more if needed
git commit -m "Apply feedback: improved error handling"
git push

# 7. Once approved, PR is merged by owner
#    (Optionally squash and merge)

# 8. Sync with main after merge
git checkout main
git pull origin main
```

## Useful Terminal Commands

```bash
# Create postgres docker container (not required)
docker run --name local-mediavault-db -e POSTGRES_USER=localuser -e POSTGRES_PASSWORD=localpass -e POSTGRES_DB=localdb -p 5432:5432 -d postgres

# Generate prisma schema (Get rid of typescript errors)
npx prisma generate

## Database schema modelling
# Use to push new changes early in development
npx prisma db push
# OR
# Prisma migrate once db is defined properly
npx prisma migrate dev --name <name-of-migration>

# View database via prisma UI
npx prisma studio

```

## Helpers

- `useAppKitContext()`: **Wallet Context Provider** - Provides control over the wallet
- `useMediaContract()`: **Media Contract Context Provider** - Provides access to smart contract functions (WIP)

## IPFS

You may interact with the IPFS server using next.js server actions located here in this project: [./src/actions/pinata.ts](./src/actions/pinata.ts).  Use the SDK to build your own functions if necessary

Materials: [Docs](https://docs.pinata.cloud/quickstart), [SDK Guideline](https://docs.pinata.cloud/sdk/getting-started)

## Run with Smart Contract

1. Open new VSCode and open smart_contract project **OR** cd o smart_contract project via terminal

2. In smart contract project, execute these:

```bash
# Open 2 Terminals
# In Terminal 1 (do not close this terminal):
npm run node

# In Terminal 2:
npm run deploy
```

3. Use **Reown AppKit** [hooks](https://docs.reown.com/appkit/next/core/hooks#hooks)/[components](https://docs.reown.com/appkit/next/core/components) to build components that interact with wallet ✅

4. Use **Wagmi** [actions](https://wagmi.sh/core/api/actions) to build components that interact with smart contract

## Features

- Upload to IPFS via Pinata 🔨
- Mint NFT for Uploaded Media 🔨
- Display Wallet Info ✅
- Register Media ❌
- View Media Details ❌
- View Media Upload History ❌
- Automatic Royalty Enrollment ❌
- Prove Ownership ❓
- Transfer Ownership ❓

## Libraries Used

- shadcn (Use --legacy-peer-deps for installing shadcn components)
- zod
- zustand (avoid redux pls)
- prisma
- @tanstack/react-query

## Tech Stack

- Backend: Next.js Server Actions(?)
- Database: Postgres (Neon)

## Prettier Guide

1. Install the Prettier extension in VSCode
2. Open VS Code Command Palette (Ctrl+Shift+P)
3. Type "settings" and select "Preferences: Open User Settings (JSON)"
4. Add these settings to your settings.json:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Additional VSCode JSON Settings:

General Settings

```json
{
  "editor.tabSize": 2,
  "editor.formatOneSave": true
}
```

For Prisma file formatting

```json
{
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  }
}
```
