import React, { useState, useEffect, } from 'react';
import {  View, Image,  StyleSheet, SafeAreaView } from 'react-native';
import logo from './assets/logoArvino.png';
import FCWineries from './FunctionalComponents/FCWineries';
import FCWines from './FunctionalComponents/FCWines';

function App() {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#fff'
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <View>
          <Image
            source={logo}
            style={{ width: 150, height: 80, margin: 20 }}
          />
        </View>
        <FCWineries/>
        <FCWines/>
      </View>
    </SafeAreaView>
  );
}


export default App;