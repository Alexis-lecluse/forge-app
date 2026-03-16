import { View, Text } from 'react-native';
import { ProgramSession } from './workout.types';
import { s } from './workout.styles';
import { WorkoutExercise } from './WorkoutExercise';

interface Props {
  session: ProgramSession;
  onSwap: (sessionId: string, exerciseIndex: number) => void;
  onReset: (sessionId: string, exerciseIndex: number) => void;
}

export function WorkoutSessionCard({ session, onSwap, onReset }: Props) {
  return (
    <View style={s.sessionCard}>
      <View style={s.sessionHeader}>
        <Text style={s.sessionDay}>{session.day}</Text>
        <Text style={s.sessionName}>{session.name}</Text>
      </View>

      {session.exercises.map((exercise, exIndex) => (
        <WorkoutExercise
          key={exIndex}
          exercise={exercise}
          onSwap={() => onSwap(session.id, exIndex)}
          onReset={() => onReset(session.id, exIndex)}
        />
      ))}
    </View>
  );
}


