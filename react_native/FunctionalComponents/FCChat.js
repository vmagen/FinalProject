import React, { useState, useCallback, useEffect, setInterval } from 'react'
import { Image } from 'react-native';
import { GiftedChat , Actions} from 'react-native-gifted-chat'
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
    const lastM = data[0];
    console.log(lastM);

  }

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    SaveMessage(newMessages);
  };

  const SaveMessage = async (newMessages) => {
    let newMsg =
    {
      "groupId":props.groupID,
        "createdAt": new Date().toLocaleString(),
        "text": newMessages[0].text,
        "user": {
            "_id": user._id,
           
        }
    };
    console.log(newMsg);

    await fetch(helpers.getApi() + '/Messages',
      {
        method: 'POST',
        body: JSON.stringify(newMsg),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        return JSON.stringify(res);
      }, (error) => {
        alert(error);
      })

  }

  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      user={user}
      alignTop
      alwaysShowSend={true}
      scrollToBottom
      showUserAvatar
      bottomOffset={26}
      onPressAvatar={console.log}
      renderActions={renderActions}
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

export const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
    }}
    icon={() => (
      <Image
        style={{ width: 26, height: 26 }}
        source={{
          uri: 'http://proj.ruppin.ac.il/bgroup15/prod/FinalPics/paperclip.png',
        }}
      />
    )}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor="#222B45"
  />
);