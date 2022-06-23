import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Settings = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')} >
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Settings</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/givn.png')} />
            </View>
            <TouchableOpacity>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>General settings</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>nareshsingh7011111@gmail.com</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('setemail')}>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>Add account</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    View1: {
        flexDirection: 'row',
        marginTop: 20
    },
    Image: {
        width: 30,
        height: 30,
    },
    Image1: {
        width: 30,
        height: 30,
        marginLeft: 190
    },
    Text1: {
        fontSize: 20,
        marginLeft: 30
    },
    View2: {
        marginTop: 30
    },
    Text2: {
        fontSize: 17
    }
})