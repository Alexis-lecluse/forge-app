import { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useRouter } from 'expo-router';

interface Options {
  step: number;
  totalSteps: number;
  substepCount: number;
  nextRoute: string;
}

export function useSubstepNavigation({ step, totalSteps, substepCount, nextRoute }: Options) {
  const router = useRouter();
  const [substep, setSubstep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  function animateTransition(callback: () => void) {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      callback();
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  }

  function handleNext() {
    if (substep < substepCount - 1) {
      animateTransition(() => setSubstep((s) => s + 1));
    } else {
      router.push(nextRoute as any);
    }
  }

  function handleBack() {
    if (substep > 0) {
      animateTransition(() => setSubstep((s) => s - 1));
    } else {
      router.back();
    }
  }

  const progress = ((step - 1) / totalSteps) * 100 + (substep / substepCount) * (100 / totalSteps);
  const isLast = substep === substepCount - 1;

  return { substep, fadeAnim, handleNext, handleBack, progress, isLast };
}
