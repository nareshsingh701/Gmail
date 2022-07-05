import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const AnotherAccount = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <View style={styles.View5}>
                        <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/back.png')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                    <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/google.png')} />
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text1}>Set up email</Text>
                </View>
                <View style={styles.View}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View1}>
                        <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/good.png')} />
                        <Text style={styles.Text2}>Google</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View2}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View1}>
                        <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/Outiook.png')} />
                        <Text style={styles.Text2}>Outlook, Hotmail and Live</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View2}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View1}>
                        <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/mail.png')} />
                        <Text style={styles.Text2}>Yahoo</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View2}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View1}>
                        <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/exchange.png')} />
                        <Text style={styles.Text2}>Exchange and Office 365</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View2}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View1}>
                        <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/mails.png')} />
                        <Text style={styles.Text2}>Other</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View2}>
                </View>
            </View>
        </ScrollView>
    )
}

export default AnotherAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    View4: {
        marginTop: 25
    },
    Text1: {
        fontSize: 25,
    },
    View3: {
        marginTop: 30
    },
    View: {
        width: '100%',
        borderBottomWidth: 1,
        marginTop: 30,
    },
    Imagetow: {
        width: 35,
        height: 35,
    },
    View1: {
        flexDirection: 'row',
        marginTop: 15
    },
    View2: {
        width: '100%',
        borderBottomWidth: 1,
        marginTop: 14,
    },
    Text2: {
        fontSize: 18,
        paddingHorizontal: 20,
        marginTop: 5
    },
    View5: {
        marginTop: 30
    }

})



