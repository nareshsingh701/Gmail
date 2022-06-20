import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'

const Skip = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/addresess.jpg')} />
                <TouchableOpacity>
                    <View>
                        <Text style={styles.Text1}>You can now add all of your email addresses.<Text onPress={() => Linking.openURL('https://support.google.com/mail/answer/6078445')} style={styles.Text2}> Learn more</Text></Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View}>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('setemail')}>
                    <View style={styles.View2}>
                        <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/plus.png')} />
                        <Text style={styles.Text3}>Add an email adderss</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <View style={styles.View4}>
                    <TouchableOpacity onPress={() => alert('Please add at least one email address.')}>
                        <Text style={styles.Text4}>TAKE ME TO GMAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Skip

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",,
        paddingBottom: 20
    },
    Imageone: {
        width: "100%",
        height: 200
    },
    Text1: {
        paddingHorizontal: 16,
        fontSize: 17,
        marginTop: 20
    },
    Text2: {
        color: 'blue'
    },
    View: {
        borderWidth: 0.2,
        borderLeftWidth: 390,
        marginTop: 20,
    },
    View2: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 30,
    },
    Imagetow: {
        width: 35,
        height: 30
    },
    Text3: {
        fontSize: 25,
        marginLeft: 30,
        color: 'blue'
    },
    View3: {
        borderWidth: 0.2,
        width: '100%',
        marginTop: 320,
    },
    Text4: {
        fontSize: 20
    },
    View4: {
        marginTop: 20,
        alignItems: 'center'
    }
})