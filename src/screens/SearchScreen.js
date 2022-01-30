import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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

    //console.log(filterResultsByPrice('$$') === [])
    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList results={filterResultsByPrice('$')} title="Cost Effective" />
                <RestaurantList results={filterResultsByPrice('$$')} title="A Bit Pricier" />
                <RestaurantList results={filterResultsByPrice('$$$')} title="Big Spender" />
                {/* <RestaurantList results={filterResultsByPrice('$$$$')} title="You Rich Rich" />  */}
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;