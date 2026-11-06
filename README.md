# Gourav Ojha — Developer Portfolio

A responsive React + Vite portfolio built from the resume details supplied.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy to Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Select the GitHub repository.
4. Set **Build command** to `npm run build`.
5. Set **Publish directory** to `dist`.
6. Click **Deploy**.

The `public/_redirects` file is included for SPA routing.

## Personalize before publishing

- Check the email, phone number, LinkedIn and GitHub links in `src/App.jsx`.
- Replace the LinkedIn URL if you have a personal profile URL different from the supplied one.
- Add your resume PDF as `public/Gourav-Ojha-Resume.pdf` if you want a downloadable resume link later. The current design uses email/contact actions instead.
- Review project dates, project descriptions and technology lists for accuracy before sharing with recruiters.

## Notes

This is a frontend-only portfolio. It does not require a backend or database. Never put private API keys in frontend source code.
