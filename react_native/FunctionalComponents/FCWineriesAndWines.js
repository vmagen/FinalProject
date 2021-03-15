import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import FCHeader from './FCHeader'
import styleSheet from '../Pages/PageStyle';
import FCToggleButton from './FCToggleButton';
import FCWineCategories from './FCWineCategories';
import FCSearch from './FCSearch';
import messages from '../helpers/messages.json';
import FCWineriesCategories from './FCWineriesCategories';
import { ScrollView } from 'react-native-gesture-handler';

export default function FCWineriesAndWines() {
  return (
    <ScrollView style={styleSheet.container}>
      <FCHeader />
      <FCToggleButton />
      <FCSearch placeholder={messages.searchInWines}/>
      <FCWineCategories />
    </ScrollView>
  )
}
