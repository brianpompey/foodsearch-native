import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    

    const filterResultsByPrice = (price) => {
        /// price === '$' || '$$ || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    
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
            <RestaurantList results={filterResultsByPrice('$')} title="Cost Effective" />
            <RestaurantList results={filterResultsByPrice('$$')} title="A Bit Pricier" />
            <RestaurantList results={filterResultsByPrice('$$$')} title="Big Spender" />
            {/* <RestaurantList results={filterResultsByPrice('$$$$')} title="You Rich Rich" />  */}
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;