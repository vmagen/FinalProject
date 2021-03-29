import React, { useState, useCallback, useEffect, setInterval } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import helpers from '../helpers/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CCChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages:[],
            user:null
        };
    }

    getUser = async () => {
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
    
    render() {
        return (
            <GiftedChat
            messages={this.state.messages}
            text={this.state.text}
            onInputTextChanged={setText}
            onSend={onSend}
            user={this.state.user}
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
}
