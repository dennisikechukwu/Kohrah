-- Create a table for public profiles
create table public.profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  avatar_url text,
  job_title text,
  company text,
  bio text,
  is_onboarded boolean default false,
  
  -- Ensure unique usernames/slugs for their public page (e.g. kohrah.com/maya-chen)
  slug text unique
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Automatically create a profile when a new user signs up
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, is_onboarded)
  values (new.id, false);
  return new;
end;
$$;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
