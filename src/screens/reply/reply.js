import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'

const Reply = (props) => {

    const [Name, setName] = useState(false);
    const [Send, setSend] = useState(false);
    const [Attach, setAttach] = useState(false);
    const [Reply, setReply] = useState(false);
    const [Team, setTeam] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('hometo')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Reply</Text>
                <TouchableOpacity onPress={() => setReply(true)}>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/doun.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAttach(true)}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/attachment.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSend(true)}>
                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/sent.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setName(true)}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 16, flexDirection: 'row' }}>
                <Text style={styles.Text2}>From<Text>     nareshsingh7011111@gmail.com </Text> </Text>
            </View>
            <View style={styles.View2} />
            <View style={styles.View3}>
                <Text style={styles.Text3}>To</Text>
                <TouchableOpacity style={styles.View4} onPress={() => setTeam(true)}>
                    <Image resizeMode={'cover'} style={styles.Image5} source={require('../../assets/images/contacts.png')} />
                    <Text style={styles.Text4}>The Google Account Team</Text>
                </TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.Image6} source={require('../../assets/images/chevrondown.png')} />
            </View>
            <View style={styles.View5} />
            <View style={styles.View6}>
                <Text style={{ fontSize: 20 }}>Re: Naresh,take the next step on your Mac device by confirming your Google Account settings</Text>
            </View>
            <View style={styles.View2} />
            <View style={styles.View6}>
                <TextInput
                    style={styles.TextInput}
                />
            </View>
            <View style={styles.View6}>
                <Image resizeMode={'cover'} style={styles.Image7} source={require('../../assets/images/kmsed.png')} />
            </View>
            <Modal
                animationType="none"
                transparent={true}
                visible={Name}
            >
                <View style={styles.View7}>
                    <View style={styles.View8}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setName(!Name)}
                        >
                            <Text style={styles.Text5}>Schedule send</Text>
                        </TouchableOpacity>
                        <Text style={styles.Text5}>Add from Contacts</Text>
                        <Text style={styles.Text5}>Confidential mode</Text>
                        <Text style={styles.Text6}>Save draft</Text>
                        <Text style={styles.Text5}>Discard</Text>
                        <Text style={styles.Text5}>Settings</Text>
                        <Text style={styles.Text5}>Help and feedback</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={Send}
            >
                <View style={styles.View9}>
                    <View style={styles.View10}>
                        <Text style={styles.Text5}>Send this message?</Text>
                        <View style={styles.View11}>
                            <TouchableOpacity
                                style={[styles.croos, styles.buttonClose]}
                                onPress={() => setSend(!Send)}
                            >
                                <Text style={{ fontSize: 16, color: 'blue' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.croos, styles.buttonClose]}
                                onPress={() => setSend(!Send)}
                            >
                                <Text style={{ fontSize: 16, color: 'blue' }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={Attach}
            >
                <View style={styles.View12}>
                    <View style={styles.View13}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setAttach(!Attach)}
                        >
                            <Text style={styles.Text5}>Attach file</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setAttach(!Attach)}
                        >
                            <Text style={styles.Text5}>Insert from Drive</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={Reply}
            >
                <View style={styles.View15}>
                    <TouchableOpacity
                        style={[styles.croos, styles.buttonClose]}
                        onPress={() => setReply(!Reply)}
                    >
                        <Text style={styles.Text7}>Reply</Text>
                    </TouchableOpacity>
                    <Text style={styles.Text7}>Reply all </Text>
                    <Text style={styles.Text7}>Forward </Text>
                </View>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={Team}
            >
                <View style={styles.View16}>
                    <View style={styles.View14}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setTeam(!Team)}
                        >
                            <View style={styles.View17}>
                                <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/contacts.png')} />
                                <View style={styles.View18}>
                                    <Text style={styles.Text8}>The Google Account Team</Text>
                                    <Text style={{ fontSize: 17 }}>google-noreply@google.com</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View19} />
                        <View style={styles.View20}>
                            <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/copy.png')} />
                            <Text style={{ fontSize: 17, marginLeft: 15 }}>Copy</Text>
                        </View>
                        <View style={styles.View5} />
                        <View style={styles.View20}>
                            <Image resizeMode={'cover'} style={styles.Image10} source={require('../../assets/images/set.png')} />
                            <Text style={{ fontSize: 18, marginLeft: 15 }}>Remove</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Reply

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View1: {
        marginTop: 30,
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    Text1: {
        fontSize: 20,
        marginLeft: 25
    },
    Image2: {
        marginTop: 3,
        marginLeft: 70
    },
    Image3: {
        marginTop: 3,
        marginLeft: 20
    },
    Image4: {
        marginLeft: 25
    },
    Image1: {
        width: 30,
        height: 30
    },
    Text2: {
        fontSize: 17,
        marginTop: 35
    },
    View2: {
        height: 0.4,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 20
    },
    View5: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 10
    },
    View19: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
    },
    View3: {
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    Text3: {
        fontSize: 18,
        marginTop: 17
    },
    View4: {
        height: 40,
        width: 230,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Image5: {
        width: 40,
        height: 40
    },
    Text4: {
        fontSize: 15
    },
    Image6: {
        width: 18,
        height: 18,
        marginTop: 20,
        marginLeft: 52
    },
    View6: {
        paddingHorizontal: 16,
        marginTop: 20
    },
    TextInput: {
        fontSize: 20
    },
    Image7: {
        width: 23,
        height: 23
    },
    View8: {
        width: 200,
        height: 345,
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        paddingHorizontal: 16
    },
    View7: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    Text5: {
        fontSize: 17,
        marginTop: 25
    },
    Text6: {
        fontSize: 17,
        marginTop: 25,
        color: 'gray'
    },
    View10: {
        height: 110,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 18
    },
    View9: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    View11: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 150,
        marginTop: 25
    },
    View13: {
        width: 180,
        height: 110,
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        paddingHorizontal: 16
    },
    View12: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    View15: {
        height: 135,
        width: 100,
        backgroundColor: '#e6e6e6',
        marginLeft: 60,
        marginTop: 30,
        paddingHorizontal: 16
    },
    Text7: {
        fontSize: 17,
        marginTop: 17
    },
    View14: {
        height: 180,
        width: '100%',
        backgroundColor: '#e6e6e6',
        marginTop: 145,
        borderRadius: 5
    },
    View16: {
        paddingHorizontal: 30
    },
    View17: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 10
    },
    View18: {
        marginTop: 6,
        marginLeft: 5
    },
    Text8: {
        fontSize: 17,
        fontWeight: '600'
    },
    Image8: {
        height: 55,
        width: 55
    },
    View20: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 15
    },
    Image9: {
        width: 25,
        height: 25
    }
})