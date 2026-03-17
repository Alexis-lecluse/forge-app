export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';

export type Profile = {
  Row: {
    id: string;
    username: string | null;
    gender: 'male' | 'female' | 'non-binary' | 'prefer-not' | null;
    age: number | null;
    weight: number | null;
    height: number | null;
    goals: string[] | null;
    fitness_level: FitnessLevel | null;
    training_location: 'gym' | 'home' | 'both' | 'outdoor' | null;
    equipment: string[] | null;
    sessions_per_week: number | null;
    session_duration: number | null;
    target_zones: string[] | null;
    onboarding_mode: 'guided' | 'free' | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id: string;
    username?: string | null;
    gender?: 'male' | 'female' | 'non-binary' | 'prefer-not' | null;
    age?: number | null;
    weight?: number | null;
    height?: number | null;
    goals?: string[] | null;
    fitness_level?: FitnessLevel | null;
    training_location?: 'gym' | 'home' | 'both' | 'outdoor' | null;
    equipment?: string[] | null;
    sessions_per_week?: number | null;
    session_duration?: number | null;
    target_zones?: string[] | null;
    onboarding_mode?: 'guided' | 'free' | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    username?: string | null;
    gender?: 'male' | 'female' | 'non-binary' | 'prefer-not' | null;
    age?: number | null;
    weight?: number | null;
    height?: number | null;
    goals?: string[] | null;
    fitness_level?: FitnessLevel | null;
    training_location?: 'gym' | 'home' | 'both' | 'outdoor' | null;
    equipment?: string[] | null;
    sessions_per_week?: number | null;
    session_duration?: number | null;
    target_zones?: string[] | null;
    onboarding_mode?: 'guided' | 'free' | null;
    updated_at?: string;
  };
};