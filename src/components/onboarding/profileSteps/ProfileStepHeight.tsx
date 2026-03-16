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

export function ProfileStepHeight({ onNext, isLast }: Props) {
  const { height, setHeight } = useOnboardingStore();
  const [value, setValue] = useState(height !== null ? String(height) : '');

  function handleNext() {
    if (value) setHeight(parseFloat(value));
    onNext();
  }

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Quelle est ta taille ? (optionnel)</Text>
        <OnboardingNumericInput
          value={value}
          onChangeText={setValue}
          placeholder="175"
          unit="cm"
          maxLength={3}
          autoFocus
          hint="💡 Champ optionnel — aide l'IA à être plus précise"
          onSubmitEditing={handleNext}
        />
      </View>
      <OnboardingNextButton onPress={handleNext} disabled={false} isLast={isLast} />
    </View>
  );
}
