import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Account = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.View2}>
                    <Text style={styles.Text1}>Accounts & sync</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Auto-sync data</Text>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Wi-Fi only</Text>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/toggleon.png')} />
                </View>
                <View style={styles.View4}>
                </View>
                <View style={styles.View5}>
                    <Text>GOOGLE</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('google')}>
                    <View style={styles.View6}>
                        <View style={styles.View7}>
                            <View style={styles.View8}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/good.png')} />
                                <Text style={styles.Text3}>Google</Text>
                            </View>
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/Than.png')} />

                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.View4}>
                </View>
                <View style={styles.View5}>
                    <Text>OTHER</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('addanaccount')}>
                    <View style={styles.View6}>
                        <View style={styles.View7}>
                            <View style={styles.View8}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/plus.png')} />
                                <Text style={styles.Text3}>Add account</Text>
                            </View>
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/Than.png')} />

                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.View9}>
                        <Text style={styles.Text5}>Need other settings?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('xiaomiCloud')}>
                            <Text style={styles.Text6}>Xiaomi Cloud</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={styles.View10}>
                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/sync.png')} />
                    <Text style={styles.Text7}>Sync now</Text>
                </View>
            </ScrollView>
        </View >
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    View1: {
        marginTop: 35
    },
    Image1: {
        width: 35,
        height: 35
    },
    View2: {
        marginTop: 15
    },
    Text1: {
        fontSize: 30
    },
    View3: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text2: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    },
    Image2: {
        width: 45,
        height: 45
    },
    View4: {
        borderWidth: 0.5,
        marginTop: 35
    },
    View5: {
        marginTop: 27
    },
    Image4: {
        width: 25,
        height: 25,
    },
    Text3: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: '600',
        marginLeft: 20,
    },
    Image3: {
        width: 30,
        height: 30
    },
    View8: {
        flexDirection: 'row',
    },
    View6: {
        marginTop: 22,
    },
    View7: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View8: {
        flexDirection: 'row'
    },
    Text4: {
        fontSize: 16,
        marginLeft: 30
    },
    View9: {
        height: 125,
        width: '100%',
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        marginTop: 30,
        paddingHorizontal: 20
    },
    Text5: {
        fontSize: 20,
        color: 'gray',
        marginTop: 20
    },
    Text6: {
        fontSize: 20,
        marginTop: 25,
        fontWeight: '500',
        color: 'blue'
    },
    View10: {
        alignItems: 'center',
        marginTop: 100
    },
    Text7: {
        fontSize: 13,
        marginTop: 4
    }

})