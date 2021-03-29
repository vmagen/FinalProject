import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import { useNavigation } from '@react-navigation/native';


const FCWineryList = (props) => {
  const [wineries, setWineries] = useState([]);
  const navigation= useNavigation();

  useEffect(() => {
    getWineries();
  }, []);

  const getWineries = async () => {
    //api/Winery/area?areaID=2
    const test = await fetch(helpers.getApi() + '/winery/area?areaID=' + props.categoryId);
    console.log(helpers.getApi() + '/winery/area?areaID=' + props.categoryId);
    const temp = await test.json();
    setWineries(temp);
  };

  return (
    <ScrollView>
      <Icon
        onPress={props.toggleShow}
        reverse
        name='chevron-back-outline'
        type='ionicon'
        color='#691A1A'
      />
      {
        wineries.map((winery, i) => (
          <ListItem
            style={{ justifyContent: 'flex-end' }}
            key={winery.ID}
            bottomDivider
            onPress={
              ()=>{
                navigation.navigate('Login', {
                  screen: 'winery',
                  params: {
                    name: winery.wineryName,
                    image: winery.IconImgPath,
                    id: winery.wineryId
                  }
                });
              }
            }>
            <ListItem.Content>
              <ListItem.Title>{winery.wineryName}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <Avatar
                source={{ uri: winery.IconImgPath }}
              />
            </ListItem.Content>
          </ListItem>
        ))
      }
    </ScrollView>
  );
};

export default FCWineryList;

