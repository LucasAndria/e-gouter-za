import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, Image } from 'react-native';
import Ligne from './Ligne';

function Search(props) {

    return (
        <View style={styles.search_container}>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="  Ex : Frite"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(d) => props.search(d)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    search_container: {
        margin: 5,
        alignItems: 'center',
    },

    input: {
        height: 40,
        borderColor: '#7a42fa',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        width: "95%"
    },
});
export default Search
