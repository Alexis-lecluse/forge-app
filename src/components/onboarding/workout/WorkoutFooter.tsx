import { View, Text, TouchableOpacity } from 'react-native';
import { s } from './workout.styles';

interface Props {
  onConfirm: () => void;
}

export function WorkoutFooter({ onConfirm }: Props) {
  return (
    <View style={s.footer}>
      <TouchableOpacity style={s.confirmBtn} onPress={onConfirm} activeOpacity={0.85}>
        <Text style={s.confirmBtnText}>Je valide ce programme — C'est parti ! 🚀</Text>
      </TouchableOpacity>
    </View>
  );
}


