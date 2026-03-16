import { View, Text, TouchableOpacity } from 'react-native';
import { usesStepStyles as s } from './usesStep.styles';

interface Props {
  icon: string;
  label: string;
  sub?: string;
  selected: boolean;
  disabled?: boolean;
  showCheckmark?: boolean;
  onPress: () => void;
}

export function UsesOptionCard({
  icon,
  label,
  sub,
  selected,
  disabled = false,
  showCheckmark = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[s.optionCard, selected && s.optionCardSelected, disabled && s.optionCardDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={s.optionIcon}>{icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={[s.optionLabel, selected && s.optionLabelSelected, disabled && s.optionLabelDisabled]}>
          {label}
        </Text>
        {sub ? <Text style={s.optionSub}>{sub}</Text> : null}
      </View>
      {showCheckmark && selected && <Text style={s.checkmark}>✓</Text>}
    </TouchableOpacity>
  );
}
