import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Hometo = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <View style={styles.View2} >
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/openbox.png')} />
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/trashcan.png')} />
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/message.png')} />
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/givn.png')} />
                </View>
            </View>
            <View style={styles.View3}>
                <View style={styles.View4}>
                    <View style={styles.View5}>
                        <Text style={styles.Text2}>New </Text>
                        <View style={styles.View6}>
                            <Text style={styles.Text1}>Inbox</Text>
                        </View>
                    </View>
                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/cd.png')} />
                </View>
            </View>

            <View style={styles.View7}>
                <Image resizeMode={'cover'} style={styles.Image5} source={require('../../assets/images/ccc.png')} />
            </View>

        </View>
    )
}

export default Hometo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    View1: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image1: {
        width: 35,
        height: 35
    },
    View2: {
        flexDirection: 'row',
        marginTop: 8,
    },
    Image2: {
        width: 25,
        height: 25,
        marginLeft: 15
    },

    View3: {
        marginTop: 22,

    },
    View4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    View5: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Text1: {
        fontSize: 16,
    },
    Text2: {
        fontSize: 24
    },
    Image4: {
        width: 25,
        height: 25
    },
    View6: {
        height: 20,
        width: 55,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    View7: {
        marginTop: 30,
        flexDirection: 'row'
    },
    Image5: {
        width: 60,
        height: 60
    },
    View8: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    Text3: {
        fontSize: 17,
        fontWeight: '600'
    },
    View9: {
        marginLeft: 15,
        marginTop: 3,
        flexDirection: 'row',
    },
    Image6: {
        width: 25,
        height: 25,
        marginLeft: 15,
        marginTop: 5
    },
    View10: {
        flexDirection: 'row',
        marginLeft: 50
    }


})