# Unilink Courier Solutions (UCS) website

Run locally:
    npm install
    npm run dev

Forms (Book A Demo / Request Access) post to /api/contact, which forwards to unilinkpk@gmail.com via FormSubmit.
The first submission after deploying triggers an activation email to unilinkpk@gmail.com. Click the confirm link once, then all later forms arrive normally.

Deploy on Vercel: push this folder to GitHub, import the repo at vercel.com, keep default settings, deploy.
Placeholder to replace later: office address (lib/site.ts).
