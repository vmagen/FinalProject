import React, { useState } from 'react'
import { View, Text, TouchableOpacity  } from 'react-native';
import messages from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle';



export default function FCToggleButton() {
    
    return (
        <View style={styleSheet.row}>
          <TouchableOpacity  style={styleSheet.toggleBoxInActive}  >
            <Text style ={styleSheet.inButtonActive}>{messages.wineries}</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styleSheet.toggleBoxActive} >
            <Text style ={styleSheet.inButtonInActive}>{messages.wines}</Text>
          </TouchableOpacity >
        </View>
      );
}
