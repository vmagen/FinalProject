import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Tooltip } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import * as Animatable from 'react-native-animatable';

export default function FCBubbles(props) {

  const colors = ["#9B0000", "#6D0000", "#580000", "#430000",
    "#E96245", "#F4AC90", "#F1E6CD", "#ED8A68"];

  const sizes = [60, 80, 100, 120, 70, 80, 90, 50];


  const cardGap = 16;
  //const cardGap = (Dimensions.get('window').width - cardGap * 3) / 2;

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20, marginBottom: 50, marginLeft: 20, marginRight: 20 }}>
      {props.myGroups.map((subject, i) => {
        const circleWidth = helpers.ReturnRandomData(sizes);
        return (
          <TouchableOpacity
            key={i}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }} >
            <Animatable.View
              animation="">
              <View>
              </View>
              <Image
                source={{ uri: subject.picture }}
                style={{
                  padding: 10,
                  margin: helpers.ReturnRandomNumber(cardGap),
                  marginLeft: i % 2 !== 0 ? cardGap : 0,
                  width: circleWidth,
                  height: circleWidth,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  borderColor: helpers.ReturnRandomData(colors),
                  borderWidth: 4
                }}
              ></Image>
              <View style={{
                position: 'absolute',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              </View>
            </Animatable.View>
          </TouchableOpacity>
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