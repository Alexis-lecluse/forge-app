import { View, Text } from 'react-native';
import { s } from './workout.styles';

export function WorkoutTipCard() {
  return (
    <View style={s.tipCard}>
      <Text style={s.tipText}>
        💡 Ce programme est basé sur tes préférences. Tu pourras toujours le modifier depuis
        l'onglet <Text style={{ color: '#FF4C00' }}>MON PROGRAMME</Text>.
      </Text>
    </View>
  );
}


