import React from 'react'
import { View, Image } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import FCWineries from './FCWineries'
import FCWines from './FCWines'
import styleSheet from '../Pages/PageStyle'
import FCEvents from './FCEvents';
import FCHeader from './FCHeader'
import { ScrollView } from 'react-native-gesture-handler'
import headers from '../helpers/messages.json';

export default function FCHomePage() {
  return (
    <ScrollView>
      <View style={styleSheet.container}>
        <FCHeader />
        <Divider />
        <Text h4 style={styleSheet.h4Text}>{headers.upcomingEvents}</Text>
        <FCEvents />
        <Text h4 style={styleSheet.h4Text}>{headers.wineries}</Text>
        <FCWineries />
        <Text h4 style={styleSheet.h4Text}>{headers.wines}</Text>
        <FCWines />
        <Text h4 style={styleSheet.h4Text}>{headers.moreWines}</Text>
        <FCWines />
      </View>
    </ScrollView>
  )
}
