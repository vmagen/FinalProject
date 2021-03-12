import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
export function FCChat(props) {
  const [messages, setMessages] = useState([]);
    
  const welcomeMsg='ברוך הבא ל ' + props.groupName +'\n'+ props.groupDesc;
  useEffect(() => {
    console.log(props);
    setMessages([
      {
        _id: 1,
        text: welcomeMsg ,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}