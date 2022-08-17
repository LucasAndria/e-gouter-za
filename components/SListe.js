import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Ligne from './Ligne'

const SListe = (props) => {
    return (
        <FlatList
            data={props.results}
            renderItem={({ item }) => (
                <Ligne showHist={props.showHist} item={item} funcCommande={props.funcCommande} />
            )}
        />
    )
}

const styles = StyleSheet.create({

});

export default SListe
