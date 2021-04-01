import React, { useState, useEffect } from 'react'
import { Avatar, Text } from 'react-native-elements';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import messages from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle';

const FCAvatar = (props) => {
   const navigation = useNavigation();
   const [picture, setPicture] = useState('https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg');
   const [name, setName] = useState(messages.register);
   const [isPremium, setisPremium] = useState(true);
   const [isLogin, setisLogin] = useState(false);

   useEffect(() => {
     navigation.addListener(()=>{
         setName(name);
     });
      if(!isLogin){ getData()}
   }, [name]);

   const getData = async () => {
      try {
         const jsonValue = await AsyncStorage.getItem('login');
         if (jsonValue !== null) {
            setisLogin(true);
            const temp = await JSON.parse(jsonValue);
            setPicture(temp.picture);
            setName(temp.name);
            setisLogin(true);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
         }
         else {
            console.log("not logged in!");
            console.log(name);
            return null;
         }
      } catch (e) {
         console.log(e);
      }
   }

   const navigateToPage = () => {
      if (name === messages.register) {
         navigation.navigate('Login', { screen: 'signup' });
      }
      else {
         navigation.navigate('Login', { screen: 'profile' });
      }
   }

   return (
      <TouchableOpacity onPress={navigateToPage}>
         <View style={{ alignItems: 'center', marginLeft: 50, marginTop: 20 }}>
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
            <Text style={[styleSheet.textInput]}>{name}</Text>
         </View>
      </TouchableOpacity>
   )
}
export default FCAvatar;