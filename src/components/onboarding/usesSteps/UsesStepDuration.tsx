import { View, Text } from 'react-native';
import { useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { usesStepStyles as s } from './usesStep.styles';
import { UsesOptionCard } from './UsesOptionCard';

const DURATIONS: { icon: string; label: string; value: number; sub: string }[] = [
  { icon: '⚡', label: '30 minutes', value: 30, sub: 'Séance express' },
  { icon: '🕐', label: '45 minutes', value: 45, sub: 'Séance standard' },
  { icon: '🕑', label: '1 heure', value: 60, sub: 'Séance complète' },
  { icon: '🕒', label: "Plus d'1 heure", value: 90, sub: 'Pas de contrainte de temps' },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function UsesStepDuration({ onNext, isLast }: Props) {
  const {  sessionDuration, setSessionDuration } = useOnboardingStore();
  const canAdvance = sessionDuration !== null;

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Combien de temps as-tu pour chaque séance ?</Text>
        <View style={s.list}>
          {DURATIONS.map((opt) => (
            <UsesOptionCard
              key={opt.value}
              icon={opt.icon}
              label={opt.label}
              sub={opt.sub}
              selected={sessionDuration === opt.value}
              onPress={() => setSessionDuration(opt.value)}
            />
          ))}
        </View>
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
