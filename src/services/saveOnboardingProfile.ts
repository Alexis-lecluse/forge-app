import { supabase } from '../../supabase/supabase';
import { OnboardingState } from '../store/useOnboardingStore';

export async function saveOnboardingProfile(userId: string, store: OnboardingState) {
  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    username: store.firstName || null,
    gender: store.gender,
    age: store.age,
    height: store.height,
    weight: store.weight,
    goals: store.goal
      ? store.goal === 'custom'
        ? store.customGoal ? [store.customGoal] : null
        : [store.goal]
      : null,
    training_location: store.location,
    equipment: store.equipment.length > 0 ? store.equipment : null,
    sessions_per_week: store.sessionsPerWeek,
    session_duration: store.sessionDuration,
    fitness_level: store.level,
    target_zones: store.targetZones.length > 0 ? store.targetZones : null,
    onboarding_mode: store.mode,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error('[saveOnboardingProfile]', error.message);
  }
}
