import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';

function FCSearch({ placeholder }) {
    const [search, setSearch] = useState('');

    function onChangeText(text) {
        setSearch(text);
    }

    const Swidth= Dimensions.get('window').width *0.9;
    return (
        <Searchbar
            placeholder={placeholder}
            value={search}
            onChangeText={onChangeText}
            inputStyle={{ textAlign: 'right' }}
            style={{ width: Swidth, alignSelf: 'center', margin: 5 }}
        />
    );
}

export default FCSearch;