import React, { useState } from 'react'
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
  const [isWine, setisWine] = useState(true)

  const toggleButtons = () => {
    setisWine(!isWine);
  }

  return (
    <View style={styleSheet.container} >
      <FCHeader />
      <FCToggleButton isWine={isWine} toggleButtons={toggleButtons} />
      <FCSearch placeholder={isWine ? messages.searchInWines : messages.searchInWineries} />
      {isWine ? <FCWineCategories /> : <FCWineriesCategories />}
    </View>
  )
}
