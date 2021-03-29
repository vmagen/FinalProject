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
    //api/Wine/category?categoryId=2
    const test = await fetch(helpers.getApi() + '/wine/category?categoryId=' +props.categoryId);
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
            key={wine.wineId}
            bottomDivider
            onPress={
              ()=>{
                navigation.navigate('Login', {
                  screen: 'wine',
                  params: {
                    name: wine.wineName,
                    image: wine.wineImgPath,
                    id: wine.wineId
                  }
                });
              }
            }>
            <ListItem.Content>
              <ListItem.Title>{wine.wineName}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <Avatar
                source={{ uri: wine.wineImgPath }}
              />
            </ListItem.Content>
          </ListItem>
        ))
      }
    </ScrollView>
  );
};

export default FCWineList;
