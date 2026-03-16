import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Goal, useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { profileStepStyles as s } from './profileStep.styles';

const GOALS: { icon: string; label: string; value: Goal }[] = [
  { icon: '🔥', label: 'Perdre du poids / Brûler les graisses', value: 'lose-weight' },
  { icon: '💪', label: 'Prendre du muscle (Hypertrophie)', value: 'build-muscle' },
  { icon: '⚡', label: 'Améliorer ma condition physique générale', value: 'general-fitness' },
  { icon: '🏋️', label: 'Augmenter ma force (Powerlifting)', value: 'strength' },
  { icon: '🧘', label: 'Me remettre en forme après une pause', value: 'get-back-in-shape' },
  { icon: '✏️', label: 'Autre (précise ton objectif)', value: 'custom' },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function ProfileStepGoal({ onNext, isLast }: Props) {
  const { goal, setGoal, customGoal, setCustomGoal } = useOnboardingStore();
  const canAdvance = goal !== null && (goal !== 'custom' || customGoal.trim().length > 0);

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Quel est ton objectif principal ?</Text>
        <View style={styles.goalList}>
          {GOALS.map((g) => (
            <TouchableOpacity
              key={g.value}
              style={[styles.goalItem, goal === g.value && styles.goalItemSelected]}
              onPress={() => setGoal(g.value)}
              activeOpacity={0.8}
            >
              <Text style={styles.goalIcon}>{g.icon}</Text>
              <Text style={[styles.goalLabel, goal === g.value && styles.goalLabelSelected]}>
                {g.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {goal === 'custom' && (
          <TextInput
            style={styles.customInput}
            value={customGoal}
            onChangeText={setCustomGoal}
            placeholder="Décris ton objectif..."
            placeholderTextColor="#444"
            autoFocus
            returnKeyType="done"
          />
        )}
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}

const styles = StyleSheet.create({
  goalList: {
    gap: 10,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    backgroundColor: '#1A1A1A',
  },
  goalItemSelected: {
    borderColor: '#FF4C00',
    backgroundColor: 'rgba(255,76,0,0.12)',
  },
  goalIcon: {
    fontSize: 24,
  },
  goalLabel: {
    fontSize: 15,
    color: '#9E9E9E',
    fontWeight: '500',
    flex: 1,
  },
  goalLabelSelected: {
    color: '#FF4C00',
    fontWeight: '700',
  },
  customInput: {
    marginTop: 12,
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF4C00',
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
});
