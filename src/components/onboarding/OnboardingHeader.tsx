import { View } from 'react-native';
import { OnboardingTopBar } from './OnboardingTopBar';
import { OnboardingProgressBar } from './OnboardingProgressBar';

export { OnboardingTopBar } from './OnboardingTopBar';
export { OnboardingProgressBar } from './OnboardingProgressBar';

interface OnboardingHeaderProps {
  step: number;
  totalSteps: number;
  progress: number;
  onBack: () => void;
}

export function OnboardingHeader({ step, totalSteps, progress, onBack }: OnboardingHeaderProps) {
  return (
    <View>
      <OnboardingTopBar step={step} totalSteps={totalSteps} onBack={onBack} />
      <OnboardingProgressBar progress={progress} />
    </View>
  );
}
