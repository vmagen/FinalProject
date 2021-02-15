import React, { useState, useEffect, } from 'react';
import {  View, Image,Text,  ActivityIndicator, ScrollView } from 'react-native';


function FCWines() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    getWines();
  }, []);

  function getWines() {
    fetch('http://proj.ruppin.ac.il/bgroup15/prod/api/Wine',
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        <ActivityIndicator size="large" />
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
    <View style={{ height: 160, marginTop: 20 }}>
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      style={{
        alignContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
      }}>
      {wines.map(item => (
        <View style={{ alignItems: 'center', backgroundColor: '#fff', flex: 0.2 }} key={item.ID}>
          <Image
            source={{ uri: item.WineImg }}
            style={{ width: 80, height: 80, margin: 15 }} />
          <Text>{item.WineName}</Text>
          <View>
          </View>
        </View>

      ))}
    </ScrollView>

  </View>
  )
}
export default FCWines;