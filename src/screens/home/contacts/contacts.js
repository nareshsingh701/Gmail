import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Contacts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <Text style={styles.Text1}>Search contacts</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/givn.png')} />
                <Image resizeMode={'cover'} style={styles.Image2} source={require('../../../assets/images/rama.png')} />
            </View>
            <View style={styles.View2}>
                <Image resizeMode={'cover'} style={styles.Image} source={require('../../../assets/images/contact.png')} />
                <Text style={styles.Text2}>Customised view.All accoounts .6contacts</Text>
            </View>
            <View style={styles.View3}>
            </View>

        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    View1: {
        width: '100%',
        height: 55,
        backgroundColor: '#e5e5e5',
        marginTop: 10,
        borderRadius: 35,
        flexDirection: 'row'
    },
    Text1: {
        fontSize: 20,
        marginLeft: 30,
        marginTop: 13
    },
    Image1: {
        marginLeft: 60,
        marginTop: 13,
        width: 30,
        height: 30
    },
    Image2: {
        marginTop: 3,
        marginLeft: 20
    },
    View2: {
        flexDirection: "row",
        marginTop: 20
    },
    Text2: {
        marginTop: 3,
        marginLeft: 15
    },
    View3: {
        borderWidth: 0.4,
        width: '100%',
        marginTop: 10,
    },
})