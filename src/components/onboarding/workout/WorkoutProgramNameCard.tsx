import { View, Text } from 'react-native';
import { s } from './workout.styles';

interface Props {
  programName: string;
}

export function WorkoutProgramNameCard({ programName }: Props) {
  return (
    <View style={s.programNameCard}>
      <Text style={s.programNameLabel}>Programme généré</Text>
      <Text style={s.programName}>{programName}</Text>
    </View>
  );
}


