import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const StarRating = () => {
    return (
        <View style={style.container}>
            {/* <Text>Star rating</Text> */}
            <View style={style.innerContainer} >
                <FontAwesome name="star" size={34} color="black" />
                <FontAwesome name="star" size={34} color="black" />
                <FontAwesome name="star" size={34} color="black" />
                <FontAwesome name="star-half-full" size={34} color="black" />
                <FontAwesome name="star-o" size={34} color="black" />
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        height: 60,
        width: 160,
    },
    innerContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    }
});

export default StarRating;