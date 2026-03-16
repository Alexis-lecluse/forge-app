import { create } from 'zustand';

export type OnboardingMode = 'guided' | 'free';
export type Gender = 'male' | 'female' | 'non-binary' | 'prefer-not';
export type Goal =
  | 'lose-weight'
  | 'build-muscle'
  | 'general-fitness'
  | 'strength'
  | 'get-back-in-shape'
  | 'custom';
export type TrainingLocation = 'gym' | 'home' | 'both' | 'outdoor';
export type TrainingLevel = 'beginner' | 'intermediate' | 'advanced';
export type TargetZone = 'full-body' | 'upper-body' | 'lower-body' | 'abs' | 'back';

interface OnboardingState {
  mode: OnboardingMode | null;
  firstName: string;
  gender: Gender | null;
  age: number | null;
  height: number | null;
  weight: number | null;
  goal: Goal | null;
  customGoal: string;
  location: TrainingLocation | null;
  equipment: string[];
  sessionsPerWeek: number | null;
  sessionDuration: number | null;
  level: TrainingLevel | null;
  targetZones: TargetZone[];

  // Actions
  setMode: (mode: OnboardingMode) => void;
  setFirstName: (name: string) => void;
  setGender: (gender: Gender) => void;
  setAge: (age: number) => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
  setGoal: (goal: Goal) => void;
  setCustomGoal: (text: string) => void;
  setLocation: (location: TrainingLocation) => void;
  toggleEquipment: (item: string) => void;
  setEquipment: (items: string[]) => void;
  setSessionsPerWeek: (n: number) => void;
  setSessionDuration: (n: number) => void;
  setLevel: (level: TrainingLevel) => void;
  toggleTargetZone: (zone: TargetZone) => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  mode: null,
  firstName: '',
  gender: null,
  age: null,
  height: null,
  weight: null,
  goal: null,
  customGoal: '',
  location: null,
  equipment: [],
  sessionsPerWeek: null,
  sessionDuration: null,
  level: null,
  targetZones: [],

  setMode: (mode) => set({ mode }),
  setFirstName: (firstName) => set({ firstName }),
  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  setGoal: (goal) => set({ goal }),
  setCustomGoal: (customGoal) => set({ customGoal }),
  setLocation: (location) => set({ location, equipment: [] }),
  toggleEquipment: (item) =>
    set((s) => ({
      equipment: s.equipment.includes(item)
        ? s.equipment.filter((e) => e !== item)
        : [...s.equipment, item],
    })),
  setEquipment: (equipment) => set({ equipment }),
  setSessionsPerWeek: (sessionsPerWeek) => set({ sessionsPerWeek }),
  setSessionDuration: (sessionDuration) => set({ sessionDuration }),
  setLevel: (level) => set({ level }),
  toggleTargetZone: (zone) =>
    set((s) => {
      if (s.targetZones.includes(zone)) {
        return { targetZones: s.targetZones.filter((z) => z !== zone) };
      }
      if (s.targetZones.length >= 2) return {};
      return { targetZones: [...s.targetZones, zone] };
    }),
}));
