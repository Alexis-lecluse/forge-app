import { TextInput, StyleSheet } from 'react-native';

interface OnboardingTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
}

export function OnboardingTextInput({
  value,
  onChangeText,
  placeholder = '',
  autoFocus = false,
  onSubmitEditing,
}: OnboardingTextInputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#444"
      autoFocus={autoFocus}
      returnKeyType="done"
      onSubmitEditing={onSubmitEditing}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    color: '#FFFFFF',
  },
});
