import React from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import messages from '../helpers/messages.json';


export default function FCWineriesCategories() {
  const subjects = [
    { id: 1, name: messages.galil, img: require('../assets/galil.jpg') },
    { id: 2, name: messages.golan, img: require('../assets/Golan1.jpg') },
    { id: 3, name: messages.carmel, img: require('../assets/carmel.jpg') },
    { id: 4, name: messages.shomron, img: require('../assets/shomron1.jpg') },
    { id: 5, name: messages.negev, img: require('../assets/negev.jpg') },
    { id: 6, name: messages.yehuda, img: require('../assets/yehuda1.jpg') },
  ];

  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        {subjects.map((subject, i) => {
          return (
            <View
              key={subject.id}
              style={{
                marginTop: cardGap,
                marginLeft: i % 2 !== 0 ? cardGap : 0,
                width: cardWidth,
                height: 180,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:16
              }}
            >
              <TouchableOpacity >
                <ImageBackground source={subject.img} style={{ opacity: 0.6, width: cardWidth, height: 180,borderRadius:16}}>
                  <View style={styles.View}>
                    <Text style={styles.text}>{subject.name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
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