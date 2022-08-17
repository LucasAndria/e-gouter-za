import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CommandeLieu = (props) => {
    const press = (gouter, resto, prix, lieu, reste) => {
        props.funcCommande(gouter, resto, prix, lieu, reste);
        props.showHist();
    }

    return (
        <View style={styles.container}>
            {props.item.details.map((detail, index) => (
                detail.reste !== 0 ? (
                    <TouchableOpacity style={styles.button} key={index} onPress={() => press(props.item.gouter, props.item.resto, props.item.prix, detail.lieu, detail.reste)}><Text>{detail.lieu}</Text></TouchableOpacity>)
                    : <Text style={styles.button_no} key={index}>{detail.lieu}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    button: {
        margin: 4,
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 10,
    },

    button_no: {
        margin: 4,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 10,
    }

});

export default CommandeLieu
