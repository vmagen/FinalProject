import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import FCHomePage from '../FunctionalComponents/FCHomePage';
import MaterialTabPage from '../Pages/MaterialTabPage';
import styleSheet from '../Pages/PageStyle';



export default class CCActivityIndicator extends Component {


  state = {
    timePassed: false
  }

  componentDidMount() {
    let that = this;
    setTimeout(function () { that.setState({ timePassed: true }) }, 4000);
    this._unsubscribeFocus = this.props.navigation.addListener('focus', (payload) => {
      console.log('will focus CCActivity', payload);

    });
    this._unsubscribeBlur = this.props.navigation.addListener('blur', (payload) => {
      console.log('will blur CCActivity', payload)
    });
  }

  componentWillUnmount() {
    this._unsubscribeFocus();
    this._unsubscribeBlur();
    this.setState({ timePassed: true });
  }

  goToHomePage = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    if (!this.state.timePassed) {
      return (
        <View style={[styleSheet.container, {
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10
        }]}>
          <ActivityIndicator
            size='large'
            color="#691A1A" 
            style={{
              
            }} />
        </View>)
    }
    else {
      return <MaterialTabPage />
    }

  }

}
