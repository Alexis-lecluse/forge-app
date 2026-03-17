import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingHeader } from '../../src/components/onboarding/OnboardingHeader';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { GeneratedProgram, SwapTarget } from '../../src/components/onboarding/workout/workout.types';
import { generateProgram } from '../../src/components/onboarding/workout/generateProgram';
import { WorkoutTitleBlock } from '../../src/components/onboarding/workout/WorkoutTitleBlock';
import { WorkoutProgramNameCard } from '../../src/components/onboarding/workout/WorkoutProgramNameCard';
import { WorkoutSessionCard } from '../../src/components/onboarding/workout/WorkoutSessionCard';
import { WorkoutTipCard } from '../../src/components/onboarding/workout/WorkoutTipCard';
import { WorkoutSwapModal } from '../../src/components/onboarding/workout/WorkoutSwapModal';
import { WorkoutFooter } from '../../src/components/onboarding/workout/WorkoutFooter';

export default function Workout() {
  const router = useRouter();
  const store = useOnboardingStore();
  const completeOnboarding = useOnboardingStore((s) => s.completeOnboarding);

  const [program, setProgram] = useState<GeneratedProgram>(() =>
    generateProgram(store.goal, store.location, store.sessionsPerWeek, store.level)
  );

  const [swapTarget, setSwapTarget] = useState<SwapTarget | null>(null);

  function handleSwap(sessionId: string, exerciseIndex: number) {
    const session = program.sessions.find((s) => s.id === sessionId);
    if (!session) return;
    const exercise = session.exercises[exerciseIndex];
    if (!exercise.alternatives?.length) return;
    setSwapTarget({ sessionId, exerciseIndex, alternatives: exercise.alternatives, currentName: exercise.name });
  }

  function confirmSwap(newName: string) {
    if (!swapTarget) return;
    setProgram((prev) => ({
      ...prev,
      sessions: prev.sessions.map((s) =>
        s.id !== swapTarget.sessionId
          ? s
          : {
              ...s,
              exercises: s.exercises.map((ex, i) =>
                i !== swapTarget.exerciseIndex
                  ? ex
                  : { ...ex, name: newName, alternatives: [ex.name, ...(ex.alternatives ?? []).filter((a) => a !== newName)], modified: true }
              ),
            }
      ),
    }));
    setSwapTarget(null);
  }

  function resetExercise(sessionId: string, exerciseIndex: number) {
    const original = generateProgram(store.goal, store.location, store.sessionsPerWeek, store.level);
    const originalSession = original.sessions.find((s) => s.id === sessionId);
    if (!originalSession) return;
    const originalExercise = originalSession.exercises[exerciseIndex];
    setProgram((prev) => ({
      ...prev,
      sessions: prev.sessions.map((s) =>
        s.id !== sessionId
          ? s
          : { ...s, exercises: s.exercises.map((ex, i) => (i !== exerciseIndex ? ex : { ...originalExercise })) }
      ),
    }));
  }

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingHeader step={4} totalSteps={4} progress={100} onBack={() => router.back()} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <WorkoutTitleBlock />
        <WorkoutProgramNameCard programName={program.name} />
        {program.sessions.map((session) => (
          <WorkoutSessionCard
            key={session.id}
            session={session}
            onSwap={handleSwap}
            onReset={resetExercise}
          />
        ))}
        <WorkoutTipCard />
      </ScrollView>

      <WorkoutFooter onConfirm={() => {
        completeOnboarding();
        router.push('/(auth)/login');
      }} />

      <WorkoutSwapModal
        swapTarget={swapTarget}
        onConfirm={confirmSwap}
        onClose={() => setSwapTarget(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 16,
  },
});
