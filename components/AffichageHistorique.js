import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

const AffichageHistorique = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container_hist}>
                {props.total !== 0 ? (
                    <Text style={styles.text_Total}>Total : {props.total} Ar</Text>) :
                    (<Image source={require("../img/no-sale.webp")} alt="" style={{ width: 150, height: 150, marginLeft: 30 }} />)}
                {props.hists.map((hist, index) => (
                    hist.produit !== "" && (
                        <Text style={styles.text} key={index}>{hist.resto + " à " + hist.lieu + " : " + hist.produit + " le " + hist.date}</Text>
                    )
                ))}

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 50,
    },
    container_hist: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        marginBottom: 10,
        width: "100%",
        height: 80,
        padding: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0444BF',
    },
    text_Total: {
        width: "80%",
        padding: 20,
        marginBottom: 30,
        marginTop: -50,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0444BF',
    },
    text_Total_err: {
        width: "100%",
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'red',
    }
});

export default AffichageHistorique
