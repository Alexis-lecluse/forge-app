import { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface OnboardingProgressBarProps {
  progress: number;
}

export function OnboardingProgressBar({ progress }: OnboardingProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.fill, { width: widthInterpolated }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 3,
    backgroundColor: '#1E1E1E',
    marginHorizontal: 20,
    borderRadius: 2,
    marginBottom: 8,
  },
  fill: {
    height: 3,
    backgroundColor: '#FF4C00',
    borderRadius: 2,
  },
});
