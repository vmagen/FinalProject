import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import styleSheet from '../Pages/PageStyle';
import { Text, Input, Button } from 'react-native-elements';
import FCHeader from './FCHeader';
import headers from '../helpers/messages.json';
import helpers from '../helpers/helperFunctions';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FCLogin = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const goToHomePage = async () => {
    const res = await fetch(helpers.getApi() + 'user/email?email=' + user.email);
    const data = await res.json();
    
    if (data !== null) {
      if (data.password == user.password) {
        AsyncStorage.setItem('login', JSON.stringify(data));
        navigation.navigate('Home');
      }
      else {
        Alert.alert("incorrect password.")
      }
    }
    else {
      Alert.alert("user does not exists");
    }
  }

  const handleEmailChange = (val) => {
    if (val.trim().length >= 3 && val.includes('@')) {
      setUser({
        ...user,
        email: val,
        isValidEmail: true
      })
    }
    else {
      setUser({
        ...user,
        email: val,
        isValidEmail: false
      })
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 4) {
      setUser({
        ...user,
        password: val,
        isValidPassword: true
      })
    }
    else {
      setUser({
        ...user,
        password: val,
        isValidPassword: false
      })
    }
  }


  return (
    <SafeAreaView style={styleSheet.container}>
      <FCHeader />
      <View >
        <Text h4 style={styleSheet.h4Text}>כניסה</Text>
      </View>
      <View>
        <Input
          placeholder={headers.insertEmail}
          rightIcon={{ type: 'font-awesome', name: 'user' }}
          inputContainerStyle={StyleSheet.input}
          onChangeText={value => { handleEmailChange(value) }}
        />
        <Input
          placeholder={headers.insertPassword}
          rightIcon={{ type: 'font-awesome', name: 'lock' }}
          inputContainerStyle={StyleSheet.input}
          onChangeText={value => { handlePasswordChange(value) }}
        />
        <Button
          title={headers.login}
          buttonStyle={[styleSheet.button, {
            marginBottom: 30
          }]}
          onPress={goToHomePage}
        />
      </View>
    </SafeAreaView>
  );
};

export default FCLogin;

