import React, { useEffect, useState } from 'react';
import {
  ScrollView,
} from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import styleSheet from '../Pages/PageStyle';
import { useNavigation } from '@react-navigation/native';

const FCWineList = (props) => {
  const [wines, setWines] = useState([]);
  const navigation= useNavigation();

  useEffect(() => {
    getWines();
  }, []);

  const getWines = async () => {
    const test = await fetch(helpers.getApi() + '/wine/' +props.categoryId);
    console.log(helpers.getApi() + '/wine/' +props.categoryId);
    const temp = await test.json();
    setWines(temp);
  };

  return (
    <ScrollView style={styleSheet.container}>
      <Icon
        onPress={props.toggleShow}
        reverse
        name='chevron-back-outline'
        type='ionicon'
        color='#691A1A'
      />
      {
        wines.map((wine, i) => (
          <ListItem
            style={{display:'flex', justifyContent: 'flex-end' }}
            key={wine.ID}
            bottomDivider
            onPress={
              ()=>{
                navigation.navigate('Login', {
                  screen: 'wine',
                  params: {
                    name: wine.WineName,
                    image: wine.WineImg,
                    id: wine.ID
                  }
                });
              }
            }>
            <ListItem.Content>
              <ListItem.Title>{wine.WineName}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <Avatar
                source={{ uri: wine.WineImg }}
              />
            </ListItem.Content>
          </ListItem>
        ))
      }
    </ScrollView>
  );
};

export default FCWineList;
