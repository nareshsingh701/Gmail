import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Join = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>join with a code</Text>
                <Text style={styles.Text2}>join</Text>
            </View>
            <View style={styles.View2}>
                <Text>Enter the code provided by the meeting organiser</Text>
            </View>
            <View style={styles.View3}>
                <TextInput
                    placeholder='Example:abc-mnop-xyz'
                    style={styles.TextInput}
                />
            </View>

        </View>
    )
}

export default Join

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    View1: {
        flexDirection: 'row',
        marginTop: 60
    },
    Text1: {
        fontSize: 22,
        marginLeft: 30
    },
    Image1: {
        width: 30,
        height: 30
    },
    Text2: {
        fontSize: 15,
        marginTop: 4,
        marginLeft: 85
    },
    View2: {
        marginTop: 30
    },
    TextInput: {
        marginTop: 13,
        fontSize: 20,
        marginLeft: 20
    },
    View3: {
        height: 55,
        width: '100%',
        borderBottomWidth: 2,
        marginTop: 30,
        backgroundColor: '#e6e6e6',
        borderTopLeftRadius: 5,
        borderTopEndRadius: 5,
        borderBottomColor: 'blue'
    },

})