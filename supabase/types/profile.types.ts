export enum FitnessLevel {
  Beginner = 'beginner',
  Advanced = 'advanced',
}

export type Profile = {
  Row: {
    id: string;
    username: string | null;
    age: number | null;
    weight: number | null;
    height: number | null;
    fitness_level: FitnessLevel | null;
    equipment: string[] | null;
    goals: string | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id: string;
    username?: string | null;
    age?: number | null;
    weight?: number | null;
    height?: number | null;
    fitness_level?: FitnessLevel | null;
    equipment?: string[] | null;
    goals?: string | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    username?: string | null;
    age?: number | null;
    weight?: number | null;
    height?: number | null;
    fitness_level?: FitnessLevel | null;
    equipment?: string[] | null;
    goals?: string | null;
    updated_at?: string;
  };
};