import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Help = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('skip')}>
                    <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Help</Text>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.Text2}>Add another email</Text>
                    <Text style={styles.Text3}>account to the Gmail app</Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text4}>Read and send emails from Yahoo, Hotmail</Text>
                    <Text style={styles.Text4}>and other email addresses using the Gmail</Text>
                    <Text style={styles.Text4}>app, instead of forwarding your emails.</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text5}>Want to get more out of Google apps at</Text>
                    <View style={styles.View4}>
                        <Text style={styles.Text6}>work or school?</Text>
                        <Text style={styles.Text7}> Sign up for a Google</Text>
                    </View>
                    <Text style={styles.Text8}>Workspace trial at no charge.</Text>
                </View>
                <View style={styles.View5}>
                    <Text style={styles.Text9}>With your non-Google address, you can use</Text>
                    <Text style={styles.Text10}>many of the same Gmail features as Google</Text>
                    <Text style={styles.Text10}>Accounts:</Text>
                </View>
                <View>
                    <Image resizeMode={'cover'} style={styles.Imagethree} source={require('../../assets/images/givn.png')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    View1: {
        width: 390,
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    Imageone: {
        marginTop: 55,
        marginLeft: 20,
        width: 30,
        height: 30
    },
    Text1: {
        marginTop: 55,
        fontSize: 25,
        marginLeft: 123
    },
    Imagetow: {
        marginTop: 60,
        marginLeft: 125
    },
    Text2: {
        fontSize: 32,
        marginTop: 20,
        marginLeft: 20
    },
    Text3: {
        fontSize: 32,
        marginLeft: 20
    },
    Text4: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 5
    },
    View2: {
        marginTop: 15
    },
    View3: {
        width: 350,
        height: 100,
        backgroundColor: '#ccffdd',
        marginLeft: 20,
        borderRadius: 10,
        marginTop: 18
    },
    Text5: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 15
    },
    View4: {
        flexDirection: 'row'
    },
    Text6: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 15
    },
    Text7: {
        marginTop: 5,
        marginLeft: 5,
        fontSize: 15,
        color: '#1a75ff'
    },
    Text8: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 15,
        color: '#1a75ff'
    },
    View5: {
        marginTop: 40
    },
    Text9: {
        marginLeft: 20,
        fontSize: 18
    },
    Text10: {
        marginLeft: 20,
        fontSize: 18,
        marginTop: 5
    }
})