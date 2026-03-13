import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { supabase } from '../supabase/supabase';

export default function HomeScreen() {
  const cardItems  = [{
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    fontWeight: '600',
  },
});