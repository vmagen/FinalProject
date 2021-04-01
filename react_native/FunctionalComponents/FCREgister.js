import React, { isValidElement } from 'react'
import { View, TextInput, SafeAreaView, StyleSheet, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import headers from '../helpers/messages.json';
import FCHeader from './FCHeader';
import myStyles from '../Pages/PageStyle';
import { Input, Button } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import FCFacebookLogin from './FCFacebookLogin';

export default function FCREgister({ }) {
  const navigation = useNavigation();
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    picture: 'https://proj.ruppin.ac.il/bgroup15/prod/FinalPics/ARVINO.png',
    isEighteen: false, //over18
    isValidName: false, //name validation
    isValidEmail: false, //email validation
    isValidPassword: false, //password validition
    isConfirmPassword: false, //passwords match
    isExists: false //exists in DB
  });

  const handleNameChange = (val) => {
    if (val.trim().length >= 3) {
      setUser({
        ...user,
        name: val,
        isValidName: true
      });
    } else {
      setUser({
        ...user,
        name: val,
        isValidName: false
      });
    }
  };

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

  const handleConfirmPasswordChange = (val) => {
    if (val === user.password) {
      setUser({
        ...user,
        isConfirmPassword: true
      });

    }
  };

  const handleSubmitNewUser = async () => {
    if (user.isValidName && user.isValidPassword && user.isValidEmail && user.isConfirmPassword) {
      //Check email first - not duplicate.
      const res = await fetch(helpers.getApi() + 'user/email?email=' + user.email);
      const data = await res.json();
      console.log("data", data);
      if (data === null) {
        //ADD TO DB
        AddToDB();
        //SaveToAsyncStorage
        await AsyncStorage.removeItem('login');
        await AsyncStorage.setItem('login', JSON.stringify(user))
          .then(() => console.log("user saved!", user));
        navigation.push('Login', { screen: 'questionere' });

      } //user exists
      else {
        //Alert message user exists
        Alert.alert("User Exists go to login");
        navigation.navigate('Login', { screen: 'login' });
      }
    }
    else {
      Alert.alert("Problem !");
    }
  }

  const goToLoginPage = () => {
   
    navigation.navigate("login");
  }

  const AddToDB = async () => {
    let newUser =
    {
      "Name": user.name,
      "password": user.password,
      "email": user.email,
      "isOlder": 1,
      "picture": user.picture,
      "typeId":3
    };

    await fetch(helpers.getApi() + '/User',
      {
        method: 'POST',
        body: JSON.stringify(newUser),
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    textInput: {
      height: 36,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 20,
      textAlign: 'right'
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.inner}>
          <Text h4 style={myStyles.h4Text}>{headers.registeration}</Text>
          <FCFacebookLogin />
          <Divider />
          <TextInput
            placeholder={headers.insertName}
            rightIcon={{ type: 'font-awesome', name: 'user' }}
            style={styles.textInput}
            onChangeText={value => { handleNameChange(value) }} />
          <TextInput
            placeholder={headers.insertEmail}
            rightIcon={{ type: 'font-awesome', name: 'envelope' }}
            style={styles.textInput}
            onChangeText={value => { handleEmailChange(value) }} />
          <TextInput
            placeholder={headers.insertPassword}
            rightIcon={{ type: 'font-awesome', name: 'lock' }}
            style={styles.textInput}
            onChangeText={value => { handlePasswordChange(value) }} />
          <TextInput
            placeholder={headers.insertPasswordSecond}
            rightIcon={{ type: 'font-awesome', name: 'lock' }}
            style={styles.textInput}
            onChangeText={value => { handleConfirmPasswordChange(value) }} />
          <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Button
              title={headers.createAccount}
              buttonStyle={myStyles.button}
              onPress={handleSubmitNewUser}
            />
            <Text h5>{headers.alreadyHave}</Text>
            <Button
              title={headers.login}
              buttonStyle={myStyles.button}
              onPress={goToLoginPage}
            />
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )

}
