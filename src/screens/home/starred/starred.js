import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Linking } from 'react-native'
import React, { useState } from 'react'

const Starred = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigateToScreen = () => {
        setModalVisible(false)
        props.navigation.navigate('setemail')
    }

    return (

        <View style={styles.container}>
            <View style={styles.Viewone}>
                <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
                    <Text style={styles.Textone}>Search in emails</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image resizeMode={'cover'} style={styles.ImageTow} source={require('../../../assets/images/rama.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <ScrollView horizontal={true} >
                    <View style={styles.View}>
                        <TouchableOpacity>
                            <View style={styles.View1}>
                                <Text style={styles.Text1}>starred</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View2}>
                                <Text style={styles.Text1}>From</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View3}>
                                <Text style={styles.Text1}>To</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View1}>
                                <Text style={styles.Text1}>Attachment</Text>
                                <Image resizeMode={'cover'} style={styles.Image5} source={require('../../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View2}>
                                <Text style={styles.Text1}>Date</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('lsunread')}>
                            <View style={styles.View2}>
                                <Text style={styles.Text1}>Is unread</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View4}>
                                <Text style={styles.Text1}>Exclude calendar updates</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.View5}>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../../assets/images/star.png')} />
                    <Text style={styles.Text}>Nothing in Starred</Text>
                </View>
            </ScrollView>







            <View style={styles.centeredView}>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.View8}>
                                <TouchableOpacity
                                    style={[styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Image resizeMode={'cover'} style={styles.Image10} source={require('../../../assets/images/croos.png')} />
                                </TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.Image7} source={require('../../../assets/images/google_logo.png')} />
                            </View>
                            <View style={styles.View9}>
                                <Image resizeMode={'cover'} style={styles.Image} source={require('../../../assets/images/rama.png')} />
                                <View style={styles.View11}>
                                    <Text style={styles.Text5}>Naresh Singh</Text>
                                    <Text>nareshsingh7011111@gmail</Text>
                                </View>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text5}>Manage your Google Account</Text>
                            </View>
                            <View style={styles.View13}>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(false)
                                props.navigation.navigate('storage')
                            }}>
                                <View style={styles.View14}>
                                    <Image resizeMode={'cover'} style={styles.Image8} source={require('../../../assets/images/cloud.png')} />
                                    <Text style={styles.Text2}>Storage used: 0% of 15 GB</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.View15}>
                            </View>
                            <TouchableOpacity onPress={navigateToScreen}>
                                <View style={styles.View16}>
                                    <Image resizeMode={'cover'} style={styles.Image9} source={require('../../../assets/images/user.png')} />
                                    <Text style={styles.Text3}>Add another account</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.View17}>
                                    <Image resizeMode={'cover'} style={styles.Image9} source={require('../../../assets/images/settings.png')} />
                                    <Text style={styles.Text3}>Manage accounts on this device</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.View18}>
                            </View>
                            <View style={styles.View19}>
                                <Text onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=en-GB')}>privacy policy</Text>
                                <Text style={styles.Text4}>.</Text>
                                <Text onPress={() => Linking.openURL('https://policies.google.com/terms?hl=en-GB')}>Terms of service</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


        </View>

    )
}

export default Starred;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    View5: {
        marginTop: 70
    },
    Image2: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    Text: {
        fontSize: 25,
        alignSelf: 'center'
    },





    Viewone: {
        height: 55,
        width: '100%',
        backgroundColor: '#e6e6e6',
        borderRadius: 30,
        flexDirection: 'row',
        marginTop: 10
    },
    Textone: {
        marginTop: 15,
        marginLeft: 16,
        fontSize: 20
    },
    ImageTow: {
        marginLeft: 100,
        marginTop: 3
    },



    View: {
        flexDirection: 'row'
    },
    View1: {
        width: 140,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    Text1: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 10
    },
    Image1: {
        marginLeft: 15,
        marginTop: 5
    },
    Image5: {
        marginLeft: 3,
        marginTop: 5
    },
    View2: {
        width: 100,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    View3: {
        width: 75,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    View4: {
        height: 35,
        width: 245,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 15
    },








    centeredView: {
        flex: 1,
        marginTop: 140,
        paddingHorizontal: 16
    },
    modalView: {
        backgroundColor: "white",
        height: 385,
        width: '100%',
        borderRadius: 10,

    },
    Image10: {
        height: 30,
        width: 30,
        marginTop: 12
    },
    Image7: {
        height: 60,
        width: 100,
        marginLeft: 75
    },
    View8: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 16
    },
    View9: {
        flexDirection: "row",
        paddingHorizontal: 16
    },
    Image6: {
        height: 12,
        width: 12
    },
    View10: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 12,
    },
    View11: {
        marginTop: 6,
        marginLeft: 10
    },
    Text5: {
        fontWeight: '600',
        fontSize: 15
    },
    View12: {
        height: 32,
        width: 240,
        borderWidth: 1,
        marginLeft: 58,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7
    },
    View13: {
        borderWidth: 0.4,
        marginTop: 14
    },
    Image8: {
        width: 30,
        height: 30
    },
    View15: {
        borderWidth: 0.5,
        marginTop: 9
    },
    View14: {
        paddingHorizontal: 25,
        marginTop: 4,
        flexDirection: 'row'
    },
    Text2: {
        marginTop: 8,
        marginLeft: 18
    },
    Image9: {
        width: 25,
        height: 25
    },
    View16: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginTop: 20
    },
    Text3: {
        marginTop: 4,
        marginLeft: 20
    },
    View17: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginTop: 25
    },
    View18: {
        borderWidth: 0.5,
        marginTop: 20,

    },
    View19: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 16,
        marginTop: 15
    },
    Text4: {
        fontWeight: 'bold',
        fontSize: 18
    }
})