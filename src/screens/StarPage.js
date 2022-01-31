import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import StarRating from "../components/StarRating";

const StarPage = () => {
    return(
        <View>
            <StarRating />
            <StarRating />
            <StarRating />
        </View>
    )
};


const styles = StyleSheet.create({});

export default StarPage;