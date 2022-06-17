import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Starred = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/star.png')} />
            <Text style={styles.Text1}>Nothing in Starred</Text>
        </View>
    )
}

export default Starred;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image1: {
        width: 250,
        height: 250
    },
    Text1: {
        fontSize: 25
    }
})