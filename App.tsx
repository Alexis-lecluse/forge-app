import { StyleSheet } from 'react-native';
import RootLayout from './app/_layout';

export default function App() {
  return (
    <RootLayout />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
