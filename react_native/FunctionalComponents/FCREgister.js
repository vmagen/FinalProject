import React, { isValidElement } from 'react'
import { View, SafeAreaView, Alert } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import headers from '../helpers/messages.json';
import FCHeader from './FCHeader';
import StyleSheet from '../Pages/PageStyle';
import FCFacebookLogin from './FCFacBookLogin';
import { Input, Button } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

export default function FCREgister({  }) {
  const navigation= useNavigation();
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    picture: 'http://proj.ruppin.ac.il/bgroup15/prod/finalPics/avatar.jpg',
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
      const temp = await checkEmailExists();
      if (!user.isExists) {
        console.log("isExists: ", user.isExists);
        //ADD TO DB
        AddToDB();
        //SaveToAsyncStorage
        await AsyncStorage.setItem('login', JSON.stringify(user))
          .then(() => console.log("user saved!", user));
        navigation.push('Home');
      }
      else {
        console.log("isExists: ", user.isExists);
        //Alert message user exists
        Alert.alert("User Exists go to login");
      navigation.navigate('Login', { screen: 'login' });

      }
    }
    else {
      Alert.alert("Problem !");
    }
  }

  //http://localhost:64023/api/user/email?email=asaf@gmail.com
  const checkEmailExists = async () => {
    await fetch(helpers.getApi() + '/user/email?email=' + user.email,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        if (res.ok) {
          setUser({
            ...user,
            isExists: true
          })
        }
        else {
          setUser({
            ...user,
            isExists: false
          })
        }
      })
  }

  const goToLoginPage = () => {
    navigation.navigate('Login', { screen: 'login' });
  }

  const AddToDB = async () => {
    let newUser =
    {
      "name": user.name,
      "password": user.password,
      "email": user.email,
      "isOlder": 1,
      "picture": user.picture
    };

    await fetch(helpers.getApi() + '/Winery',
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
      })
      .then(
        (result) => {
          //console.log("result = ", result);
        },
        (error) => {
          console.log("err post=", error);
        });
  }


  return (
    <SafeAreaView style={StyleSheet.container}>
      <FCHeader />
      <View >
        <Text h4 style={StyleSheet.h4Text}>{headers.createAccount}</Text>
      </View>
      <View>
        <FCFacebookLogin />
      </View>
      <Divider style={{ marginTop: 10 }} />
      <View>
        <Input
          placeholder={headers.insertName}
          rightIcon={{ type: 'font-awesome', name: 'user' }}
          inputContainerStyle={StyleSheet.input}
          onChangeText={value => { handleNameChange(value) }}
        />
        <Input
          placeholder={headers.insertEmail}
          rightIcon={{ type: 'font-awesome', name: 'envelope' }}
          inputContainerStyle={StyleSheet.input}
          onChangeText={value => { handleEmailChange(value) }}

        />
        <Input
          placeholder={headers.insertPassword}
          rightIcon={{ type: 'font-awesome', name: 'lock' }}
          inputContainerStyle={StyleSheet.input}
          onChangeText={value => { handlePasswordChange(value) }}
        />
        <Input
          placeholder={headers.insertPasswordSecond}
          rightIcon={{ type: 'font-awesome', name: 'lock' }}
          inputContainerStyle={StyleSheet.input}
          onChangeText={value => { handleConfirmPasswordChange(value) }}

        />
        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Button
            title={headers.createAccount}
            buttonStyle={StyleSheet.button}
            onPress={handleSubmitNewUser}
          />
          <Text h5>{headers.alreadyHave}</Text>
          <Button
            title={headers.login}
            buttonStyle={StyleSheet.button}
            onPress={goToLoginPage}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
