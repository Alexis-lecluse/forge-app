import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface OnboardingTopBarProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
}

export function OnboardingTopBar({ step, totalSteps, onBack }: OnboardingTopBarProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} style={styles.backBtn} hitSlop={12}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.stepLabel}>
        Étape {step} / {totalSteps}
      </Text>
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 22,
    color: '#9E9E9E',
  },
  stepLabel: {
    fontSize: 13,
    color: '#9E9E9E',
    fontWeight: '600',
  },
  placeholder: {
    width: 40,
  },
});
