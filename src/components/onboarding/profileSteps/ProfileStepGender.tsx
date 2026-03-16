import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Gender, useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { profileStepStyles as s } from './profileStep.styles';

const GENDERS: { label: string; value: Gender }[] = [
  { label: '♂  Homme', value: 'male' },
  { label: '♀  Femme', value: 'female' },
  { label: '⚧  Non-binaire', value: 'non-binary' },
  { label: '—  Préfère ne pas préciser', value: 'prefer-not' },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function ProfileStepGender({ onNext, isLast }: Props) {
  const { gender, setGender } = useOnboardingStore();
  const canAdvance = gender !== null;

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Comment t'identifies-tu ?</Text>
        <View style={styles.chips}>
          {GENDERS.map((g) => (
            <TouchableOpacity
              key={g.value}
              style={[styles.chip, gender === g.value && styles.chipSelected]}
              onPress={() => setGender(g.value)}
              activeOpacity={0.8}
            >
              <Text style={[styles.chipText, gender === g.value && styles.chipTextSelected]}>
                {g.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}

const styles = StyleSheet.create({
  chips: {
    gap: 10,
  },
  chip: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    backgroundColor: '#1A1A1A',
  },
  chipSelected: {
    borderColor: '#FF4C00',
    backgroundColor: 'rgba(255,76,0,0.12)',
  },
  chipText: {
    fontSize: 15,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#FF4C00',
    fontWeight: '700',
  },
});
