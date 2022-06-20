import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const HelpAndFeedback = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Help</Text>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.View2}>
                <Image resizeMode={'cover'} style={styles.Image2} source={require('../../../assets/images/sss.png')} />
                <Text style={styles.Text2}>Search help</Text>
            </View>
            <View style={styles.View3}>
                <Text style={styles.Text3}>Popular help resources</Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/mail/answer/41078?hl=en-GB')}>
                <View style={styles.View4}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/passwerd.png')} />
                    <Text style={styles.Text4}>Change or reset your password</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/android/answer/7664951?hl=en-GB')}>
                <View style={styles.View4}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/passwerd.png')} />
                    <Text style={styles.Text4}>Add or remove an account on Android</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/mail/answer/7401?hl=en-GB')}>
                <View style={styles.View4}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/passwerd.png')} />
                    <Text style={styles.Text4}>Delete or recover deleted Gmail messages</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/mail/answer/32046?hl=en-GB')}>
                <View style={styles.View4}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/passwerd.png')} />
                    <Text style={styles.Text4}>Delete your Google account</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/mail/workflow/9317561?hl=en-GB')}>
                <View style={styles.View4}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/color.png')} />
                    <Text style={styles.Text4}>Gmail message recovery tool</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/mail/topic/6029993')}>
                <View style={styles.View5}>
                    <Text style={styles.Text5}>Browse all articles</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.View7}>
            </View>
            <View style={styles.View8}>
                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/nimuda.png')} />
                <Text style={styles.Text6}>Send feedback</Text>
            </View>
            <View style={styles.View9}>
            </View>
        </View>
    )
}

export default HelpAndFeedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    View1: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image1: {
        height: 30
    },
    Text1: {
        fontSize: 20,
    },
    View2: {
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 0.4,
        borderRadius: 10,
        marginTop: 25,
        flexDirection: 'row'
    },
    Image2: {
        marginTop: 10,
        marginLeft: 20
    },
    Text2: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },
    View3: {
        marginTop: 20
    },
    Text3: {
        fontSize: 18
    },
    Image3: {
        height: 30,
        width: 30
    },
    View4: {
        flexDirection: 'row',
        marginTop: 20,
    },
    Text4: {
        fontSize: 15,
        marginLeft: 16,
        marginTop: 8
    },
    View5: {
        marginLeft: 46,
        marginTop: 22
    },
    Text5: {
        fontSize: 15,
        color: 'blue'
    },
    View7: {
        borderWidth: 0.5,
        width: '100%',
        marginTop: 25,
    },
    View8: {
        flexDirection: 'row',
        marginTop: 10
    },
    View9: {
        borderWidth: 0.5,
        width: '100%',
        marginTop: 10,
    },
    Text6: {
        marginLeft: 16,
        fontSize: 15,
        color: 'blue',
        marginTop: 5
    }

})