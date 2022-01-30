import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import useResults from '../hooks/useResults';
import RestaurantsDetail from './RestaurantsDetail';


const RestaurantList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{ title }</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <RestaurantsDetail />
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