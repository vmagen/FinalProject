import React, { useEffect , useCallback, useState} from 'react'
import { View, Image } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import FCWineries from './FCWineries'
import FCWines from './FCWines'
import styleSheet from '../Pages/PageStyle'
import FCEventsScrollView from './FCEventsScrollView';
import FCHeader from './FCHeader'
import { ScrollView } from 'react-native-gesture-handler'
import headers from '../helpers/messages.json';
import FCSearch from './FCSearch'
  
export default function FCHomePage() {
  
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(1);
  }, [state])

  useCallback(e => {
      setState(1)
  }, []);

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <FCHeader />
        <FCSearch placeholder={headers.searchInArvino} />
        <Divider />
        <Text h4 style={styleSheet.h4Text}>{headers.upcomingEvents}</Text>
        <FCEventsScrollView />
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
