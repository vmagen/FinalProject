import React, { useState, useCallback, useEffect , setInterval} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import helpers from '../helpers/helperFunctions';
import initialMessages from '../Chats/messages';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FCChat(props) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    _id:-1,
    name:'',
    avatar:''
  });
 
  useEffect(() => {
    
    const getUser= async()=>{
        const myUser= await AsyncStorage.getItem('login');
        if(myUser !== null)
        {
          const temp=await JSON.parse(myUser);
          setUser({
            _id:temp.email,
            name:temp.name,
            avatar:temp.picture
          });
        }
        else{
          console.log('error');
        }
    }
    getUser();
    setMessages(initialMessages.reverse());
  },[])


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    console.log(messages);
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={user}
      alignTop
      alwaysShowSend
      scrollToBottom
      showUserAvatar
      renderAvatarOnTop
      renderUsernameOnMessage
      bottomOffset={26}
      onPressAvatar={console.log}
      isCustomViewBottom={true}
      messagesContainerStyle={{ backgroundColor: 'white' }}
      parsePatterns={(linkStyle) => [
        {
          pattern: /#(\w+)/,
          style: linkStyle,
          onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
      ]}
    />
  )
}