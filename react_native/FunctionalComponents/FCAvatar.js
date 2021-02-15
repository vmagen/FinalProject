import React, { useState } from 'react'
import { Avatar, Text } from 'react-native-elements';
import { View } from 'react-native';

export default function FCAvatar() {
   const [data, setData]= useState([]);

   return (
      <View style={{ alignItems: 'center' ,marginLeft:40, marginTop:20}}>
         <Avatar
            rounded={true}
            size="medium"
            source={{
               uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            icon={{ name: 'user', type: 'font-awesome' }}
         />
         <Text>הירשם</Text>
      </View>
   )
}
