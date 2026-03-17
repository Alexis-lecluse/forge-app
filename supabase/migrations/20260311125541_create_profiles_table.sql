create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  gender text check (gender in ('male', 'female', 'non-binary', 'prefer-not')),
  age integer,
  weight numeric,
  height numeric,
  fitness_level text check (fitness_level in ('beginner', 'intermediate', 'advanced')),
  equipment text[],
  goals text[],
  training_location text check (training_location in ('gym', 'home', 'both', 'outdoor')),
  sessions_per_week integer,
  session_duration integer,
  target_zones text[],
  onboarding_mode text check (onboarding_mode in ('guided', 'free')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table profiles enable row level security;

-- Each user can only read and write their own profile
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);