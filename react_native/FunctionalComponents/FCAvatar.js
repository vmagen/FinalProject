import React, { useState, useEffect } from 'react'
import { Avatar, Text } from 'react-native-elements';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import messages from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle';

const FCAvatar = (props) => {
   const navigator = useNavigation();
   const [picture, setPicture] = useState('https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg');
   const [name, setName] = useState(messages.register);
   const [isPremium, setisPremium] = useState(true);
   const [isLogin, setisLogin] = useState(false);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      try {
         const jsonValue = await AsyncStorage.getItem('login');
         if (jsonValue !== null) {
            setisLogin(true);
            const temp = await JSON.parse(jsonValue);
            setPicture(temp.picture);
            setName(temp.name);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
         }
         else {
            return null;
         }
      } catch (e) {
         console.log(e);
      }
   }

   const navigateToPage = () => {
      if (name === messages.register) {
         navigator.navigate('Login', { screen: 'signup' });
      }
      else {
         navigator.navigate('Login', { screen: 'profile' });
      }
   }

   return (
      <TouchableOpacity onPress={navigateToPage}>
         <View style={{ alignItems: 'center', marginLeft: 50, marginTop: 40 }}>
            <Avatar
               rounded={true}
               size="medium"
               containerStyle={[styleSheet.avatar, isPremium ? styleSheet.avatarGold : styleSheet.avatarReg]}
               source={{
                  uri:
                     picture,
               }}
               icon={{ name: 'user', type: 'font-awesome' }}
            />
            <Text style={[styleSheet.textInput, { margin: 10 }]}>{name}</Text>
         </View>
      </TouchableOpacity>
   )
}
export default FCAvatar;