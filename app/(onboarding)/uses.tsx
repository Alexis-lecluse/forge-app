import {
  Text,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingHeader } from '../../src/components/onboarding/OnboardingHeader';
import { UsesStepLocation } from '../../src/components/onboarding/usesSteps/UsesStepLocation';
import { UsesStepEquipment } from '../../src/components/onboarding/usesSteps/UsesStepEquipment';
import { UsesStepSessions } from '../../src/components/onboarding/usesSteps/UsesStepSessions';
import { UsesStepDuration } from '../../src/components/onboarding/usesSteps/UsesStepDuration';
import { UsesStepLevel } from '../../src/components/onboarding/usesSteps/UsesStepLevel';
import { UsesStepTargetZones } from '../../src/components/onboarding/usesSteps/UsesStepTargetZones';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useSubstepNavigation } from '../../src/hooks/useSubstepNavigation';

const TOTAL_STEPS = 4;
const SUBSTEP_COUNT = 6;

export default function Uses() {
  const { firstName } = useOnboardingStore();
  const { substep, fadeAnim, handleNext, handleBack, progress, isLast } = useSubstepNavigation({
    step: 3,
    totalSteps: TOTAL_STEPS,
    substepCount: SUBSTEP_COUNT,
    nextRoute: '/(onboarding)/workout',
  });

  const STEPS = [
    <UsesStepLocation onNext={handleNext} isLast={isLast} />,
    <UsesStepEquipment onNext={handleNext} isLast={isLast} />,
    <UsesStepSessions onNext={handleNext} isLast={isLast} />,
    <UsesStepDuration onNext={handleNext} isLast={isLast} />,
    <UsesStepLevel onNext={handleNext} isLast={isLast} />,
    <UsesStepTargetZones onNext={handleNext} isLast={isLast} />,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingHeader
        step={3}
        totalSteps={TOTAL_STEPS}
        progress={progress}
        onBack={handleBack}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>

          {firstName ? <Text style={styles.greeting}>{firstName}, </Text> : null}
          {STEPS[substep]}
        </Animated.View>
      </ScrollView>
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

