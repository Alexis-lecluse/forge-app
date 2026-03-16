import { View, Text } from 'react-native';
import { TrainingLevel, useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { usesStepStyles as s } from './usesStep.styles';
import { UsesOptionCard } from './UsesOptionCard';

const LEVELS: { icon: string; label: string; value: TrainingLevel; sub: string }[] = [
  {
    icon: '🐣',
    label: 'Débutant',
    value: 'beginner',
    sub: 'Je commence tout juste, les mouvements de base sont nouveaux pour moi.',
  },
  {
    icon: '🌱',
    label: 'Intermédiaire',
    value: 'intermediate',
    sub: "J'ai déjà pratiqué mais pas de façon régulière ou structurée.",
  },
  {
    icon: '💪',
    label: 'Confirmé',
    value: 'advanced',
    sub: "Je m'entraîne régulièrement depuis plus d'un an avec un vrai programme.",
  },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function UsesStepLevel({ onNext, isLast }: Props) {
  const {  level, setLevel } = useOnboardingStore();
  const canAdvance = level !== null;

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Comment tu te situes en musculation ?</Text>
        <View style={s.list}>
          {LEVELS.map((opt) => (
            <UsesOptionCard
              key={opt.value}
              icon={opt.icon}
              label={opt.label}
              sub={opt.sub}
              selected={level === opt.value}
              onPress={() => setLevel(opt.value)}
            />
          ))}
        </View>
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
