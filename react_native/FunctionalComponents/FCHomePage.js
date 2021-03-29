import React, { useEffect, useCallback, useState } from 'react'
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
import LoginFunctions from '../helpers/LoginFunctions';
import helpers from '../helpers/helperFunctions';

export default class FCHomePage extends React.Component {

  componentDidMount() {
    this._unsubscribeFocus = this.props.navigation.addListener('focus', (payload) => {
      this.setState({ stam: 'stam' });
    });
    this._unsubscribeBlur = this.props.navigation.addListener('blur', (payload) => {
    });
  }

  componentWillUnmount() {
    this._unsubscribeFocus();
    this._unsubscribeBlur();
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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
}

