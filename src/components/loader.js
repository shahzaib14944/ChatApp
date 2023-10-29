import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../config/theme';

const Loader = ({ visible }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

export default Loader;
