import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const XiaomiCloud = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('account')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.View2}>
                    <Text style={styles.Text1}>Xiaomi Cloud</Text>
                </View>
                <View style={styles.View3}>
                    <View style={styles.View4}>
                        <Text style={styles.Text2}>0 MB| 5 GB</Text>
                        <View style={styles.View5}>
                            <Text style={styles.Text3}>Upgrade</Text>
                        </View>
                    </View>
                    <View style={styles.View6}>
                    </View>
                    <View style={styles.View7}>
                        <Text style={styles.Text4}>No items in the cloud yet</Text>
                    </View>
                </View>
                <View style={styles.View8}>
                    <Text style={styles.Text2}>Manage storage</Text>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/greater.png')} />
                </View>
                <View style={styles.View9}>
                </View>
                <View style={styles.View10}>
                    <TouchableOpacity>
                        <View style={styles.View11}>
                            <View style={styles.View12}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/restore.png')} />
                                <Text style={styles.Text5}>Backups</Text>
                            </View>
                            <View style={styles.View13}>
                                <Text style={styles.Text6}>Off</Text>
                                <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                            </View>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.View11}>
                            <View style={styles.View12}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/iphone.png')} />
                                <Text style={styles.Text5}>Find device</Text>
                            </View>
                            <View style={styles.View13}>
                                <Text style={styles.Text6}>On</Text>
                                <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.View11}>
                            <View style={styles.View12}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/deletepng.png')} />
                                <Text style={styles.Text5}>Deleted items</Text>
                            </View>
                            <View style={styles.View13}>
                                <Text style={styles.Text6}></Text>
                                <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.View9}>
                    </View>
                    <View style={styles.View14}>
                        <Text style={styles.Text2} >Sync app data</Text>
                        <View style={styles.View15}>
                            <Text style={styles.Text3}>Sync</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default XiaomiCloud

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom: 20
    },
    View1: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50
    },
    View2: {
        marginTop: 5
    },
    Image1: {
        width: 30,
        height: 30
    },
    Text1: {
        fontSize: 30,
        fontWeight: '300'
    },
    View3: {
        width: '100%',
        height: 155,
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
        marginTop: 30,
        paddingHorizontal: 16
    },
    View4: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 25
    },
    View5: {
        width: 110,
        height: 35,
        backgroundColor: '#ccdcff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text2: {
        fontSize: 22
    },
    Text3: {
        color: 'blue',
        fontSize: 16
    },
    View6: {
        height: 18,
        width: '100%',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        marginTop: 20
    },
    View7: {
        marginTop: 20,
    },
    Text4: {
        color: 'gray'
    },
    View8: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    Image2: {
        width: 25,
        height: 25,
        marginTop: 3
    },
    View9: {
        borderWidth: 0.5,
        borderColor: 'gray',
        marginTop: 30
    },
    View10: {
        marginTop: 25
    },
    View11: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    View12: {
        flexDirection: 'row'
    },
    Text5: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 20
    },
    Image3: {
        width: 60,
        height: 60
    },
    Image4: {
        width: 25,
        height: 25
    },
    View13: {
        flexDirection: 'row',
        marginTop: 20
    },
    Text6: {
        fontSize: 18,
        color: 'gray'
    },
    View14: {
        marginTop: 40,
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    View15: {
        width: 110,
        height: 40,
        backgroundColor: '#ccdcff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})