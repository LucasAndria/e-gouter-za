import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import CommandeLieu from './CommandeLieu';

function Ligne(props) {

    const [showLieu, setShowLieu] = useState(false);

    const tooggleLieu = () => {
        setShowLieu(!showLieu)
    }

    return (
        props.item.gouter !== "" && (
            <View style={styles.container}>
                <TouchableOpacity style={styles.ButtonList} onPress={() => tooggleLieu()}>
                    <View style={styles.produits_container}>
                        <Image source={props.item.img} alt="" style={{ marginLeft: -40, width: 90, height: 80 }} />
                        <Text style={styles.ButtonListTitre}> {props.item.gouter} </Text>
                    </View>
                    <View style={styles.details_container}>
                        <Text style={styles.ButtonListPrix}> {props.item.prix} Ar</Text>
                        <Text style={styles.ButtonListResto}> {props.item.resto} </Text>
                    </View>

                </TouchableOpacity>
                {showLieu && <CommandeLieu item={props.item} showHist={props.showHist} funcCommande={props.funcCommande} tooggleLieu={tooggleLieu} />}
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    ButtonList: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#0584F2',
        padding: 10,
        height: 130,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'skyblue',
        width: "98%"
    },

    details_container: {
        flex: 1,
    },

    produits_container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },

    ButtonListPrix: {
        color: 'white',
    },

    ButtonListResto: {
        color: 'white',
    },

    ButtonListTitre: {
        flex: 2,
        color: 'white',
        marginLeft: -40,
    },
});

export default Ligne
