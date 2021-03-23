import React, { useState, useEffect } from 'react';
import * as Facebook from 'expo-facebook';
import { Button, Icon } from 'react-native-elements';
import headers from '../helpers/messages.json';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import UserInfo from '../Componenets/UserObj';

function FCFacebookLogin() {
  const navigation = useNavigation();

  const getDetailsFromFB = async () => {
    const data = await fetchdata();
    console.log(data);
    var info = new UserInfo(data.email, data.name, data.picture.data.url);
    AsyncStorage.setItem('login', JSON.stringify(info));
    console.log("INFO", info);
    navigation.navigate('Home');
  }

  async function fetchdata() {
    try {
      await Facebook.initializeAsync({
        options:
        {
          appId: '174194160927637',
          appName: 'Arvino'
        }
      });
      const { type, token, expires, permissions, declinedPermissions, }
        = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile', 'email'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${token}`);
        const userInfo = await response.json();
        //add async and db
        return userInfo;
      } else {
        alert(`Facebook Login cancel`);
        type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }



  return (
    <Button
      disabled={false}
      title={headers.continueWithFb}
      onPress={getDetailsFromFB}
      style={{ width: 250, alignSelf: 'center' }}
      icon={
        <Ionicons
          name="logo-facebook"
          size={26}
          color="#3b5998"
        />
      }
    />
  );
}


export default FCFacebookLogin;

