import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Drafts = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/Drafts.png')} />
            <Text style={styles.Text1}>Nothing in drafts</Text>
        </View>
    )
}

export default Drafts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image1: {
        width: 150,
        height: 150,
    },
    Text1: {
        fontSize: 30
    }
})