# Blockchain Development Assignment

Industry: TBA

Topic: Idk

## Getting Started

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
