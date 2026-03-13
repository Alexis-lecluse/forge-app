create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, username)
  values (
    new.id,
    new.raw_user_meta_data->>'username'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
