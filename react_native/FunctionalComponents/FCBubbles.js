import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import helpers from '../helpers/helperFunctions';

export default function FCBubbles() {
  const colors = ["#9B0000", "#6D0000", "#580000", "#430000",
    "#E96245", "#F4AC90", "#F1E6CD", "#ED8A68"];

  const sizes=[60,80,100,120,70,80,90,50];

  const groups = [
    { id: 1, name: "group1" },
    { id: 2, name: "group2" },
    { id: 3, name: "group3" },
    { id: 4, name: "group skjhfkshfd" },
    { id: 5, name: "group1" },
    { id: 6, name: "group2" },
    { id: 7, name: "group3" },
    { id: 8, name: "group skjhfkshfd" }

  ];

  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap',marginTop:20, marginBottom: 50, marginLeft: 20, marginRight: 20 }}>
      {groups.map((subject, i) => {
         const circleWidth = helpers.ReturnRandomData(sizes);
        return (
          <View
            key={subject.id}
            style={{
              padding: 5,
              margin: helpers.ReturnRandomNumber(10),
              marginLeft: i % 2 !== 0 ? cardGap : 0,
              width:circleWidth,
              height:circleWidth,
              backgroundColor: helpers.ReturnRandomData(colors),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100
            }}
          >
            <TouchableOpacity >
              <View style={{
                position: 'absolute',
                alignContent:'center',
                justifyContent:'center',
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: circleWidth / 10,
                  color: 'white',
                  textAlign: 'center',

                }}>{subject.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  View: {
    position: 'absolute',
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold', fontSize: 30, color: '#691A1A'
  }
});