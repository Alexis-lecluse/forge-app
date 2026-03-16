import { View, Text, TextInput, StyleSheet } from 'react-native';

interface OnboardingNumericInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  unit: string;
  maxLength?: number;
  keyboardType?: 'number-pad' | 'decimal-pad';
  hint?: string;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
}

export function OnboardingNumericInput({
  value,
  onChangeText,
  placeholder = '',
  unit,
  maxLength,
  keyboardType = 'number-pad',
  hint,
  autoFocus = false,
  onSubmitEditing,
}: OnboardingNumericInputProps) {
  return (
    <View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#444"
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          maxLength={maxLength}
          returnKeyType="done"
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.unit}>{unit}</Text>
      </View>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
  unit: {
    fontSize: 20,
    color: '#9E9E9E',
    fontWeight: '600',
    minWidth: 40,
  },
  hint: {
    fontSize: 13,
    color: '#555',
    marginTop: 12,
  },
});
