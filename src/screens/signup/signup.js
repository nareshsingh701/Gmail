import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Signup = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.View3}>
                <TouchableOpacity>
                    <View style={styles.View4}>
                        <Text style={styles.Text2}>New meeting</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('join')}>
                    <View style={styles.View5}>
                        <Text style={styles.Text3}>Join with a code</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/nbvc.png')} />
            </View>
            <View style={styles.View1}>
                <Text style={styles.Text4}>Your meeting is safe</Text>

            </View>
            <View style={styles.View2}>
                <Text style={styles.Text6}>No one can Join a meeting unless</Text>
                <Text style={styles.Text7}>invited or admitted dy the host</Text>
            </View>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    Text7: {
        marginLeft: 70,
        fontSize: 17
    },
    Image5: {
        marginLeft: 180,
        height: 35,
        width: 35,
    },
    View2: {
        alignSelf: 'center',

    },
    View1: {
        alignSelf: 'center'
    },

    Imageone: {
        marginTop: 15,
        marginLeft: 20
    },
    Textone: {
        marginTop: 12,
        marginLeft: 90,
        fontSize: 25
    },
    ImageTow: {
        marginTop: 10,
        marginLeft: 120
    },
    View3: {
        flexDirection: 'row'
    },
    View4: {
        height: 50,
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 25,
        marginTop: 25
    },
    View5: {
        height: 50,
        width: 185,
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 25,
        borderWidth: 1
    },
    Text2: {
        alignSelf: 'center',
        marginTop: 12,
        fontSize: 20,
        color: '#ffffff'
    },
    Text3: {
        alignSelf: 'center',
        marginTop: 12,
        fontSize: 20,
        color: 'blue'
    },
    Image3: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    Text4: {
        fontSize: 30,
    },
    Text6: {
        fontSize: 18
    },
    Text7: {
        fontSize: 18
    }
})