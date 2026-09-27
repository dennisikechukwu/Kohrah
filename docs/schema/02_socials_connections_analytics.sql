-- 1. Add social links to profiles
alter table public.profiles 
add column website text,
add column linkedin_url text,
add column twitter_url text,
add column instagram_url text;

-- 2. Create connections table for lead capture
create table public.connections (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) not null,
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  context text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up RLS for connections
alter table public.connections enable row level security;

-- Visitors can insert connections
create policy "Anyone can insert connections" on public.connections
  for insert with check (true);

-- Users can view their own connections
create policy "Users can view their own connections" on public.connections
  for select using (auth.uid() = profile_id);

-- 3. Create page_views table for analytics
create table public.page_views (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) not null,
  viewer_ip text,
  user_agent text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up RLS for page_views
alter table public.page_views enable row level security;

-- Service role / API can insert, or anyone can insert
create policy "Anyone can insert page views" on public.page_views
  for insert with check (true);

-- Users can view their own page views
create policy "Users can view their own analytics" on public.page_views
  for select using (auth.uid() = profile_id);
