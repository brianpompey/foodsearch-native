import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const StarRating = () => {
    return (
        <View style={style.container}>
            {/* <Text>Star rating</Text> */}
            <View style={style.innerContainer} >
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star" size={24} color="black" />
                <FontAwesome name="star-half-full" size={24} color="black" />
                <FontAwesome name="star-o" size={24} color="black" />
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        height: 35,
        width: 120,
    },
    innerContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 4,
    }
});

export default StarRating;