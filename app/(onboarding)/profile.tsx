import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { OnboardingHeader } from '../../src/components/onboarding/OnboardingHeader';
import { ProfileStepFirstName } from '../../src/components/onboarding/profileSteps/ProfileStepFirstName';
import { ProfileStepGender } from '../../src/components/onboarding/profileSteps/ProfileStepGender';
import { ProfileStepAge } from '../../src/components/onboarding/profileSteps/ProfileStepAge';
import { ProfileStepHeight } from '../../src/components/onboarding/profileSteps/ProfileStepHeight';
import { ProfileStepWeight } from '../../src/components/onboarding/profileSteps/ProfileStepWeight';
import { ProfileStepGoal } from '../../src/components/onboarding/profileSteps/ProfileStepGoal';
import { useSubstepNavigation } from '../../src/hooks/useSubstepNavigation';

const TOTAL_STEPS = 4;
const SUBSTEP_COUNT = 6;

export default function Profile() {
  const { firstName } = useOnboardingStore();
  const { substep, fadeAnim, handleNext, handleBack, progress, isLast } = useSubstepNavigation({
    step: 2,
    totalSteps: TOTAL_STEPS,
    substepCount: SUBSTEP_COUNT,
    nextRoute: '/(onboarding)/uses',
  });

  const STEPS = [
    <ProfileStepFirstName onNext={handleNext} isLast={isLast} />,
    <ProfileStepGender onNext={handleNext} isLast={isLast} />,
    <ProfileStepAge onNext={handleNext} isLast={isLast} />,
    <ProfileStepHeight onNext={handleNext} isLast={isLast} />,
    <ProfileStepWeight onNext={handleNext} isLast={isLast} />,
    <ProfileStepGoal onNext={handleNext} isLast={isLast} />,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingHeader
        step={2}
        totalSteps={TOTAL_STEPS}
        progress={progress}
        onBack={handleBack}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
            {substep > 0 && firstName ? (
              <Text style={styles.greeting}>Hey {firstName} 👋</Text>
            ) : null}

            {STEPS[substep]}
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  greeting: {
    fontSize: 15,
    color: '#9E9E9E',
    marginVertical: 16,
  },
});
