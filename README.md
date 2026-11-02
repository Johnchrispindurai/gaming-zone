# GAMEZONE

A responsive gaming-themed React website built with Vite and React Router.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Extract this ZIP file.
2. Push the extracted project folder to a GitHub repository.
3. In Vercel, select **Add New → Project** and import that repository.
4. Vercel should detect Vite automatically.
5. Confirm:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.

The included `vercel.json` rewrite supports React Router routes such as `/games`, `/about`, and `/register` on refresh.

Note: Registration is frontend-only. It validates the form and displays a success message; it does not store accounts in a database.
"# gaming-zone" 
