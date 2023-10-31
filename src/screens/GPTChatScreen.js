import React, { useState, useCallback, useEffect, useRef } from 'react'
import { SafeAreaView, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { Avatar, GiftedChat, Send, Bubble, InputToolbar } from 'react-native-gifted-chat'
import AppStyles from '../config/AppStyles';
import { colors } from '../config/theme';
import firestore from '@react-native-firebase/firestore';
import { strings } from '../config/strings';
import { useSelector } from 'react-redux';
import { isIOS } from '../config/dimensions';
import Header from '../components/header';
import { IconSet } from '../components/Icons';
import { GPT_KEY } from '../config/Constants';
import { GPTBodyExport } from '../helpers/helperFunctions';
import axios from 'axios';

export default function GPTChatScreen({ route, navigation }) {
    const [messages, setMessages] = useState([]);
    const userData = useSelector(state => state.userReducer.user)
    let chatCollection = useRef('')
    const myId = userData?.id
    const userId = route?.params?.userId
    let collectionID = myId < userId ? `${myId}` + `${userId}` : `${userId}` + `${myId}`
    
    useEffect(() => {
        let unsubscribeListener = firestore()
            .collection(collectionID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                if (querySnapshot?.empty) {
                    functions.setSystemMessage()
                } else {
                    // chatCollection.current = `${myId}-${userId}`
                    functions.updateMessages(querySnapshot)
                }

            })

        return () => { unsubscribeListener(); }
    }, [])

    const functions = {
        setSystemMessage: () => {
            setMessages([
                {
                    _id: 1,
                    text: `${'Hello '}${userData.email}, how can I help.`,
                    createdAt: new Date(),
                    system: true
                },
            ])
        },
        updateMessages: (querySnapshot) => {
            const chat = firestore().collection(collectionID)
            const messages = querySnapshot?.docs?.map(doc => {
                const firebaseData = doc.data()
                const data = {
                    _id: doc.id,
                    text: '',
                    ...firebaseData,
                    createdAt: new Date().getTime(),
                }
                if (!firebaseData.system) {
                    data.user = {
                        ...firebaseData.user,
                        name: firebaseData.user.name
                    }
                }
                return data
            })
            setMessages(messages)
        },
        renderSend: (props) => {
            const { text, messageIdGenerator, user, onSend } = props
            return (

                <Pressable onPress={
                    () => {
                        if (text && onSend) {
                            onSend({ text: text.trim(), user: user, _id: messageIdGenerator() }, true);
                        }
                    }} style={{ justifyContent: 'center', backgroundColor: colors.lightgray, padding: 10 }}>
                    <IconSet onPress={() => {
                        if (text && onSend) {
                            onSend({ text: text.trim(), user: user, _id: messageIdGenerator() }, true);
                        }
                    }} materialCommunityIcons name='send' color={colors.secondary} size={25} />
                </Pressable>
            )
        },
        renderBubble: (props) => {
            return (
                <Bubble
                    {...props}
                    tickStyle={{ color: props.currentMessage.received ? colors.secondary : '#999' }}
                    textStyle={{
                        right: {
                            color: colors.white,
                            fontSize: 12
                        },
                        left: {
                            fontSize: 12
                        }
                    }}
                    wrapperStyle={{
                        right: {
                            backgroundColor: colors.primary,
                            padding: 5, marginBottom: 2,
                        },
                        left: [
                            {
                                backgroundColor: colors.lightgray, marginBottom: 5,
                                overflow: isIOS ? 'visible' : 'hidden',
                                shadowColor: isIOS ? '#ccc' : '#000',
                                shadowOpacity: 0.7,
                                shadowRadius: 1,
                                elevation: 1,
                                shadowOffset: {
                                    height: 0,
                                    weight: 0,
                                },
                            },
                        ]
                    }}
                />
            );
        },
        onSend: useCallback((messages = []) => {
            console.log(messages, "whats up")
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
            let allMessages = { ...messages[0], received: false, sent: true, senderId: myId, receiverId: userId }
            functions.generateResponseMessage(messages)
        }, []),
        generateResponseMessage: async (message) => {
            let data = GPTBodyExport(message[0]?.text)
            try {
                let response = await fetchGPTResponse(data)
                const gptUser = {
                    _id: 2,
                    text: response?.choices[0]?.message.content,
                    createdAt: new Date(),
                    user: {
                      _id: 2,
                      name: 'GPT',
                    },
                };
                setMessages(previousMessages => GiftedChat.append(previousMessages, gptUser))

            } catch(e) {
                console.log(e, "errrorrrr")
            }
        }
    }

    const fetchGPTResponse = async (data) => {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', 
        data, 
        {
            headers: {'Authorization': `Bearer ${GPT_KEY}`,}
        })
        return response.data;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header screenName={'Chat Screen'} navigation={navigation} />
            <GiftedChat
                messages={messages}
                renderAvatarOnTop={true}
                placeholder={"Say someting..."}
                textInputProps={{ style: { backgroundColor: 'white', color: 'black', flex: 1 } }}
                showUserAvatar={true}
                messagesContainerStyle={{ backgroundColor: colors.white }}
                renderUsernameOnMessage={true}
                textInputStyle={{ backgroundColor: colors.black }}
                renderBubble={functions.renderBubble}
                renderSend={functions.renderSend}
                onSend={messages => functions.onSend(messages)}
                user={{
                    _id: userData?.id,
                    name: userData?.email,
                }}
            />
        </SafeAreaView>
    )
}