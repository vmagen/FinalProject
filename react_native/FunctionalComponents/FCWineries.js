import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers from '../helpers/helperFunctions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function FCWineries() {
  const [wineries, setWineries] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getWineries();
  }, []);


  function getWineries() {
    fetch(helpers.getApi() + '/Winery',
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
          setWineries(result);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      style={styleSheet.scrollView}
    >
      {wineries.map(item => (
        <TouchableOpacity 
        style={{alignItems:'center',padding:10}} 
        key={item.ID}
        onPress={
          ()=>{
              navigation.navigate('Login',{
                screen:'winery',
                params:{
                  name: item.WineryName,
                  image: item.WineryImage,
                  id: item.ID
                }
              })
          }
        }>
          <Image
            source={{ uri: item.WineryImage }}
            style={styleSheet.winery} />
          <Text>{item.WineryName}</Text>
          <View>
          </View>
        </TouchableOpacity>

      ))}
    </ScrollView>
  )
}
export default FCWineries;