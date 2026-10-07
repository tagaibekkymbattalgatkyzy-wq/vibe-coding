-- Run once in your Supabase project's SQL Editor. No service-role key is
-- exposed to the frontend. Each user's progress is private through RLS.
create table if not exists public.learning_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null default '{}'::jsonb
    check (jsonb_typeof(progress) = 'object'),
  updated_at timestamptz not null default now()
);

alter table public.learning_progress enable row level security;
revoke all on public.learning_progress from anon;
grant select, insert, update on public.learning_progress to authenticated;

create policy "Read own learning progress"
  on public.learning_progress for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "Insert own learning progress"
  on public.learning_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "Update own learning progress"
  on public.learning_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
