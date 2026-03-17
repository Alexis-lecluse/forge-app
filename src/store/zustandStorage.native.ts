import { createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const zustandStorage = createJSONStorage(() => AsyncStorage);
