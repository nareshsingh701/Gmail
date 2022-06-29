import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Addanaccount = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('account')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.View2}>
                <Text style={styles.Text1}>Add an account</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.View3}>
                    <View style={styles.View4}>
                        <View style={styles.View5}>
                            <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/google.png')} />
                            <Text style={styles.Text2}>Exchange</Text>
                        </View>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/greater.png')} />

                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.View3}>
                    <View style={styles.View4}>
                        <View style={styles.View5}>
                            <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/good.png')} />
                            <Text style={styles.Text2}>Google</Text>
                        </View>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/greater.png')} />

                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.View3}>
                    <View style={styles.View4}>
                        <View style={styles.View5}>
                            <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/google.png')} />
                            <Text style={styles.Text2}>Personal (IMAP)</Text>
                        </View>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/greater.png')} />

                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.View3}>
                    <View style={styles.View4}>
                        <View style={styles.View5}>
                            <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/google.png')} />
                            <Text style={styles.Text2}>Personal (POP3)</Text>
                        </View>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/greater.png')} />

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Addanaccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    View1: {
        marginTop: 35
    },
    View2: {
        marginTop: 20
    },
    Image1: {
        width: 30,
        height: 30
    },
    Text1: {
        fontSize: 30,
        fontWeight: '300'
    },

    View5: {
        flexDirection: 'row',
    },
    View3: {
        marginTop: 35,
    },
    View4: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image3: {
        width: 25,
        height: 25,
    },
    Text2: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: '600',
        marginLeft: 20,
    },
    Image2: {
        width: 35,
        height: 35
    },
})