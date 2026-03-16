import { View, Text } from 'react-native';
import { TargetZone, useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { usesStepStyles as s } from './usesStep.styles';
import { UsesOptionCard } from './UsesOptionCard';

const TARGET_ZONES: { icon: string; label: string; value: TargetZone; sub?: string }[] = [
  { icon: '🫀', label: 'Corps complet (Full Body)', value: 'full-body' },
  { icon: '💪', label: 'Haut du corps', value: 'upper-body', sub: 'Pectoraux, Dos, Épaules, Bras' },
  { icon: '🦵', label: 'Bas du corps', value: 'lower-body', sub: 'Quadriceps, Ischio, Fessiers' },
  { icon: '🎯', label: 'Abdominaux / Gainage', value: 'abs' },
  { icon: '🔙', label: 'Dos / Posture', value: 'back' },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function UsesStepTargetZones({ onNext, isLast }: Props) {
  const { firstName, targetZones, toggleTargetZone } = useOnboardingStore();
  const canAdvance = targetZones.length > 0;

  return (
    <View style={s.container}>
      <View>
        {firstName ? <Text style={s.greeting}>{firstName}, </Text> : null}
        <Text style={s.question}>Sur quoi veux-tu mettre le paquet en priorité ?</Text>
        <Text style={s.multiHint}>Sélection jusqu'à 2 zones</Text>
        <View style={s.list}>
          {TARGET_ZONES.map((opt) => {
            const selected = targetZones.includes(opt.value);
            const disabled = !selected && targetZones.length >= 2;
            return (
              <UsesOptionCard
                key={opt.value}
                icon={opt.icon}
                label={opt.label}
                sub={opt.sub}
                selected={selected}
                disabled={disabled}
                showCheckmark
                onPress={() => toggleTargetZone(opt.value)}
              />
            );
          })}
        </View>
      </View>
      <OnboardingNextButton
        onPress={onNext}
        disabled={!canAdvance}
        isLast={isLast}
        lastLabel="Générer mon programme →"
      />
    </View>
  );
}
