import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Reply = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('hometo')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Reply</Text>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/doun.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/attachment.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/sent.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.Text2}>From      nareshsingh7011111@gmail.com</Text>
        </View>
    )
}

export default Reply

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    View1: {
        marginTop: 30,
        flexDirection: 'row'
    },
    Text1: {
        fontSize: 20,
        marginLeft: 25
    },
    Image2: {
        marginTop: 3,
        marginLeft: 70
    },
    Image3: {
        marginTop: 3,
        marginLeft: 20
    },
    Image4: {
        marginLeft: 25
    },
    Image1: {
        width: 30,
        height: 30
    },
    Text2: {
        fontSize: 17,
        marginTop: 35
    }
})