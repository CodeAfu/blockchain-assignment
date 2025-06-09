# Blockchain Development Assignment

Industry: Media

Topic: Protect Digital Assets using NFTs and stuff something like that

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Workflow

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

## Helpers (Pls use)
- useWallet: **Wallet Context Provider** with hopefully all the tools you need to control the wallet 🔨
- useContract: **Media Contract Context Provider** - connect smart contract to the frontend and provides the `provider`, `signer`, and `contract` variables

## Features
- Display Wallet Info
- Register Media
- Prove Ownership
- Transfer Ownership
- View Media
- View Media History
- Automatic Royalty Enrollment

## Libraries Used

- shadcn (Use --legacy-peer-deps for installing shadcn components)
- zod
- prisma(?)
- zustand (avoid redux pls)
- tanstack react query

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
