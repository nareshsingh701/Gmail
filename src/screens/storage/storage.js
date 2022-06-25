import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Storage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Storage</Text>
            </View>
            <ScrollView>
                <View style={styles.View2}>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/one.png')} />
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text2}>Manage your storage with Google One</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text3}>Your account comes with 15 GB of storage at no charge</Text>
                </View>
                <View style={styles.View5}>
                    <Text style={styles.Text4}>Get storage</Text>
                </View>
                <View style={styles.View6}>
                </View>
                <View style={styles.View7}>
                    <Image resizeMode={'cover'} source={require('../../assets/images/rama.png')} />
                    <View style={styles.View8}>
                        <Text style={styles.Text5}>Naresh Singh</Text>
                        <Text style={styles.Text6}>nareshsingh7011111@gmail</Text>
                    </View>
                </View>
                <View style={styles.View9}>
                    <Text>Storage used</Text>
                    <Text>0 KB of 15 GB</Text>
                </View>
                <View style={styles.View10}>
                    <View style={styles.View11}>
                        <View style={styles.View12}>

                        </View>
                    </View>
                </View>
                <View style={styles.View13}>
                    <View style={styles.View14}>
                        <View style={styles.View15}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/blue.png')} />
                            <Text style={styles.Text7}>Google Drive</Text>
                        </View>
                        <Text style={styles.Text8}>0 KB</Text>
                    </View>
                </View>
                <View style={styles.View13}>
                    <View style={styles.View14}>
                        <View style={styles.View15}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/red.png')} />
                            <Text style={styles.Text7}>Gmail</Text>
                        </View>
                        <Text style={styles.Text8}>0 KB</Text>
                    </View>
                </View>
                <View style={styles.View13}>
                    <View style={styles.View14}>
                        <View style={styles.View15}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/yellow.png')} />
                            <Text style={styles.Text7}>Google Photos</Text>
                        </View>
                        <Text style={styles.Text8}>0 KB</Text>
                    </View>
                </View>
                <View style={styles.View16}>
                    <Text style={styles.Text9}>Clean up space</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Storage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    View1: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 35
    },
    Image1: {
        width: 30,
        height: 30
    },
    Image2: {
        width: 70,
        height: 70
    },
    Text1: {
        fontSize: 23,
        marginLeft: 20
    },
    View2: {
        alignSelf: 'center',
        marginTop: 30

    },
    View3: {
        paddingHorizontal: 32,
        marginTop: 10
    },
    Text2: {
        fontSize: 23,
        textAlign: 'center'
    },
    View4: {
        paddingHorizontal: 32,
        marginTop: 15
    },
    Text3: {
        fontSize: 18,
        textAlign: 'center'
    },
    View5: {
        width: 140,
        height: 45,
        backgroundColor: '#0033cc',
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 25
    },
    Text4: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    View6: {
        borderWidth: 0.4,
        marginTop: 25
    },
    View7: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 16
    },
    Text5: {
        fontSize: 17,
        marginTop: 5
    },
    Text6: {
        marginTop: 3
    },
    View8: {
        marginLeft: 10
    },
    View9: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    View11: {
        height: 15,
        width: '100%',
        backgroundColor: '#a5a5a5',
        borderRadius: 8,
        marginTop: 10
    },
    View10: {
        paddingHorizontal: 16
    },
    View12: {
        height: 15,
        width: 15,
        backgroundColor: 'blue',
        borderRadius: 7,
    },
    View13: {
        marginTop: 22,
        paddingHorizontal: 16,
    },
    View14: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View15: {
        flexDirection: 'row'
    },
    Image3: {
        width: 25,
        height: 25
    },
    Text8: {
        fontSize: 16,
        marginTop: 4
    },
    Text7: {
        fontSize: 16,
        marginLeft: 20,
        marginTop: 4
    },
    View16: {
        width: 155,
        height: 45,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 25
    },
    Text9: {
        color: 'blue',
        fontSize: 16,
    },

})