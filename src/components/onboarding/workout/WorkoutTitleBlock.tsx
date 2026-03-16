import { View, Text } from 'react-native';
import { useOnboardingStore } from '../../../store/useOnboardingStore';
import { s } from './workout.styles';

export function WorkoutTitleBlock() {
  const firstName = useOnboardingStore((s) => s.firstName);

  return (
    <View style={s.titleBlock}>
      <Text style={s.aiLabel}>🤖 Coach IA</Text>
      <Text style={s.title}>
        Voilà ton programme{firstName ? `, ${firstName}` : ''} !
      </Text>
      <Text style={s.subtitle}>
        Tu peux ajuster les exercices à ta guise avant de valider.
      </Text>
    </View>
  );
}


