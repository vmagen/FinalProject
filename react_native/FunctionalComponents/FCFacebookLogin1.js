import React, { useState, useEffect } from 'react';
import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import headers from '../helpers/messages.json';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import appUser from '../Componenets/UserObj';

function FCFacebookLogin1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  const [user,setUser]= useState({
      name:'',
      email:'',
      picture:''
  })
  const navigation = useNavigation();
  
  async function btnFBLogin() {
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
        const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${token}`);
        const res = await response.json();
        await updateUser(res.name, res.email);
        await fetchPicture(token);
       
        await AsyncStorage.setItem('login', JSON.stringify(user));
        navigation.navigate('Home');

      } else {
        alert(`Facebook Login cancel`);
        type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async function updateUser(name, email) {
    //alert(`name:${name}, email:${email}`);
    setUser({
      ...user,
      name:name,
      email:email
    })
   
    console.log(user);
  }

  async function fetchPicture(token) {
    // POST adds a random id to the object sent
    fetch(`https://graph.facebook.com/me?fields=picture&access_token=${token}`, {
      method: 'POST',
      body: '',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json != null) {
          const res = JSON.stringify(json);
          setUser({
            ...user,
            picture: json.picture.data.url
          })
          console.log(json.picture.data.url);

        } else {
          alert(JSON.stringify(json));
        }
      });
  }


  return (
    <Button
      disabled={false}
      title={headers.continueWithFb}
      onPress={btnFBLogin}
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


export default FCFacebookLogin1;