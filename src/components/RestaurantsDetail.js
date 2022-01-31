import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
//import StarRating from '../components/StarRating';
import { FontAwesome } from '@expo/vector-icons';


const RestaurantsDetail = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
            <View style={styles.starContainer}>
                {/* <Text>Star rating</Text> */}
                <View style={styles.innerContainer} >
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star-half-full" size={24} color="black" />
                    <FontAwesome name="star-o" size={24} color="black" />
                </View>
            </View>
            {/* <StarRating /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    starContainer: {
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

export default RestaurantsDetail;