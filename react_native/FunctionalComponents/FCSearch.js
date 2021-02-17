import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

function FCSearch({placeholder}) {
    const [search, setSearch] = useState('');

    function onChangeText(text)
    {
        setSearch(text);
    }

    return (
        <Searchbar 
            placeholder={placeholder}
            value={search}
            onChangeText={onChangeText}
            inputStyle={{textAlign:'right'}}
            style={{width:340, alignSelf:'center',margin:10}}
        />
    );
}

export default FCSearch;