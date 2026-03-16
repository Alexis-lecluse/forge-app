import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { supabase } from '../../supabase/supabase';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const redirectTo = AuthSession.makeRedirectUri({ scheme: 'forge' });

  useEffect(() => {
    if (Platform.OS !== 'web') {
      WebBrowser.warmUpAsync();
      return () => { WebBrowser.coolDownAsync(); };
    }
  }, []);

  async function signInWithGoogle() {
    if (Platform.OS === 'web') {
      // Sur web : redirection directe gérée par le navigateur
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      });
      return;
    }

    // Sur iOS / Android : ouverture in-app via WebBrowser
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });

    if (error || !data.url) return;

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

    if (result.type === 'success' && result.url) {
      const url = new URL(result.url);
      // Les tokens sont dans le hash (#access_token=...)
      const hashParams = new URLSearchParams(url.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');

      if (accessToken && refreshToken) {
        await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
      }
    }
  }

  async function signInWithApple() {
    if (Platform.OS === 'web') {
      await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: { redirectTo: window.location.origin },
      });
      return;
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });

    if (error || !data.url) return;

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

    if (result.type === 'success' && result.url) {
      const url = new URL(result.url);
      const hashParams = new URLSearchParams(url.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');

      if (accessToken && refreshToken) {
        await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>FORGE</Text>
        <Text style={styles.tagline}>Forge ton corps. Forge ta discipline.</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonGoogle} onPress={signInWithGoogle}>
          <Text style={styles.buttonGoogleText}>Continuer avec Google</Text>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.buttonApple} onPress={signInWithApple}>
            <Text style={styles.buttonAppleText}>Continuer avec Apple</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.legal}>
        En continuant, tu acceptes nos Conditions d'utilisation et notre Politique de confidentialité.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  header: {
    alignItems: 'center',
    gap: 12,
    marginTop: 40,
  },
  logo: {
    fontSize: 56,
    fontWeight: '900',
    color: '#ff6c2d',
    letterSpacing: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },
  buttonGoogle: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  buttonGoogleText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonApple: {
    width: '50%',
    backgroundColor: '#000',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonAppleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  legal: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    lineHeight: 18,
  },
});
