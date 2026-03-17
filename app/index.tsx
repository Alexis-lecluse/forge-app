import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { supabase } from '../supabase/supabase';
import { useProfile } from '../src/hooks/useProfile';
import { Loader } from "../src/components/common/Loader";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const { profile, loading } = useProfile();

  const cardItems = [{
    id: 'start-training',
    title: 'Training Session',
    href: '/session/start',
  }, {
    id: 'create-training',
    title: 'Create Training',
    href: '/training/create',
  }]

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <Loader /> :
        (profile ? (
        <>
          <Text style={styles.greeting}>
            Bonjour {profile?.username ?? '—'} 👋
          </Text>
          <View style={styles.cardsContainer}>
            {cardItems.map((item) => (
              <View key={item.id}>
                <Text>{item.title}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.signOutButton} onPress={() => supabase.auth.signOut()}>
            <Text style={styles.signOutText}>Se déconnecter</Text>
          </TouchableOpacity>
        </>
        ) : (
          <TouchableOpacity style={styles.signOutButton} onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.signOutText}>Se connecter</Text>
          </TouchableOpacity>
        ))}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  signOutButton: {
    marginTop: 'auto',
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF4C00',
  },
  signOutText: {
    color: '#FF4C00',
    fontSize: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F5F5F5',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
});
