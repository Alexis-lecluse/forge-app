import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { OnboardingTextInput } from '../../src/components/onboarding/OnboardingTextInput';
import { OnboardingNextButton } from '../../src/components/onboarding/OnboardingNextButton';

export default function FreeProfile() {
  const router = useRouter();
  const { firstName, setFirstName, completeOnboarding } = useOnboardingStore();

  const canAdvance = firstName.trim().length > 2;

  function handleConfirm() {
    completeOnboarding();
    router.push('/(auth)/login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.body}>
            <View>
              <Text style={styles.title}>Bienvenue sur Forge ✏️</Text>
              <Text style={styles.subtitle}>Quel nom veux-tu utiliser ?</Text>
              <OnboardingTextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Ton prénom ou pseudo..."
                autoFocus
                onSubmitEditing={canAdvance ? handleConfirm : undefined}
              />
            </View>

            <OnboardingNextButton
              onPress={handleConfirm}
              disabled={!canAdvance}
              isLast
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#F5F5F5',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#9E9E9E',
    marginBottom: 24,
  },
});
