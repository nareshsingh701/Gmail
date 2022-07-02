import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const Hometo = (props) => {
    const [ModalDot, setModalDot] = useState(false);
    const [ModalThreeDot, setModalThreeDot] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <View style={styles.View2} >
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/openbox.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/trashcan.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/message.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalThreeDot(true)}>
                        <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/givn.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.View3}>
                <View style={styles.View4}>
                    <View style={styles.View5}>
                        <Text style={styles.Text2}>New work </Text>
                        <View style={styles.View6}>
                            <Text style={styles.Text1}>Inbox</Text>
                        </View>
                    </View>
                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/cd.png')} />
                </View>
            </View>
            <View style={styles.View8}>
                <View style={styles.View7}>
                    <Image resizeMode={'cover'} style={styles.Image5} source={require('../../assets/images/g.png')} />
                </View>
                <View style={styles.View9}>
                    <View style={styles.View10}>
                        <Text style={styles.Text3}>Google New</Text>
                        <Text style={styles.Text5}>  Yesterday</Text>
                        <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/upleft.png')} />
                        <TouchableOpacity onPress={() => setModalDot(true)}>
                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/givn.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.Text4}>to me</Text>
                    </View>
                </View>
            </View>








            <Modal
                animationType="none"
                transparent={true}
                visible={ModalDot}

            >
                <View style={styles.View11}>
                    <View style={styles.View12}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalDot(!ModalDot)}
                        >
                            <View style={styles.View13}>
                                <Text style={styles.Text6}>Reply all </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Forward </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Add star </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Print </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Mark unread from here </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Block"Google New" </Text>
                        </View>

                    </View>
                </View>
            </Modal>









            <Modal
                animationType="none"
                transparent={true}
                visible={ModalThreeDot}

            >
                <View style={styles.View14}>
                    <View style={styles.View15}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalThreeDot(!ModalThreeDot)}
                        >
                            <View style={styles.View13}>
                                <Text style={styles.Text6}>Move to </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Snooze </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Change labels </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Maek as not important </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Mute </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Print </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Report spam </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Add to Tasks </Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Help and feedback </Text>
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default Hometo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    View1: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image1: {
        width: 35,
        height: 35
    },
    View2: {
        flexDirection: 'row',
        marginTop: 8,
    },
    Image2: {
        width: 25,
        height: 25,
        marginLeft: 15
    },
    View3: {
        marginTop: 22,
    },
    View4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    View5: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Text1: {
        fontSize: 16,
    },
    Text2: {
        fontSize: 24
    },
    Image4: {
        width: 25,
        height: 25
    },
    View6: {
        height: 20,
        width: 55,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    View7: {
        flexDirection: 'row',
        width: 60,
        height: 65,
    },
    Image5: {
        width: 60,
        height: 60
    },
    Text3: {
        fontSize: 20,
        fontWeight: '600'
    },
    View8: {
        flexDirection: 'row',
        marginTop: 25
    },
    View9: {
        height: 25,
        width: 200,
        marginLeft: 10,
        marginTop: 5
    },
    View10: {
        flexDirection: 'row'
    },
    Text4: {
        fontSize: 15,
    },
    Text5: {
        fontSize: 16,
        marginTop: 4,
    },
    Image6: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginTop: 10
    },






    View12: {
        width: 220,
        height: 265,
        backgroundColor: '#e6e6e6',
        marginTop: 185,
        borderRadius: 5
    },
    View11: {
        alignSelf: 'flex-end'
    },
    View13: {
        marginTop: 20,
        paddingHorizontal: 16
    },
    Text6: {
        fontSize: 18
    },
    View15: {
        width: 220,
        height: 400,
        backgroundColor: '#e6e6e6',
        marginTop: 40,
        borderRadius: 5
    },
    View14: {
        alignSelf: 'flex-end'
    },





})