import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers from '../helpers/helperFunctions';

function FCWineries() {
  const [wineries, setWineries] = useState([]);

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
        <View style={{alignItems:'center',padding:10}} key={item.ID}>
          <Image
            source={{ uri: item.WineryImage }}
            style={styleSheet.winery} />
          <Text>{item.WineryName}</Text>
          <View>
          </View>
        </View>

      ))}
    </ScrollView>
  )
}
export default FCWineries;