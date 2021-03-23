import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';


const FCWineryList = (props) => {
  const [wineries, setWineries] = useState([]);

  useEffect(() => {
    getWineries();
  }, []);

  const getWineries = async () => {
    const test = await fetch(helpers.getApi() + '/winery/' + props.categoryId);
    console.log(helpers.getApi() + '/winery/' + props.categoryId);
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
            key={i}
            bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{winery.WineryName}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <Avatar
                source={{ uri: winery.WineryImage }}
              />
            </ListItem.Content>
          </ListItem>
        ))
      }
    </ScrollView>
  );
};

export default FCWineryList;

