import { View, Text, TouchableOpacity } from 'react-native';
import { Exercise } from './workout.types';
import { s } from './workout.styles';

interface Props {
  exercise: Exercise;
  onSwap: () => void;
  onReset: () => void;
}

export function WorkoutExercise({ exercise, onSwap, onReset }: Props) {
  return (
    <View style={s.exerciseRow}>
      <View style={s.exerciseInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={s.exerciseName}>{exercise.name}</Text>
          {exercise.modified && (
            <View style={s.modifiedBadge}>
              <Text style={s.modifiedBadgeText}>Modifié</Text>
            </View>
          )}
        </View>
        <Text style={s.exerciseSets}>
          {exercise.sets} séries × {exercise.reps}
        </Text>
      </View>

      <View style={s.exerciseActions}>
        {exercise.modified && (
          <TouchableOpacity onPress={onReset} style={s.resetBtn} hitSlop={8}>
            <Text style={s.resetBtnText}>↺</Text>
          </TouchableOpacity>
        )}
        {exercise.alternatives?.length ? (
          <TouchableOpacity onPress={onSwap} style={s.swapBtn} activeOpacity={0.8}>
            <Text style={s.swapBtnText}>Changer</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
