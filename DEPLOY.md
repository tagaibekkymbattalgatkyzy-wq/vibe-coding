# GitHub → Vercel, Supabase authentication

The project is a Vite application. Vercel builds with `npm run build` and serves `dist/`.
No passwords or privileged Supabase keys belong in the repository.

## Supabase

1. Use a Supabase project with Email authentication enabled.
2. Run `supabase/schema.sql` once in the project's SQL Editor. This creates the
   private per-user progress table and row-level security policies. The script
   deliberately does not replace existing tables or policies; running it again
   after success will report that the policies already exist.
3. Require email confirmation and set the minimum password length to 8 or more.
4. In Authentication → URL Configuration, set Site URL to the production Vercel
   address and add that same origin/path to Redirect URLs. If you need previews,
   add only the preview addresses you actually use.
5. Get the project URL and public publishable key (or legacy anon key).
   Never use service_role or a secret key as a VITE_ variable.

## Vercel

Import `tagaibekkymbattalgatkyzy-wq/vibe-coding`, root directory `.`, framework Vite,
production branch `main`. If already imported, keep the existing project.
Set the following environment variables for Production and any previews you use:

- `VITE_SUPABASE_URL`: the actual Supabase HTTPS project URL.
- `VITE_SUPABASE_PUBLISHABLE_KEY`: the public publishable/anon key.

Redeploy after changing these build-time variables. Updates to GitHub's production
branch trigger deployment when the integration is enabled. A successful Git push
alone does not verify Vercel's build, environment variables, or live login.

Without these values, the site displays that its personal account is still being
configured. It does not provide a fake local login.

## Local development

Use Node >=22.12, copy `.env.example` to a new `.env.local` and enter the public
Supabase project configuration. Then run:

```text
npm ci
npm run dev
```

For verification:

```text
npm test
npm run build
npm run preview
```

These npm commands also work in Windows PowerShell. No Bash installer is needed.

## Behavior and limits

Email registration, sign-in, sign-out, email confirmation and password recovery
use Supabase Auth. A valid session is required to enter the learning interface.
Progress loads from Supabase and is saved under the authenticated user's ID.
RLS prevents users from reading or writing another account's progress. Local
cached copies use a different key for each user. Failed sync is shown in the UI.
A later update sends the current local copy again. Logging out clears the local
Auth session; progress caches remain under their account-specific keys.

Course materials are demonstration content bundled into a static site, not
confidential server-protected documents. This application does not accept or
upload documents. Only authentication data and course-progress data go to your
configured Supabase project. Paid/private course content would need a separate
server-side delivery mechanism.

## Live verification after setup

Register a new test email and confirm its email link. Sign in, mark a topic,
complete a quiz and reload. Log out and verify the learning interface is hidden.
Sign in with a second test account and confirm its progress is independent.
Request a reset email, follow the link and choose a new password. Verify the
published HTTPS address on mobile. These live service checks require configured
Supabase/Vercel accounts; local mocked tests do not establish live readiness.
