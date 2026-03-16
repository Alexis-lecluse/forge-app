import { View, Text } from 'react-native';
import { useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingTextInput } from '../OnboardingTextInput';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { profileStepStyles as s } from './profileStep.styles';

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function ProfileStepFirstName({ onNext, isLast }: Props) {
  const { firstName, setFirstName } = useOnboardingStore();
  const canAdvance = firstName.trim().length > 3;

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Quel est ton prénom ?</Text>
        <OnboardingTextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Ton prénom..."
          autoFocus
          onSubmitEditing={canAdvance ? onNext : undefined}
        />
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
