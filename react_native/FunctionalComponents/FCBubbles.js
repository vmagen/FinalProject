import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import helpers from '../helpers/helperFunctions';

export default function FCBubbles() {
  const colors = ["#9B0000", "#6D0000", "#580000", "#430000",
    "#E96245", "#F4AC90", "#F1E6CD", "#ED8A68"];

    const groups = [
      { id: 1, name: "group1",width:70 },
      { id: 2, name: "group2",width:60  },
      { id: 3, name: "group3",width:90  },
      { id: 4, name: "group skjhfkshfd",width:110  },
      { id: 5, name: "group1",width:100  },
      { id: 6, name: "group2",width:60  },
      { id: 7, name: "group3",width:90  },
      { id: 8, name: "group skjhfkshfd" ,width:120 },
      
    ];

  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  return (
    <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:50,marginLeft:20,marginRight:20}}>
      {groups.map((subject, i) => {
          return (
            <View
              key={subject.id}
              style={{
                padding:5,
                margin: helpers.ReturnRandomNumber(10),
                marginLeft: i % 2 !== 0 ? cardGap : 0,
                width: subject.width,
                height: subject.width,
                backgroundColor: helpers.ReturnRandomData(colors),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:100
              }}
            >
              <TouchableOpacity >
                  <View style={styles.View}>
                    <Text style={styles.text}>{subject.name}</Text>
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
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold', fontSize: 30, color: '#691A1A'
  }
});