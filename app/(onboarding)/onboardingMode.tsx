import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';

export default function OnboardingMode() {
  const router = useRouter();
  const setMode = useOnboardingStore((s) => s.setMode);

  function handleSelect(mode: 'guided' | 'free') {
    setMode(mode);
    router.push(mode === 'guided' ? '/(onboarding)/profile' : '/(onboarding)/freeProfile');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logo}>FORGE</Text>
        <Text style={styles.tagline}>Forge ton corps. Forge ta discipline.</Text>
        <Text style={styles.title}>Comment veux-tu démarrer ?</Text>
      </View>

      <View style={styles.cards}>
        <TouchableOpacity
          style={[styles.card, styles.cardPrimary]}
          activeOpacity={0.85}
          onPress={() => handleSelect('guided')}
        >
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Recommandé</Text>
          </View>
          <Text style={styles.icon}>🤖</Text>
          <Text style={styles.cardTitle}>Je veux être guidé par le coach IA</Text>
          <Text style={styles.cardDesc}>
            Je réponds à quelques questions et le coach m'aide à créer un programme sur-mesure.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.cardSecondary]}
          activeOpacity={0.85}
          onPress={() => handleSelect('free')}
        >
          <Text style={styles.icon}>✏️</Text>
          <Text style={styles.cardTitle}>Je crée mon programme moi-même</Text>
          <Text style={styles.cardDesc}>
            J'ai de l'expérience, je veux construire ma routine librement.
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.legal}>
        En continuant, tu acceptes nos Conditions d'utilisation et notre Politique de
        confidentialité.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    marginTop: 56,
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FF4C00',
    letterSpacing: 6,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 13,
    color: '#555',
    letterSpacing: 1,
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cards: {
    gap: 16,
  },
  card: {
    borderRadius: 18,
    padding: 24,
    borderWidth: 1,
  },
  cardPrimary: {
    backgroundColor: '#1A1A1A',
    borderColor: '#FF4C00',
  },
  cardSecondary: {
    backgroundColor: '#1A1A1A',
    borderColor: '#2A2A2A',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF4C00',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  icon: {
    fontSize: 38,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: '#9E9E9E',
    lineHeight: 21,
  },
  legal: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    lineHeight: 18,
  },
});
