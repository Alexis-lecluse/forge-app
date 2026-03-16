import { View, Text } from 'react-native';
import { TrainingLocation, useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { usesStepStyles as s } from './usesStep.styles';
import { UsesOptionCard } from './UsesOptionCard';

const LOCATIONS: { icon: string; label: string; value: TrainingLocation; sub: string }[] = [
  { icon: '🏢', label: 'En salle de sport', value: 'gym', sub: 'Accès aux machines et poids libres' },
  { icon: '🏠', label: 'À la maison', value: 'home', sub: 'Espace réduit, matériel limité' },
  { icon: '🔄', label: 'Les deux selon les jours', value: 'both', sub: 'Programme hybride' },
  { icon: '🌳', label: 'En extérieur', value: 'outdoor', sub: 'Calisthenics, course, outdoor' },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function UsesStepLocation({ onNext, isLast }: Props) {
  const {  location, setLocation } = useOnboardingStore();
  const canAdvance = location !== null;

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Où est-ce que tu t'entraînes en général ?</Text>
        <View style={s.list}>
          {LOCATIONS.map((opt) => (
            <UsesOptionCard
              key={opt.value}
              icon={opt.icon}
              label={opt.label}
              sub={opt.sub}
              selected={location === opt.value}
              onPress={() => setLocation(opt.value)}
            />
          ))}
        </View>
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
