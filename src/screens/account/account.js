import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Modal } from 'react-native'
import React, { useState, } from 'react'

const Account = (props) => {
    const [checked, setchecked] = useState(false);
    const [checke, setchecke] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);


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
                <TouchableOpacity style={styles.View3} onPress={() => setModalVisible(true)}>
                    <Text onPress={() => setchecked(!checked)} style={styles.Text2} >Auto-sync data</Text>
                    <Switch
                        value={checked}
                        onValueChange={() => setchecked(!checked)}
                        trackColor={{ false: '#767577', true: '#0000ff', }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.View3}>
                    <Text onPress={() => setchecke(!checke)} style={styles.Text2}>Wi-Fi only</Text>
                    <Switch
                        value={checke}
                        onValueChange={() => setchecke(!checke)}
                        trackColor={{ false: '#767577', true: '#0000ff', }}
                    />
                </TouchableOpacity>
                <View style={styles.View4} />
                <View style={styles.View5}>
                    <Text>GOOGLE</Text>
                </View>
                <TouchableOpacity style={styles.View6} onPress={() => props.navigation.navigate('google')}>
                    <View style={styles.View7}>
                        <View style={styles.View8}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/good.png')} />
                            <Text style={styles.Text3}>Google</Text>
                        </View>
                        <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/Than.png')} />

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








            <Modal
                animationType="slaid"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.View11}>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={styles.View12}>Turn auto-data off?</Text>
                    </View>
                    <View style={styles.View13}>
                        <Text style={{ fontSize: 16 }}>This will conserve data and battery usage, but you`ll needto sync each account manually to collect recent information and you won`t receive nootifications when updates occur.</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 35, justifyContent: 'space-between' }}>
                        <View style={styles.View14}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: "gray" }}>Cancel</Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.View15}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: 'bold' }}>OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >







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
    },




    View11: {
        width: '100%',
        height: 350,
        backgroundColor: '#fff',
        marginTop: 350,
        borderRadius: 30
    },
    Image5: {
        width: 30,
        height: 30
    },
    View12: {
        fontWeight: '600',
        fontSize: 20
    },
    View13: {
        paddingHorizontal: 40,
        marginTop: 20
    },
    View14: {
        width: 160,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    View15: {
        width: 160,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center'
    }

})