import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Gmail = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('generalSettings')} >
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.View2}>
                    <Text style={styles.Text1}>Gmail</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Show notifications</Text>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View4}>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Show app icon badges</Text>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View3}>
                    <View>
                        <Text style={styles.Text2}>Floating notifications</Text>
                        <Text style={styles.Text3}>Allow floating notifications</Text>
                    </View>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View3}>
                    <View>
                        <Text style={styles.Text2}>Lock screen notifications</Text>
                        <Text style={styles.Text3}>Allow notifications on the Lock screen</Text>
                    </View>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Allow sound</Text>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Allow vibration</Text>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View4}>
                </View>
                <View style={styles.View5}>
                    <Text>NARESHSINGH7011111@GMAIL.COM</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Show notifications</Text>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Show notifications</Text>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Gmail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    View1: {
        marginTop: 35
    },
    Image: {
        width: 30,
        height: 30
    },
    Text1: {
        fontSize: 30,
        fontWeight: '300'
    },
    View2: {
        marginTop: 15
    },
    View3: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    Text2: {
        fontSize: 20,
        fontWeight: '600'
    },
    View4: {
        height: 0.4,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 25
    },
    Text3: {
        marginTop: 4,
        fontSize: 16
    },
    View5: {
        marginTop: 30
    }

})