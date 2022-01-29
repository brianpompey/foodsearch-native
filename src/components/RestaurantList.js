import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useResults from '../hooks/useResults';


const RestaurantList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{ title }</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RestaurantList;