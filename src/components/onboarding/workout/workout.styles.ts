import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  // ─── TitleBlock ────────────────────────────────────────────
  titleBlock: {
    gap: 6,
  },
  aiLabel: {
    fontSize: 13,
    color: '#9E9E9E',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#9E9E9E',
    lineHeight: 20,
  },

  // ─── ProgramNameCard ───────────────────────────────────────
  programNameCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FF4C00',
  },
  programNameLabel: {
    fontSize: 11,
    color: '#FF4C00',
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  programName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // ─── SessionCard ───────────────────────────────────────────
  sessionCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  sessionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
    backgroundColor: '#141414',
  },
  sessionDay: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF4C00',
    textTransform: 'uppercase',
    letterSpacing: 1,
    minWidth: 72,
  },
  sessionName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  exerciseInfo: {
    flex: 1,
    gap: 3,
  },
  exerciseName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  exerciseSets: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  modifiedBadge: {
    backgroundColor: 'rgba(255,76,0,0.15)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  modifiedBadgeText: {
    color: '#FF4C00',
    fontSize: 10,
    fontWeight: '700',
  },
  exerciseActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  resetBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetBtnText: {
    color: '#555',
    fontSize: 18,
  },
  swapBtn: {
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  swapBtnText: {
    color: '#9E9E9E',
    fontSize: 12,
    fontWeight: '600',
  },

  // ─── TipCard ───────────────────────────────────────────────
  tipCard: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  tipText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 19,
  },

  // ─── Footer ────────────────────────────────────────────────
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
  },
  confirmBtn: {
    backgroundColor: '#FF4C00',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // ─── SwapModal ─────────────────────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    gap: 12,
  },
  modalHandle: {
    width: 36,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  modalCurrent: {
    fontSize: 13,
    color: '#555',
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#555',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  altOption: {
    backgroundColor: '#111',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  altOptionText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cancelBtn: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  cancelBtnText: {
    color: '#555',
    fontSize: 15,
    fontWeight: '600',
  },
});
