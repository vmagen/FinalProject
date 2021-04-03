import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers from '../helpers/helperFunctions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function FCWines(props) {
  const [wines, setWines] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const navigation = useNavigation();

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

        })
      .then(
        () => { setisLoaded(true) }
        ,
        (error) => {
          console.log("err post=", error);
        });

  }

  if (isLoaded) {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styleSheet.scrollView}>
        {wines.map(item => (
          <TouchableOpacity
            style={{ alignItems: 'center', padding: 10 }}
            key={item.wineId}
            onPress={
              () => {
                navigation.navigate('Login', {
                  screen: 'wine',
                  params: {
                    name: item.wineName,
                    image: item.wineImgPath,
                    content: item.content,
                    id: item.wineId,
                    price: item.price,
                    wineryImage:item.wineryImage,
                    areaCategoryName:item.areaCategoryName,
                    wineryName:item.wineryName
                  }
                });
              }
            }>
            <Image
              source={{ uri: item.wineImgPath }}
              style={styleSheet.wine} />
            <Text>{item.wineName}</Text>
          </TouchableOpacity>

        ))}
      </ScrollView>

    )
  }
  else {
    return (
      <ActivityIndicator size='large' color='#691A1A' />
    )
  }
}
export default FCWines;