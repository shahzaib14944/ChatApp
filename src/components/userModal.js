import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CHAT_SCREEN } from '../Navigation/payload.routes';
import { colors } from '../config/theme';
import firestore from '@react-native-firebase/firestore';
import { ErrorToast } from './toast';

const UserIdModal = ({ visible, setVisible, myUserId, callBack, chats, myUserName }) => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    if(!userId || !name) return
    addChatToDatabase()
    callBack && callBack()
    setVisible(false);
  };
  const closeModal = () => {
    setVisible(false)
}

const addChatToDatabase = () => {
    let findUser = chats?.find(x => x.receiverId === userId)
    if(!findUser || userId === myUserId) {
        let data = [
            { senderId: myUserId, receiverId: userId, name },
            { senderId: userId, receiverId: myUserId, name: myUserName }
        ]
        data.forEach(x => {
            if(x) {
            firestore()
            .collection(x.senderId)
            .add(x)
            }
        })
        navigation.navigate(CHAT_SCREEN, { userId });
    } else {
        ErrorToast("Chat already exists.")
    }
}

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>Enter User ID</Text>
          <TextInput
            style={styles.input}
            placeholder="User ID"
            value={userId}
            onChangeText={text => setUserId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Let's Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
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
  modalBox: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
    padding: 12,
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default UserIdModal;
