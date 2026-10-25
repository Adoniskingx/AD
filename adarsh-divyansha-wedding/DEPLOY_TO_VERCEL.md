# Publish Adarsh weds Divyansha on Vercel

## Fastest method — Vercel Drop

1. Open https://vercel.com/drop
2. Sign in to Vercel.
3. Drag the entire project folder onto the page (or upload the ZIP if Vercel Drop accepts it).
4. Give the project a name such as `adarsh-divyansha`.
5. Deploy.
6. Vercel will provide a public `*.vercel.app` URL.

## GitHub method — recommended for future edits

1. Create a new GitHub repository, e.g. `adarsh-divyansha-wedding`.
2. Upload the contents of this folder to the repository.
3. Open Vercel and choose Add New → Project.
4. Import the GitHub repository.
5. Framework Preset: Vite.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Click Deploy.

After deployment, every push to the connected GitHub repository can trigger a new deployment.

## Before sharing with guests

Put your real assets into `public/`:
- temple-mandap.png
- couple/couple-1.jpg
- couple/couple-2.jpg
- couple/couple-3.jpg
- music/wedding-theme.mp3
- og-wedding.jpg

Then edit `src/data/weddingData.ts` for venue, contact, YouTube URL and final ceremony details.

## Local verification

Run:
npm install
npm run build

A successful build creates `dist/`.
