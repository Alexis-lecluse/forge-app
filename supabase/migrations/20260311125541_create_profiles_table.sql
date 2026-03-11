create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  age integer,
  weight numeric,
  height numeric,
  fitness_level text check (fitness_level in ('beginner', 'advanced')),
  equipment text[],
  goals text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);