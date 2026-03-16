import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OnboardingNextButtonProps {
  onPress: () => void;
  disabled: boolean;
  isLast: boolean;
  lastLabel?: string;
}

export function OnboardingNextButton({ onPress, disabled, isLast, lastLabel }: OnboardingNextButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.btn, disabled && styles.btnDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
    >
      <Text style={styles.btnText}>{isLast ? (lastLabel ?? 'Continuer →') : 'Suivant →'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF4C00',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  btnDisabled: {
    backgroundColor: '#2A2A2A',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
