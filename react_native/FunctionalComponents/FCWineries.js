import React, { useState, useEffect, } from 'react';
import {  View, Image,Text, ScrollView } from 'react-native';


function FCWineries() {
  const [wineries, setWineries] = useState([]);

  useEffect(() => {
    getWineries();
  }, []);

  
  function getWineries() {
    fetch('http://proj.ruppin.ac.il/bgroup15/prod/api/Winery',
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
    <View style={{ height: 120 }}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={{
          alignContent: 'center',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {wineries.map(item => (
          <View style={{ alignItems: 'center', backgroundColor: '#fff', flex: 0.2 }} key={item.ID}>
            <Image
              source={{ uri: item.WineryImage }}
              style={{ width: 60, height: 60, margin: 15 }} />
            <Text>{item.WineryName}</Text>
            <View>
            </View>
          </View>

        ))}
      </ScrollView>
    </View>
  )
}
export default FCWineries;