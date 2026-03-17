import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface Props {
  size?: 'small' | 'large';
  color?: string;
}

export function Loader({ size = 'large', color = '#FF4C00' }: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
