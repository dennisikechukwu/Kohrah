-- Drop the trigger temporarily
drop trigger if exists on_auth_user_created on auth.users;

-- We can't easily simulate an authenticated request from psql without setting local variables,
-- but we know the issue is 42501 from PostgREST.
