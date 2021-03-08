import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers from '../helpers/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FCWines() {
  const [wines, setWines] = useState([]);

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
        <View style={{ alignItems: 'center', padding: 10 }} key={item.ID}>
          <Image
            source={{ uri: item.WineImg }}
            style={styleSheet.wine} />
          <Text>{item.WineName}</Text>
        </View>

      ))}
    </ScrollView>

  )
}
export default FCWines;