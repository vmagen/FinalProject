import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';

function FCSearch({ placeholder }) {
    const [search, setSearch] = useState('');

    function onChangeText(text) {
        setSearch(text);
    }

    const width1= Dimensions.get('window').width *0.9;
    return (
        <Searchbar
            placeholder={placeholder}
            value={search}
            onChangeText={onChangeText}
            inputStyle={{ textAlign: 'right' }}
            style={{ width: width1, alignSelf: 'center', margin: 10 }}
        />
    );
}

export default FCSearch;