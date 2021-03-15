import React, { useState, useEffect } from 'react'
import { SafeAreaView, ActivityIndicator, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import FCHeader from './FCHeader';
import FCSearch from './FCSearch';
import styleSheet from '../Pages/PageStyle';
import messages from '../helpers/messages.json';
import FCBubbles from './FCBubbles';
import helpers from '../helpers/helperFunctions';
import { ScrollView } from 'react-native-gesture-handler';


function FCGroups() {
  const [groups, setGroups] = useState([]);
  const [loaded, setloaded] = useState(false);
  
  useEffect(() => {
    setloaded(false);
    getGroups();
  }, [])

  function getGroups() {
    fetch(helpers.getApi() + 'groups',
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
          setGroups(result);
          setloaded(true);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  return (
    <ScrollView style={styleSheet.container}>
      <FCHeader />
      <Text h2 style={styleSheet.h4Text}>{messages.groups}</Text>
      <FCSearch placeholder={messages.searchInGroups} />
      {loaded ? <FCBubbles myGroups={groups} /> : <ActivityIndicator size='large'/>}
    </ScrollView>
  );
}

export default FCGroups;