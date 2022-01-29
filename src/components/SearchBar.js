import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style = {styles.inputStyle} 
                placeholder='Search'
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#DEDEDE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
    inputStyle: {
       // borderColor: 'black',
       // borderWidth: 1,
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;