import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import FCHeader from './FCHeader'
import styleSheet from '../Pages/PageStyle';
import FCToggleButton from './FCToggleButton';
import FCWineCategories from './FCWineCategories';
import FCSearch from './FCSearch';
import messages from '../helpers/messages.json';
import FCWineriesCategories from './FCWineriesCategories';

export default function FCWineriesAndWines() {
  return (
    <SafeAreaView style={styleSheet.container}>
      <FCHeader />
      <FCToggleButton />
      <FCSearch placeholder={messages.searchInWines}/>
      <FCWineCategories />
    </SafeAreaView>
  )
}
