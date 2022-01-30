import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
//import useResults from '../hooks/useResults';
import RestaurantsDetail from './RestaurantsDetail';
import { withNavigation } from 'react-navigation';


const RestaurantList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}>{ title }</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')} >
                            <RestaurantsDetail  result ={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10,
    }
});

export default withNavigation(RestaurantList);