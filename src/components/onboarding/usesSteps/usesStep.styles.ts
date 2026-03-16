import { StyleSheet } from 'react-native';

export const usesStepStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 15,
    color: '#9E9E9E',
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 32,
    marginBottom: 28,
  },
  multiHint: {
    fontSize: 12,
    color: '#555',
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  list: {
    gap: 10,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    backgroundColor: '#1A1A1A',
  },
  optionCardSelected: {
    borderColor: '#FF4C00',
    backgroundColor: 'rgba(255,76,0,0.1)',
  },
  optionCardDisabled: {
    opacity: 0.35,
  },
  optionIcon: {
    fontSize: 22,
    width: 32,
    textAlign: 'center',
  },
  optionLabel: {
    fontSize: 15,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  optionLabelSelected: {
    color: '#FF4C00',
    fontWeight: '700',
  },
  optionLabelDisabled: {
    color: '#444',
  },
  optionSub: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  checkmark: {
    color: '#FF4C00',
    fontSize: 16,
    fontWeight: '700',
  },
});
