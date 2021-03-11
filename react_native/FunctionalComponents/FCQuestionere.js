import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Dimensions, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import messages from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle'
import FCHeader from './FCHeader';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';



export default function FCQuestionere() {
  const [wineries, setWineries] = useState(null);
  const [wines, setWines] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation= useNavigation();

  useEffect(() => {
    getWines();
    getWineries();
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
  };

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

  };

  const goToHomePage=()=>{
    navigation.navigate('Home');
  }

  const question1 = () => {
    return helpers.ReturnRandomData(wines);
  }

  const question2 = () => {

  }

  const question3 = () => {

  }

  const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


  const renderItem = ({ item, index }) => {
    console.log("ITEM: ", item);

    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#691A1A',
        borderWidth: 2,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>

        <View style={{ alignItems: 'center', padding: 10 }} >
          <Image
            source={{ uri: item.WineImg }}
            style={styleSheet.wine} />
          <Text>{item.WineName}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styleSheet.container}>
      <FCHeader />
      <View>
        <Text h4 style={styleSheet.h4Text}>{messages.buildYourProfile}</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'right',
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
        <Carousel
          layout={"tinder"}
          data={wines}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          slideStyle={{ width: viewportWidth }}
          renderItem={renderItem}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          onSnapToItem={index => setActiveIndex({ activeIndex: index })} />
      </View>

      <Button
            title={messages.skip}
            buttonStyle={[styleSheet.button, {
              marginBottom: 30
          }]}
            onPress={goToHomePage}
          />
    </SafeAreaView>
  )
}
