import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

function Search(props) {
    return (
        <View style={styles.liste_container}>
            <View style={styles.liste1}>
                <TouchableOpacity onPress={() => props.selectResto('GP')}>
                    <Image source={require("../img/gastroPizza.jpeg")} alt="" style={{ borderRadius: 100, width: 150, height: 150 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.selectResto('EP')} >
                    <Image source={require("../img/extraPizza.jpeg")} alt="" style={{ borderRadius: 100, width: 150, height: 150, marginLeft: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.liste2}>
                <TouchableOpacity onPress={() => props.selectResto('HK')}>
                    <Image source={require("../img/HK.jpeg")} alt="" style={{ borderRadius: 100, width: 150, height: 150 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.selectResto('KFC')}>
                    <Image source={require("../img/KFC_logo.svg.png")} alt="" style={{ borderRadius: 100, width: 150, height: 150, marginLeft: 30 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    liste_container: {
        margin: 5,

    },

    liste1: {
        marginTop: 10,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },

    liste2: {
        marginTop: 15,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
    },
});

export default Search
