import React, { useState, useCallback, useEffect, setInterval } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import helpers from '../helpers/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FCChat(props) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [lastDate, setLastDate] = useState(null);

  const [user, setUser] = useState({
    _id: -1,
    name: '',
    avatar: ''
  });


  useEffect(() => {
    if (lastDate == null) {
      getUser();
      loadMessages();
    }
  }, [])

  const getlastDate=()=>{
   console.log(messages);
  }

  const getUser = async () => {
    const myUser = await AsyncStorage.getItem('login');
    if (myUser !== null) {
      const temp = await JSON.parse(myUser);
      setUser({
        _id: temp.email,
        name: temp.name,
        avatar: temp.picture
      });
    }
    else {
      console.log('user is not signed in');
    }

  }

  const loadMessages = async () => {
    const result = await fetch(helpers.getApi() + 'Messages/' + props.groupID);
    const data = await result.json();
    setMessages(data);
  
  }

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    console.log(lastDate);
  };


  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      user={user}
      alignTop
      alwaysShowSend
      scrollToBottom
      showUserAvatar
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