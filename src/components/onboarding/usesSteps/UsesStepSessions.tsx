import { View, Text } from 'react-native';
import { useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { usesStepStyles as s } from './usesStep.styles';
import { UsesOptionCard } from './UsesOptionCard';

const SESSIONS_PER_WEEK: { icon: string; label: string; value: number; sub: string }[] = [
  { icon: '🌙', label: '2 fois / semaine', value: 2, sub: 'Programme minimaliste' },
  { icon: '⚡', label: '3 fois / semaine', value: 3, sub: 'Recommandé pour débuter' },
  { icon: '💪', label: '4 fois / semaine', value: 4, sub: 'Split Haut/Bas ou Push/Pull' },
  { icon: '🔥', label: '5 fois / semaine', value: 5, sub: 'Split avancé' },
  { icon: '🤔', label: 'Je ne sais pas encore', value: 3, sub: "L'IA suggère 3 par défaut" },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function UsesStepSessions({ onNext, isLast }: Props) {
  const {  sessionsPerWeek, setSessionsPerWeek } = useOnboardingStore();
  const canAdvance = sessionsPerWeek !== null;

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Combien de fois par semaine veux-tu t'entraîner ?</Text>
        <View style={s.list}>
          {SESSIONS_PER_WEEK.map((opt) => (
            <UsesOptionCard
              key={opt.label}
              icon={opt.icon}
              label={opt.label}
              sub={opt.sub}
              selected={sessionsPerWeek === opt.value}
              onPress={() => setSessionsPerWeek(opt.value)}
            />
          ))}
        </View>
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
