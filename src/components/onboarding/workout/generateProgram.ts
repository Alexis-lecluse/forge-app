import { Goal, TrainingLevel, TrainingLocation } from '../../../store/useOnboardingStore';
import { Exercise, GeneratedProgram, ProgramSession } from './workout.tyoes';

const DAY_SCHEDULES: Record<number, string[]> = {
  2: ['Lundi', 'Jeudi'],
  3: ['Lundi', 'Mercredi', 'Vendredi'],
  4: ['Lundi', 'Mardi', 'Jeudi', 'Vendredi'],
  5: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
};

const getSplitName = (index: number, total: number): string => {
  if (total === 4) {
    return ['Haut du Corps A', 'Bas du Corps A', 'Haut du Corps B', 'Bas du Corps B'][index];
  }
  if (total === 5) {
    return ['Push (Pectoraux / Épaules)', 'Pull (Dos / Biceps)', 'Jambes / Fessiers', 'Haut du Corps', 'Gainage / Cardio'][index];
  }
  return `Séance Complète ${String.fromCharCode(65 + index)}`;
}

const GYM_SETS: Exercise[][] = [
  [
    { name: 'Développé Couché', sets: 3, reps: '10', alternatives: ['Pompes lestées', 'Dips parallèles'] },
    { name: 'Tirage Vertical', sets: 3, reps: '10', alternatives: ['Traction pronation', 'Rowing câble'] },
    { name: 'Squat Barre', sets: 3, reps: '10', alternatives: ['Presse à cuisses', 'Goblet Squat'] },
    { name: 'Développé Militaire', sets: 3, reps: '10', alternatives: ['Élévations frontales', 'Arnold Press'] },
    { name: 'Planche', sets: 3, reps: '45s', alternatives: ['Gainage latéral', 'Ab Wheel'] },
  ],
  [
    { name: 'Rowing Barre', sets: 3, reps: '10', alternatives: ['Tirage horizontal câble', 'Rowing haltères'] },
    { name: 'Presse à Cuisses', sets: 3, reps: '12', alternatives: ['Fentes marchées', 'Leg Extension'] },
    { name: 'Élévations Latérales', sets: 3, reps: '12', alternatives: ['Oiseau haltères', 'Câble latéral'] },
    { name: 'Curl Biceps Barre', sets: 3, reps: '12', alternatives: ['Curl haltères alterné', 'Curl câble'] },
    { name: 'Leg Curl Couché', sets: 3, reps: '12', alternatives: ['Good Morning', 'Nordic Curl'] },
  ],
  [
    { name: 'Soulevé de Terre Roumain', sets: 3, reps: '10', alternatives: ['Hip Thrust barre', 'Leg Press'] },
    { name: 'Traction Supination', sets: 3, reps: '8', alternatives: ['Tirage vertical', 'Assisted Pull-up'] },
    { name: 'Écartés Câbles', sets: 3, reps: '15', alternatives: ['Pec Deck', 'Push-up diamant'] },
    { name: 'Gainage Latéral', sets: 3, reps: '40s', alternatives: ['Planche', 'Russian Twist'] },
    { name: 'Extensions Triceps Câble', sets: 3, reps: '12', alternatives: ['Dips banc', 'Kickback haltère'] },
  ],
];

const HOME_SETS: Exercise[][] = [
  [
    { name: 'Pompes', sets: 3, reps: '15', alternatives: ['Pompes déclinées', 'Pompes diamant'] },
    { name: 'Squats Poids du Corps', sets: 3, reps: '20', alternatives: ['Squat sauté', 'Pistol squat assisté'] },
    { name: 'Fentes alternées', sets: 3, reps: '12/jambe', alternatives: ['Fentes sautées', 'Fentes bulgares'] },
    { name: 'Planche', sets: 3, reps: '45s', alternatives: ['Gainage latéral', 'Ab Wheel'] },
    { name: 'Mountain Climbers', sets: 3, reps: '30s', alternatives: ['Burpees', 'High Knees'] },
  ],
  [
    { name: 'Pompes Diamant', sets: 3, reps: '12', alternatives: ['Dips chaise', 'Pompes serrées'] },
    { name: 'Squat Sauté', sets: 3, reps: '15', alternatives: ['Box Jump', 'Squat sumo'] },
    { name: 'Hip Thrust au Sol', sets: 3, reps: '20', alternatives: ['Pont fessiers', 'Donkey Kick'] },
    { name: 'Gainage', sets: 3, reps: '60s', alternatives: ['Planche latérale', 'Crunch'] },
    { name: 'Burpees', sets: 3, reps: '10', alternatives: ['Jumping Jacks', 'Squat thrust'] },
  ],
  [
    { name: 'Dips Chaise', sets: 3, reps: '12', alternatives: ['Pompes déclinées', 'Pompes diamant'] },
    { name: 'Pistol Squat Assisté', sets: 3, reps: '8/jambe', alternatives: ['Squat bulgare', 'Fentes'] },
    { name: 'Superman', sets: 3, reps: '15', alternatives: ['Bird-Dog', 'Extension lombaires'] },
    { name: 'Crunch', sets: 3, reps: '20', alternatives: ['Relevé de jambes', 'Russian Twist'] },
    { name: 'Jumping Jacks', sets: 3, reps: '40s', alternatives: ['High Knees', 'Shadow Boxing'] },
  ],
];

const GOAL_LABELS: Record<Goal, string> = {
  'lose-weight': 'Perte de poids',
  'build-muscle': 'Prise de masse',
  'general-fitness': 'Remise en forme',
  strength: 'Force',
  'get-back-in-shape': 'Retour au sport',
  custom: 'Objectif personnalisé',
};

const LEVEL_LABELS: Record<TrainingLevel, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
};

export const generateProgram = (
  goal: Goal | null,
  location: TrainingLocation | null,
  sessionsPerWeek: number | null,
  level: TrainingLevel | null
): GeneratedProgram => {
  const isGym = location === 'gym' || location === 'both';
  const count = sessionsPerWeek ?? 3;
  const exerciseSets = isGym ? GYM_SETS : HOME_SETS;
  const days = DAY_SCHEDULES[count] ?? DAY_SCHEDULES[3];

  const goalLabel = GOAL_LABELS[goal ?? 'general-fitness'];
  const levelLabel = LEVEL_LABELS[level ?? 'beginner'];
  const name = `${goalLabel} — ${levelLabel} · ${count}j/sem`;

  const sessions: ProgramSession[] = days.map((day, i) => ({
    id: `session-${i}`,
    day,
    name: getSplitName(i, count),
    exercises: exerciseSets[i % 3].map((ex) => ({ ...ex })),
  }));

  return { name, sessions };
}
