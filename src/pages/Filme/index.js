import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {View, Text, Image, StyleSheet, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Filme extends Component {
    render() {
        return(
            <View>
                <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
                <TouchableOpacity onPress={() => alert(this.props.data.nome)}>
                <Image style={styles.capaFilme} source={{uri: this.props.data.foto}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeFilme:{
        Color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    capaFilme: {
        width: 200,
        height: 250,
        borderRadius: 30,
        alignSelf: 'center'
    }
})