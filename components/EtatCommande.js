import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function EtatCommande(props) {

    return (

        props.show && (
            <View>
                <Text>
                    Votre Dernière Commande : {props.gouter} chez {props.resto} à {props.lieu}
                </Text>
                <Text>
                    Etat : {props.etat === "Livrer" ? props.etat : props.etat + " sera livrer apres 3 secondes"}
                </Text>
                <TouchableOpacity style={styles.Button} onPress={() => props.hideHist()}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>)
    )
}

const styles = StyleSheet.create({
    Button: {
        padding: 5,
        backgroundColor: '#0444BF',
        borderRadius: 10,
        width: 30,
        marginLeft: 5,
    }
});

export default EtatCommande
