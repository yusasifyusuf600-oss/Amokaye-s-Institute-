# DĀRU N'MAH — Islamic School & Madrasa Platform

A Next.js starter application for DĀRU N'MAH with emerald-green, white and gold branding. It includes the public homepage, programme information, student application form, payment screens, server-side Paystack initialization/verification, bank-transfer submission, a portal sign-in placeholder and an administrator workspace preview.

## Included in this ZIP

- Public homepage and Qur'an, Arabic and Islamic Studies programme cards
- Parent/guardian and adult student application form
- Registration number generation and Supabase application storage
- Paystack server-side transaction initialization and verification
- Paystack webhook signature verification endpoint
- Bank transfer submission for manual verification
- Student/parent portal and super-administrator workspace starter pages
- Supabase SQL schema
- Environment variable template

## Requirements

- Node.js 20 or later
- A Supabase project
- A Paystack business account (start with test keys)
- A hosting account such as Vercel

## Run locally

1. Extract the ZIP.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Copy `.env.example` to `.env.local` and fill in your project values.
5. In Supabase, open SQL Editor and run `supabase/schema.sql`.
6. Start the development server:

   ```bash
   npm run dev
   ```

7. Visit http://localhost:3000.

## Environment variables

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY`: server-only secret; never expose it in client-side code
- `PAYSTACK_SECRET_KEY`: Paystack secret key; use test key during testing
- `NEXT_PUBLIC_SITE_URL`: deployed site origin
- `SCHOOL_BANK_NAME`, `SCHOOL_ACCOUNT_NAME`, `SCHOOL_ACCOUNT_NUMBER`: official bank details for later display/configuration

## Paystack setup

1. Add a Paystack test secret key to `.env.local`.
2. Configure the webhook URL in Paystack as:
   `https://YOUR_DOMAIN/api/payments/webhook`
3. Test successful, failed, duplicate and delayed transactions using Paystack test mode.
4. Before going live, complete the transaction reconciliation and receipt workflow.
5. Never accept a browser success redirect as proof of payment. The server must verify the transaction with Paystack.

## Important implementation notes before production

This is a source-code starter, not a production-ready school management system. The portal and admin pages are deliberately marked as setup previews; secure Supabase Auth, account linking, role-based admin pages, fee invoices, receipt PDF generation, admission decisions, reports, and detailed RLS policies must be completed and tested before collecting real student information or money.

The registration and payment API examples use the Supabase service role key on the server. Add rate limiting, input validation, bot protection, audit logging, data retention rules and robust error monitoring before public launch. Do not use real student data in development.

Bank-transfer details are submitted as claims and remain `awaiting_verification`; a school accountant must independently confirm the funds in the bank account before marking a payment successful or issuing an official receipt.

## Domain

The preferred domain is `darunmah.com`. Domain availability and ownership must be checked and registered separately. Configure DNS to point to your hosting provider after deployment.

## School details still required

- Official school address
- Official phone number
- Official email address
- Approved bank name, account name and account number
- Class/level structure and admission criteria
- Fee schedule for each programme/class
- School logo and approved contact/social links

## Suggested launch checklist

- [ ] Confirm school details and logo
- [ ] Define classes, levels, admission rules and fee schedule
- [ ] Create Supabase project and run schema
- [ ] Implement and test Supabase Auth and role-based access
- [ ] Configure Paystack test mode and webhook
- [ ] Test bank-transfer review by accountant
- [ ] Implement downloadable receipts and fee statements
- [ ] Test on Android, iPhone, tablet and desktop
- [ ] Review privacy notice, parental consent and Nigerian data-protection obligations
- [ ] Complete security review and backups
- [ ] Switch to live payment credentials only after approval
- [ ] Deploy and connect the registered domain
