import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers from '../helpers/helperFunctions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function FCWines() {
  const [wines, setWines] = useState([]);
  const navigation= useNavigation();

  useEffect(() => {
    getWines();
  }, []);

  function getWines() {
    fetch(helpers.getApi() + '/Wine',
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          setWines(result);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      style={styleSheet.scrollView}>
      {wines.map(item => (
        <TouchableOpacity
        style={{ alignItems: 'center', padding: 10 }} 
        key={item.ID} 
        onPress={
          ()=>{
            navigation.navigate('Login', {
              screen: 'wine',
              params:{
                name:item.WineName,
                image:item.WineImg,
                id: item.ID
              }
            });
          }
        }>
          <Image
            source={{ uri: item.WineImg }}
            style={styleSheet.wine} />
          <Text>{item.WineName}</Text>
        </TouchableOpacity>

      ))}
    </ScrollView>

  )
}
export default FCWines;