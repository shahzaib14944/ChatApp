import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { CHAT_SCREEN, GPTCHAT_SCREEN } from '../Navigation/payload.routes';
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';
import UserIdModal from '../components/userModal';
import { colors } from '../config/theme';
import Loader from '../components/loader';

const ChatScreen = ({navigation}) => {
  const [chats, setChats] = useState([])
  const [visibleModal, setVisibleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    fetchChatData()
  }, [user])

  const fetchChatData = () => {
    let gptArray = [{name: 'GPT', receiverId: 'GPT', senderId: user?.id}]
    setLoading(true)
    if(user) {
        firestore()
        .collection(user?.id)
        .get()
        .then(querySnapshot => {
            let newData = []
            if(querySnapshot?.docs?.length > 0) {
                querySnapshot?.docs?.map((x, i) => {
                    let data = x.data()
                    newData.push({...data})
                })
            }
        let concatinatedArrays = gptArray.concat(newData)
        setChats(concatinatedArrays)
        setLoading(false)
    });
    }
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity id={index} 
        onPress={() => navigation.navigate(item?.receiverId === 'GPT' ? GPTCHAT_SCREEN : CHAT_SCREEN, {userId: item.receiverId})} 
        style={styles.chatItem}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.receiverId}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    {user?.id && <Text style={{fontSize: 11}}>My ID: {user?.id}</Text>}
    <UserIdModal
        setVisible={val => setVisibleModal(val)}
        visible={visibleModal}
        myUserId={user?.id}
        myUserName={user?.email}
        callBack={() => fetchChatData()}
        chats={chats}
     />
     <Loader visible={loading} />
     <View style={styles.container}>
     <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <Text style={{textAlign: 'center'}}>Start a Conversation</Text>}
      />
     </View>
      <TouchableOpacity onPress={() => setVisibleModal(true)} style={styles.newConversationButton}>
        <Text style={styles.buttonText}>Start a New Conversation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  chatItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lastMessage: {
    fontSize: 16,
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#777',
  },
  newConversationButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChatScreen;
