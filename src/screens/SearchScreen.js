import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>
                We have found {results.length} results
            </Text>
            <RestaurantList title="Cost Effective" />
            <RestaurantList title="A Bit Pricier" />
            <RestaurantList title="Big Spender" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;