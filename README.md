# Portfolio (React + Tailwind)

## Run locally

```bash
npm install
npm run dev
```

## Customize your info

- Edit your details in `src/content.ts` (name, email, phone, LinkedIn, projects, etc.)
- Replace the CV file at `public/cv.pdf` with your real resume

## Contact form (receive emails)

This portfolio uses **EmailJS** (client-side) to send messages to your email.

1. Create an EmailJS account and add an Email Service + Template
2. Create a `.env` file (copy from `.env.example`)
3. Fill:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Restart the dev server

Recommended EmailJS template variables:
- `from_name`
- `from_email`
- `subject`
- `message`

