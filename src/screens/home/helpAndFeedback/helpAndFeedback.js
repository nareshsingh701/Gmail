import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
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
    }
})