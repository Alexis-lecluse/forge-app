import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: '#1e2731',
          // paddingTop: 80,
          paddingBottom: 32,
          paddingHorizontal: 28
        },
      }}
    />
  );
}
