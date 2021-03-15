import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';


const FCWineList = (props) => {
  const [wines, setWines] = useState([]);

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
    <ScrollView style={styles.container}>
      <Icon
        onPress={props.toggleShow}
        reverse
        name='chevron-back-outline'
        type='ionicon'
        color='#691A1A'
      />
      {
        wines.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{ uri: l.WineImg }} />
            <ListItem.Content>
              <ListItem.Title>{l.WineName}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </ScrollView>
  );
};

export default FCWineList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    height: 250,
    alignSelf: 'center',
  },
});
