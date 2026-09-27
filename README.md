# Valiant Ledgers — MERN Single-Page Website

A single-page site (React + Framer Motion animations, Node/Express + MongoDB backend)
rebuilt from your original HTML into a full MERN app. The contact form sends every
submission straight to your inbox by email (via Nodemailer) and saves a copy in MongoDB.

```
valiant-ledgers-mern/
├── backend/     Express API + Nodemailer + MongoDB
└── frontend/    React (Vite) + Tailwind CSS + Framer Motion
```

## 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

## 2. Configure email (the important part)

```bash
cd backend
cp .env.example .env
```

Open `backend/.env` and fill in **your** SMTP mail configuration — this is what lets the
site email you every "connection request" (contact form submission):

```env
SMTP_HOST=smtp.gmail.com       # your mail provider's SMTP host
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=youraddress@gmail.com
SMTP_PASS=your-app-password    # NOT your normal password — see below
TO_EMAIL=youraddress@gmail.com # where you want to receive requests
```

**Where to get these values, by provider:**

| Provider | SMTP_HOST | SMTP_PORT | Notes |
|---|---|---|---|
| Gmail | `smtp.gmail.com` | 465 | Requires a 16-character **App Password** (Google Account → Security → 2-Step Verification → App Passwords). Your regular Gmail password will NOT work. |
| Outlook / Office365 | `smtp.office365.com` | 587 (secure=false) | Use your normal account password, or an app password if MFA is on. |
| Zoho Mail | `smtp.zoho.com` | 465 | |
| Custom domain (cPanel, Hostinger, GoDaddy, etc.) | `mail.yourdomain.com` | 465 | Ask your hosting provider for the exact SMTP host/port. |

Once you send me (or fill in) these mail details, the contact form on the site will
email every submission to `TO_EMAIL` automatically — no other code changes needed.

Also set your MongoDB connection string:

```env
MONGO_URI=mongodb://127.0.0.1:27017/valiant_ledgers
```

(Use a local MongoDB, or a free MongoDB Atlas cluster — paste its connection string here.)

## 3. Run it

Two terminals:

```bash
# Terminal 1 — backend (http://localhost:5000)
cd backend
npm run dev

# Terminal 2 — frontend (http://localhost:5173)
cd frontend
npm run dev
```

Open **http://localhost:5173** — this is your single-page site. Submitting the
"Request a Fee Proposal" form will:
1. Save the submission to MongoDB (`Contact` collection)
2. Send an email with the lead's details to `TO_EMAIL`
3. Show a success confirmation on the page

## 4. What's animated

- Navbar fade/slide-in on load, animated mobile menu
- Hero: staggered text/badge entrance, pulsing glow, staggered checklist cards
- Services: scroll-triggered card reveals + hover lift
- Fee Calculator: live animated price counter as you change options
- Offices / Deadlines: scroll-triggered reveals
- Contact form: animated success state, loading spinner, error messaging

All motion respects `prefers-reduced-motion` for accessibility.

## 5. Deploying

- **Frontend**: `npm run build` in `frontend/` → deploy the `dist/` folder to Vercel/Netlify/any static host. Set `VITE_API_BASE_URL` to your live backend URL.
- **Backend**: deploy `backend/` to Render/Railway/Heroku/a VPS. Set the same `.env` variables there (never commit `.env` — it's already git-ignored).

## 6. Customizing content

All copy and services live directly in the component files under
`frontend/src/components/` (`Services.jsx`, `Calculator.jsx`, `Deadlines.jsx`, etc.) —
edit the arrays at the top of each file to change wording, pricing, or add more items.
