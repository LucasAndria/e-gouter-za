import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const MyNavigationBar = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titre_container}>
                <Text style={styles.titre}>E-Gouter-Za</Text>
            </View>
            <View style={styles.Bar_nav}>
                <TouchableOpacity style={styles.Button_nav} onPress={() => props.selectNav(1)}>
                    <Image source={require('../img/acc_i.png')} alt="" style={{ width: 20, height: 20 }} />
                    <Text style={styles.Text_nav}>
                        Menu
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button_nav} onPress={() => props.selectNav(2)}>
                    <Image source={require('../img/hist.png')} alt="" style={{ width: 20, height: 20 }} />
                    <Text style={styles.Text_nav}>
                        Historique
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button_nav} onPress={() => props.selectNav(3)}>
                    <Image source={require('../img/jour.png')} alt="" style={{ width: 20, height: 20 }} />
                    <Text style={styles.Text_nav}>
                        Journalière
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {

    },
    titre_container: {
        backgroundColor: '#0AAFF1',
        height: 100,
        width: "100%",
        alignItems: 'center',
    },
    titre: {
        marginTop: 40,
        fontSize: 30,
    },
    Bar_nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        backgroundColor: '#0AAFF1',
        marginBottom: 15,
    },
    Button_nav: {
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        height: 50,
        width: 90,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    Text_nav: {
        fontSize: 12,
        color: 'black',
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
    },
});

export default MyNavigationBar