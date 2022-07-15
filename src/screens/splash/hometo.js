import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';


const Hometo = (props) => {

    const [ModalDot, setModalDot] = useState(false);
    const [ModalThreeDot, setModalThreeDot] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [Inbox, setInbox] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [Snooze, setSnooze] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <View style={styles.View2} >
                    <TouchableOpacity onPress={() => setDelete(true)}>
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
                        <TouchableOpacity style={styles.View6} onPress={() => setInbox(true)}>
                            <Text style={styles.Text1}>Inbox</Text>
                        </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => props.navigation.navigate('reply')}>
                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/upleft.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalDot(true)}>
                            <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/givn.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.View19}>
                        <Text style={styles.Text4}>to me</Text>
                        <Image resizeMode={'cover'} style={styles.Image7} source={require('../../assets/images/chevrondown.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.View24}>
                <TouchableOpacity style={styles.View25} onPress={() => props.navigation.navigate('reply')}>
                    <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/upleft.png')} />
                    <Text style={styles.Text11}>Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.View25} onPress={() => props.navigation.navigate('reply')}>
                    <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/upleft.png')} />
                    <Text style={styles.Text11}>Reply all</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.View25} onPress={() => props.navigation.navigate('reply')}>
                    <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/upright.png')} />
                    <Text style={styles.Text11}>Forward</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="none"
                transparent={true}
                visible={ModalDot}
            >
                <Pressable onPress={() => setModalDot(!ModalDot)}>
                    <View style={styles.View11}>
                        <View style={styles.View12}>
                            <TouchableOpacity style={styles.View13} onPress={() => {
                                setModalDot(false)
                                props.navigation.navigate('reply')
                            }}>
                                <Text style={styles.Text6}>Reply all </Text>
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
                            <TouchableOpacity style={styles.View13} onPress={() => props.navigation.navigate('home')
                            }>
                                <Text style={styles.Text6}>Mark unread from here </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.croos, styles.buttonClose]}
                                onPress={() => setModalDot(!ModalDot)}
                            >
                                <View style={styles.View13}>
                                    <Text style={styles.Text6}>Block"Google New" </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={ModalThreeDot}
            >
                <Pressable onPress={() => setModalThreeDot(!ModalThreeDot)} style={{ alignSelf: 'flex-end' }}>

                    <View style={styles.View15}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalThreeDot(!ModalThreeDot)}
                        >
                            <View style={styles.View13}>
                                <Text style={styles.Text6}>Move to </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13} onPress={() => {
                            setModalThreeDot(!ModalThreeDot)
                            setSnooze(true)
                        }} >
                            <Text style={styles.Text6} >Snooze </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13}>
                            <Text style={styles.Text6}>Change labels </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13}>
                            <Text style={styles.Text6}>Maek as not important </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13}>
                            <Text style={styles.Text6}>Mute </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13}>
                            <Text style={styles.Text6}>Print </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13}>
                            <Text style={styles.Text6}>Report spam </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.View13}>
                            <Text style={styles.Text6}>Add to Tasks </Text>
                        </TouchableOpacity>
                        <View style={styles.View13}>
                            <Text style={styles.Text6}>Help and feedback </Text>
                        </View>
                    </View>

                </Pressable>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={Delete}
            >
                <Pressable onPress={() => setDelete(!Delete)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 35 }}>

                    <View style={styles.View16}>
                        <Text style={styles.Text7}>Archive this conversation?</Text>
                        <View style={styles.View18}>
                            <TouchableOpacity
                                style={[styles.croos, styles.buttonClose]}
                                onPress={() => setDelete(!Delete)}
                            >
                                <Text style={{ color: 'blue', fontSize: 16 }}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'blue', fontSize: 16 }}>OK</Text>
                        </View>
                    </View>

                </Pressable>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={Inbox}
            >
                <Pressable onPress={() => setInbox(!Inbox)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 35 }}>
                    <View style={styles.View20}>
                        <Text style={styles.Text8}>Label as</Text>
                        <TouchableOpacity style={styles.View21} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                            <Image resizeMode={'cover'} source={require('../../assets/images/inbox.png')} />
                            <View style={styles.View22}>
                                <Text style={styles.Text9}>Inbox</Text>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    boxType={'square'}
                                    onCheckColor={'#fff'}
                                    onFillColor={'blue'}
                                    lineWidth={3}
                                    tintColor={'#000'}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View23}>
                            <TouchableOpacity
                                style={[styles.croos, styles.buttonClose]}
                                onPress={() => setInbox(!Inbox)}
                            >
                                <Text style={styles.Text10}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.croos, styles.buttonClose]}
                                onPress={() => setInbox(!Inbox)}
                            >
                                <Text style={styles.Text10}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Pressable>
            </Modal>


            <Modal
                animationType="none"
                transparent={true}
                visible={Snooze}

            >
                <Pressable onPress={() => setSnooze(!Snooze)} style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20, }}>
                    <View style={styles.View27}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setSnooze(!Snooze)}
                        >
                            <Text style={{ color: 'blue', fontSize: 16 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>



                </Pressable>
            </Modal>

        </View>
    )
}

export default Hometo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 30
    },
    View1: {
        marginTop: 45,
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
    Image8: {
        width: 20,
        height: 20,
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

    View16: {
        height: 135,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 18
    },

    Text7: {
        fontSize: 16,
        marginTop: 20
    },
    View18: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 90,
        marginTop: 40

    },
    View19: {
        flexDirection: 'row'
    },
    Image7: {
        width: 10,
        height: 15,
        marginLeft: 10,
        marginTop: 3
    },
    View20: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 35,
        paddingHorizontal: 20
    },
    Text8: {
        fontSize: 30,
        marginTop: 20
    },
    View21: {
        marginTop: 25,
        flexDirection: 'row',
    },
    Text9: {
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 20
    },
    View22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View23: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 100
    },
    Text10: {
        fontSize: 16,
        color: 'blue',
        fontWeight: '600'
    },
    View24: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end'
    },
    View25: {
        height: 50,
        width: 110,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Text11: {
        fontSize: 18,
        marginLeft: 10
    },
    View27: {
        height: 280,
        width: '100%',
        backgroundColor: "#fff",
        borderRadius: 10
    }

})