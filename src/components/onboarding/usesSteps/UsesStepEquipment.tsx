import { View, Text } from 'react-native';
import { useOnboardingStore } from '../../../store/useOnboardingStore';
import { OnboardingNextButton } from '../OnboardingNextButton';
import { usesStepStyles as s } from './usesStep.styles';
import { UsesOptionCard } from './UsesOptionCard';

const HOME_EQUIPMENT = [
  { icon: '🚫', label: 'Poids du corps uniquement' },
  { icon: '🏋️', label: 'Haltères ajustables' },
  { icon: '🔛', label: 'Barre de traction' },
  { icon: '🔵', label: 'Bandes élastiques / TRX' },
  { icon: '🛏️', label: 'Banc de musculation' },
  { icon: '🏗️', label: 'Cage / Barre olympique' },
  { icon: '⚫', label: 'Kettlebells' },
];

const GYM_OPTIONS = [
  { icon: '✅', label: 'Salle complète', sub: 'Barres, haltères, câbles, machines guidées' },
  { icon: '⚠️', label: 'Salle basique', sub: 'Haltères et quelques appareils' },
];

interface Props {
  onNext: () => void;
  isLast: boolean;
}

export function UsesStepEquipment({ onNext, isLast }: Props) {
  const {  location, equipment, setEquipment, toggleEquipment } = useOnboardingStore();
  const canAdvance = equipment.length > 0;
  const isGym = location === 'gym';

  return (
    <View style={s.container}>
      <View>
        <Text style={s.question}>Quel est ton équipement disponible ?</Text>

        {isGym ? (
          <View style={s.list}>
            {GYM_OPTIONS.map((opt) => (
              <UsesOptionCard
                key={opt.label}
                icon={opt.icon}
                label={opt.label}
                sub={opt.sub}
                selected={equipment.includes(opt.label)}
                onPress={() => setEquipment([opt.label])}
              />
            ))}
          </View>
        ) : (
          <View>
            <Text style={s.multiHint}>Sélection multiple</Text>
            <View style={s.list}>
              {HOME_EQUIPMENT.map((opt) => {
                const selected = equipment.includes(opt.label);
                return (
                  <UsesOptionCard
                    key={opt.label}
                    icon={opt.icon}
                    label={opt.label}
                    selected={selected}
                    showCheckmark
                    onPress={() => toggleEquipment(opt.label)}
                  />
                );
              })}
            </View>
          </View>
        )}
      </View>
      <OnboardingNextButton onPress={onNext} disabled={!canAdvance} isLast={isLast} />
    </View>
  );
}
