import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = ({ navigation }) => {
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
            <Button 
                onPress={() => navigation.navigate('Star')}
                title="Go to Star Page"
            />
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <RestaurantList 
                    results={filterResultsByPrice('$$')} 
                    title="A Bit Pricier" 
                />
                <RestaurantList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                />
                {/* <RestaurantList results={filterResultsByPrice('$$$$')} title="You Rich Rich" />  */}
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;