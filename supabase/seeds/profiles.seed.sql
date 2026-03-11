insert into profiles (id, username, age, weight, height, fitness_level, equipment, goals, created_at, updated_at)
values
('11111111-1111-1111-1111-111111111111', 'John Doe', 30, 70, 175, 'beginner', ARRAY['dumbbells', 'barbell'], 'Build muscle', now(), now()),
('22222222-2222-2222-2222-222222222222', 'Jane Smith', 25, 60, 165, 'beginner', ARRAY['yoga mat'], 'Lose weight', now(), now()),
('33333333-3333-3333-3333-333333333333', 'Alice Jones', 28, 55, 160, 'advanced', ARRAY['pull_up_bar'], 'Increase strength', now(), now());