import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { SwapTarget } from './workout.types';
import { s } from './workout.styles';

interface Props {
  swapTarget: SwapTarget | null;
  onConfirm: (newName: string) => void;
  onClose: () => void;
}

export function WorkoutSwapModal({ swapTarget, onConfirm, onClose }: Props) {
  return (
    <Modal
      visible={swapTarget !== null}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={s.modalOverlay} onPress={onClose}>
        <Pressable style={s.modalSheet} onPress={() => {}}>
          <View style={s.modalHandle} />
          <Text style={s.modalTitle}>Remplacer l'exercice</Text>
          <Text style={s.modalCurrent}>
            Actuellement : <Text style={{ color: '#fff' }}>{swapTarget?.currentName}</Text>
          </Text>
          <Text style={s.modalSubtitle}>Choisir une alternative :</Text>
          {swapTarget?.alternatives.map((alt) => (
            <TouchableOpacity
              key={alt}
              style={s.altOption}
              onPress={() => onConfirm(alt)}
              activeOpacity={0.8}
            >
              <Text style={s.altOptionText}>{alt}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={s.cancelBtn} onPress={onClose} activeOpacity={0.8}>
            <Text style={s.cancelBtnText}>Annuler</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}


