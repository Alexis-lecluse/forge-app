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

export function ProfileStepWeight({ onNext, isLast }: Props) {
  const { weight, setWeight } = useOnboardingStore();
  const [value, setValue] = useState(weight !== null ? String(weight) : '');

  function handleNext() {
    if (value) setWeight(parseFloat(value));
    onNext();
  }

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Quel est ton poids ? (optionnel)</Text>
        <OnboardingNumericInput
          value={value}
          onChangeText={setValue}
          placeholder="75"
          unit="kg"
          keyboardType="decimal-pad"
          maxLength={5}
          autoFocus
          hint="💡 Champ optionnel — aide l'IA à être plus précise"
          onSubmitEditing={handleNext}
        />
      </View>
      <OnboardingNextButton onPress={handleNext} disabled={false} isLast={isLast} />
    </View>
  );
}
