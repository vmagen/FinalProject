import React, { Component } from 'react'
import { View, ScrollView } from "react-native";

export default class CCHomePage extends Component {
    
    state={
        wineries:[],
        apiUrl: 'http://proj.ruppin.ac.il/bgroup15/prod/api/'
    }

    componentDidMount=async()=>{
      await  fetch(this.state.apiUrl + 'Winery',
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        console.log(JSON.stringify(res));
        return JSON.stringify(res);
      })
      .then(
        (result) => {
          this.setState({
            wineries: result
          })
        },
        (error) => {
          console.log("err post=", error);
        });

    }

    render() {
        return (
            <ScrollView
                horizontal={true}
                contentContainerStyle={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop:200
                }}>
                    {this.state.wineries.map((item)=>{
                        <View>{item.WineryName}</View>
                    })}
            </ScrollView>
        )
    }
}
