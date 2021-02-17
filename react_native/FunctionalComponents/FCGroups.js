import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar }  from 'react-native';
import {Text} from 'react-native-elements';
import FCHeader from './FCHeader';
import FCSearch from './FCSearch';
import styleSheet from '../Pages/PageStyle';
import messages from '../helpers/messages.json';
import FCBubbles from './FCBubbles';

const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styleSheet.item}>
      <Text style={styleSheet.title}>{title}</Text>
    </View>
  );
  
  const FCGroups = () => {
    
    const renderItem = ({ item }) => (
      <Item  title={item.title} />
    );
  
    return (
      <SafeAreaView style={styleSheet.container}>
          <FCHeader/>
          <Text h2 style={styleSheet.h4Text}>{messages.groups}</Text>
          <FCSearch placeholder={messages.searchInGroups}/>
       <FCBubbles/>
      </SafeAreaView>
    );
  }
  
  export default FCGroups;