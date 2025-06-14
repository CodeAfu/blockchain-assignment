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

- Create page to upload media files
- Create React component that tracks wallet information
- Mint NFT with uploaded media files

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
# Create postgres docker container
docker run --name local-mediavault-db -e POSTGRES_USER=localuser -e POSTGRES_PASSWORD=localpass -e POSTGRES_DB=localdb -p 5432:5432 -d postgres

# Generate prisma schema
npx prisma generate

# Prisma migrate
npx prisma migrate dev --name init

# View database via prisma UI
npx prisma studio
```

## Helpers (Pls use)

- `useWallet()`: **Wallet Context Provider** with hopefully all the tools you need to control the wallet 🔨
- `useMediaContract()`: **Media Contract Context Provider** - connect smart contract to the frontend and provides the `provider`, `signer`, and `contract` variables

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

3. Use ethers library in the frontend project to initialize these variables:

```tsx
import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";

// provider: idk 💀
// signer: idk 💀
// contract: Access methods defined in smart contract
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const contract = new ethers.Contract(MEDIA_CONTRACT_ADDRESS, MEDIA_CONTRACT_ABI, signer);
```

4. Optionally, use the predefined `useMediaContract()` context for easier access (react context hook)

[View Sample Contract Usage](./src/app/sample/_components/sample-component.tsx)

## Update Smart Contract:

Tired rn

## Features

- Mint NFT for Media Uploaded [❌]
- Display Wallet Info [🔨]
- Register Media [❌]
- View Media Details [❌]
- View Media Upload History [❌]
- Automatic Royalty Enrollment [❌]
- Prove Ownership [❓]
- Transfer Ownership [❓]

## Libraries Used

- shadcn (Use --legacy-peer-deps for installing shadcn components)
- zod
- zustand (avoid redux pls)
- prisma(?)
- tanstack react query (?)

## Tech Stack

- Backend: Next.js Server Actions(?)
- Database: Postgres (Neon)
- Blockchain: idk

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
