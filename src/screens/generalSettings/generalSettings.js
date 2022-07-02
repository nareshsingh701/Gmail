import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { withSequence } from 'react-native-reanimated';

const GeneralSettings = (props) => {
    const [modalTheme, setModalTheme] = useState(false);
    const [modalDefault, setModalDefalt] = useState(false);
    const [ModalDot, setModalDot] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('settings')} >
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>General settings</Text>
                <TouchableOpacity onPress={() => setModalDot(true)}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => setModalTheme(true)}>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Theme</Text>
                        <Text style={styles.Text3}>System default</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity onPress={() => setModalDefalt(true)}>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Default notification action</Text>
                        <Text style={styles.Text3}>Archive</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('gmail')}>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Manage notification </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View4}>
                        <Text style={styles.Text2}>Manage notification </Text>
                        <View style={styles.View5}>
                            <Text style={styles.Text3}>Group emails in the same conversation for IMAP,POP3 and Exchange accounts</Text>
                            <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/check.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Conversation list density</Text>
                        <Text style={styles.Text3}>Dafault</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View4}>
                        <Text style={styles.Text2}>Swipe actions </Text>
                        <View>
                            <Text style={styles.Text3}>Configure swipe actions to quickly act on email in the conversation list</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Dafault reply action</Text>
                        <Text style={styles.Text3}>Choose your default reply action</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View4}>
                        <View style={styles.View6}>
                            <View>
                                <Text style={styles.Text2}>Auto-fit messages</Text>
                                <Text style={styles.Text3}>Shrink messages to fit the screen</Text>
                            </View>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/checkbox.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Auto-advance</Text>
                        <Text style={styles.Text3}>Show conversation list after you archive or delete</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View4}>
                        <View style={styles.View6}>
                            <View>
                                <Text style={styles.Text2}>Open web links in Gmail</Text>
                                <Text style={styles.Text3}>Turn on for faster browsing</Text>
                            </View>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/check.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.View7}>
                    <Text style={styles.Text4}>Action Confirmations</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.View8}>
                        <Text style={styles.Text2}>Confirm before deleting</Text>
                        <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/checkbox.png')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View8}>
                        <Text style={styles.Text2}>Confirm before archiving</Text>
                        <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/check.png')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.View3}>
                </View>
                <TouchableOpacity>
                    <View style={styles.View8}>
                        <Text style={styles.Text2}>Confirm before sending</Text>
                        <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/checkbox.png')} />
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <Modal
                animationType="none"
                transparent={true}
                visible={modalTheme}

            >
                <View style={styles.View9}>
                    <View style={styles.View10}>
                        <View style={styles.View11}>
                            <Text style={styles.Text2}>Theme</Text>
                        </View>
                        <View style={styles.View12}>
                            <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/round.png')} />
                            <Text style={styles.Text6}>Light</Text>
                        </View>
                        <View style={styles.View12}>
                            <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/round.png')} />
                            <Text style={styles.Text6}>Dark</Text>
                        </View>
                        <View style={styles.View12}>
                            <View style={styles.View13}>
                                <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/blue.png')} />
                            </View>
                            <Text style={styles.Text6}>System default</Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalTheme(!modalTheme)}
                        >
                            <View style={styles.View14}>
                                <Text style={styles.Text7}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>







            <Modal
                animationType="none"
                transparent={true}
                visible={modalDefault}

            >
                <View style={styles.View9}>
                    <View style={styles.View15}>
                        <View style={styles.View11}>
                            <Text style={styles.Text2}>Dafault notification action</Text>
                        </View>
                        <View style={styles.View12}>
                            <View style={styles.View13}>
                                <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/blue.png')} />
                            </View>
                            <Text style={styles.Text6}>Archive</Text>
                        </View>
                        <View style={styles.View12}>
                            <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/round.png')} />
                            <Text style={styles.Text6}>Delete</Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalDefalt(!modalDefault)}
                        >
                            <View style={styles.View14}>
                                <Text style={styles.Text7}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>





            <Modal
                animationType="none"
                transparent={true}
                visible={modalDefault}

            >
                <View style={styles.View9}>
                    <View style={styles.View15}>
                        <View style={styles.View11}>
                            <Text style={styles.Text2}>Dafault notification action</Text>
                        </View>
                        <View style={styles.View12}>
                            <View style={styles.View13}>
                                <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/blue.png')} />
                            </View>
                            <Text style={styles.Text6}>Archive</Text>
                        </View>
                        <View style={styles.View12}>
                            <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/round.png')} />
                            <Text style={styles.Text6}>Delete</Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalDefalt(!modalDefault)}
                        >
                            <View style={styles.View14}>
                                <Text style={styles.Text7}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>






            <Modal
                animationType="none"
                transparent={true}
                visible={ModalDot}

            >
                <View style={styles.View17}>
                    <View style={styles.View16}>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setModalDot(!ModalDot)}
                        >
                            <View style={styles.View2}>
                                <Text style={styles.Text2}>Manage Accounts </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View2}>
                            <Text style={styles.Text2}>Clear search history </Text>
                        </View>
                        <View style={styles.View2}>
                            <Text style={styles.Text2}>Clear picture approvals </Text>
                        </View>
                        <View style={styles.View2}>
                            <Text style={styles.Text2}>Help and feedback </Text>
                        </View>
                    </View>
                </View>
            </Modal>

        </View >
    )
}

export default GeneralSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
    },
    View1: {
        flexDirection: 'row',
        marginTop: 45,
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 16
    },
    Image: {
        width: 30,
        height: 30,
    },
    Image1: {
        width: 30,
        height: 30,
    },
    Text1: {
        fontSize: 25,
    },
    View2: {
        marginTop: 20,
        paddingHorizontal: 16
    },
    Text2: {
        fontSize: 20
    },
    View3: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 20
    },
    View4: {
        paddingHorizontal: 16,
        marginTop: 20
    },
    View5: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text3: {
        marginTop: 4
    },
    Image2: {
        height: 25,
        width: 25
    },
    Image3: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    View6: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View7: {
        paddingHorizontal: 16,
        marginTop: 35
    },
    Text4: {
        fontSize: 15,
        color: 'blue'
    },
    View8: {
        paddingHorizontal: 16,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image4: {
        width: 25,
        height: 25
    },
    View9: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    View10: {
        width: '100%',
        height: 230,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    View15: {
        width: '100%',
        height: 185,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    View11: {
        paddingHorizontal: 16,
        marginTop: 17
    },
    View12: {
        paddingHorizontal: 16,
        marginTop: 18,
        flexDirection: 'row'
    },
    Image8: {
        width: 28,
        height: 28
    },
    Text6: {
        fontSize: 20,
        marginLeft: 20
    },
    View13: {
        height: 24,
        width: 24,
        borderWidth: 2.5,
        borderRadius: 15,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image9: {
        width: 18,
        height: 18
    },
    Text7: {
        fontSize: 16,
        color: 'blue',
    },
    View14: {
        marginTop: 17,
        alignItems: 'flex-end',
        paddingHorizontal: 25
    },
    View16: {
        width: 240,
        height: 200,
        backgroundColor: '#e6e6e6',
        marginTop: 30,
        borderRadius: 5
    },
    View17: {
        alignSelf: 'flex-end'
    }
})