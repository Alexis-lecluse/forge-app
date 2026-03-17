import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#1e2731',
          paddingTop: 80,
          paddingBottom: 32,
          paddingHorizontal: 28
      }
    }} />
  );
}
