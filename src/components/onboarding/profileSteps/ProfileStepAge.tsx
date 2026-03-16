import { useState } from 'react';
import { View, Text } from 'react-native';
import { useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNumericInput } from '../OnboardingNumericInput';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { profileStepStyles as s } from './profileStep.styles';

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function ProfileStepAge({ onNext, isLast }: Props) {
  const { age, setAge } = useOnboardingStore();
  const [value, setValue] = useState(age !== null ? String(age) : '');
  const parsed = parseInt(value);
  const canAdvance = value !== '' && !isNaN(parsed) && parsed >= 16 && parsed <= 80;

  function handleNext() {
    setAge(parsed);
    onNext();
  }

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Quel est ton âge ?</Text>
        <OnboardingNumericInput
          value={value}
          onChangeText={setValue}
          placeholder="28"
          unit="ans"
          maxLength={2}
          autoFocus
          onSubmitEditing={canAdvance ? handleNext : undefined}
        />
      </View>
      <OnboardingNextButton onPress={handleNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
