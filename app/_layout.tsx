import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabase';
import { useOnboardingStore } from '../src/store/useOnboardingStore';
import { saveOnboardingProfile } from '../src/services/saveOnboardingProfile';

export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setInitialized(true);
      
      if (event === 'SIGNED_IN' && session) {
        const store = useOnboardingStore.getState();
        if (store.onboardingCompleted) {
         
          saveOnboardingProfile(session.user.id, store).then(() => {
            useOnboardingStore.getState().reset();
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inOnboardingGroup = segments[0] === '(onboarding)';

    if (!session && !inAuthGroup && !inOnboardingGroup) {
      router.replace('/(auth)/login');
    } else if (session && (inAuthGroup || inOnboardingGroup)) {
      router.replace('/');
    }
  }, [session, initialized, segments]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(onboarding)"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Home',
            headerLargeTitle: true,
          }} 
        />
      </Stack>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 32,
    paddingHorizontal: 28
  },
});