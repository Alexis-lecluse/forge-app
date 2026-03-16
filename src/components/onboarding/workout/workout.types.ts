export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  modified?: boolean;
  alternatives?: string[];
}

export interface ProgramSession {
  id: string;
  day: string;
  name: string;
  exercises: Exercise[];
}

export interface GeneratedProgram {
  name: string;
  sessions: ProgramSession[];
}

export interface SwapTarget {
  sessionId: string;
  exerciseIndex: number;
  alternatives: string[];
  currentName: string;
}
