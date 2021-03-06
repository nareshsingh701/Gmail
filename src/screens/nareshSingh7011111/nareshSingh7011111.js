import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'

const NareshSingh7011111 = (props) => {

    const [ModalDot, setModalDot] = useState(false);

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckname, setToggleCheckname] = useState(false)
    const [toggleCheckview, setToggleCheckview] = useState(false)
    const [toggleCheckSmart, setToggleCheckSmart] = useState(false)
    const [google, setGoogle] = useState(false)
    const [email, setEmail] = useState(false)
    const [reply, setReply] = useState(false)
    const [chat, setChat] = useState(false)
    const [meet, setMeet] = useState(false)
    const [ringing, setRinging] = useState(false)
    const [usage, setUsage] = useState(false)
    const [messages, setMessages] = useState(false)
    const [when, setWhen] = useState(false)



    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('settings')} >
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>nareshsingh7011111@gmail</Text>
                <TouchableOpacity onPress={() => setModalDot(true)}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>Account</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text3}>Manage your Google Account</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Inbox</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text3}>Inbox type</Text>
                    <Text style={styles.Text4}>Default Inbox</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Inbox categories</Text>
                    <Text style={styles.Text4}>Primary, Promotions, Social</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Notification</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.Text3}>Email notification</Text>
                    <Text style={styles.Text4}>All</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Inbox notification</Text>
                    <Text style={styles.Text4}>Notify once</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Manage labels</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View7}>
                    <Text style={styles.Text3} onPress={() => setToggleCheckBox(!toggleCheckBox)}>Chat notification</Text>
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
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Snoozed chat notification</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Notification sounds</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Manage notification</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Generat</Text>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setToggleCheckname(!toggleCheckname)}>
                        <Text style={styles.Text3}>Chat</Text>
                        <Text style={styles.Text4}>Show the Chat and Spaces tabs</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckname}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setToggleCheckname(newValue)}
                    />
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Default reply action</Text>
                    <Text style={styles.Text4}>Reply</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Mobile signature</Text>
                    <Text style={styles.Text4}>Not set</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <TouchableOpacity onPress={() => setToggleCheckview(!toggleCheckview)}>
                        <Text style={styles.Text3}>Conversation view</Text>
                        <View style={styles.View9}>
                            <View style={styles.View8}>
                                <Text style={styles.Text4}>Group emails with the same topic together. This setting may take some time to apply.</Text>
                            </View>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckview}
                                boxType={'square'}
                                onCheckColor={'#fff'}
                                onFillColor={'blue'}
                                lineWidth={3}
                                tintColor={'#000'}
                                onValueChange={(newValue) => setToggleCheckview(newValue)}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <TouchableOpacity onPress={() => setToggleCheckSmart(!toggleCheckSmart)}>
                        <Text style={styles.Text3}>Smart features and personalisation</Text>
                        <View style={styles.View9}>
                            <View style={styles.View10}>
                                <Text style={styles.Text4}>Gmail, Chat and Meet may use my email, chat and video content to personalise my experience and provide smart features. If lopt out, such features will be turned off.</Text>
                            </View>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckSmart}
                                boxType={'square'}
                                onCheckColor={'#fff'}
                                onFillColor={'blue'}
                                lineWidth={3}
                                tintColor={'#000'}
                                onValueChange={(newValue) => setToggleCheckSmart(newValue)}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <TouchableOpacity onPress={() => setGoogle(!google)}>
                        <Text style={styles.Text3}>Smart features and personalisation in other Google products</Text>
                        <View style={styles.View9}>
                            <View style={styles.View10}>
                                <Text style={styles.Text4}>Gmail, Chat and Meet may use my email, chat and video content to personalise my experience and provide smart features. If lopt out, such features will be turned off.</Text>
                            </View>
                            <CheckBox
                                disabled={false}
                                value={google}
                                boxType={'square'}
                                onCheckColor={'#fff'}
                                onFillColor={'blue'}
                                lineWidth={3}
                                tintColor={'#000'}
                                onValueChange={(newValue) => setGoogle(newValue)}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setEmail(!email)}>
                        <Text style={styles.Text3}>Smart Compose in email</Text>
                        <Text style={styles.Text4}>Show predictive writing suggestions</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={email}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setEmail(newValue)}
                    />
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setReply(!reply)}>
                        <Text style={styles.Text3}>Smart Reply in email</Text>
                        <Text style={styles.Text4}>Show suggested replies when available</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={reply}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setReply(newValue)}
                    />
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setChat(!chat)}>
                        <Text style={styles.Text3}>Smart Reply in Chat</Text>
                        <Text style={styles.Text4}>Show suggested replies when available</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={chat}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setChat(newValue)}
                    />
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Manage blocked users</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Manage blocked spaces and chats</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Out of Office AutoReply</Text>
                    <Text style={styles.Text4}>Off</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Meet</Text>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setMeet(!meet)}>
                        <Text style={styles.Text3}>Show the Meet tab for video calling</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={meet}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setMeet(newValue)}
                    />
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setRinging(!ringing)}>
                        <Text style={styles.Text3}>Call ringing</Text>
                        <Text style={styles.Text4}>Ring for incoming calls</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={ringing}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setRinging(newValue)}
                    />
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Nudges</Text>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Reply and follow up</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Inbox tips</Text>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Inbox tips settings</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Data usage</Text>
                </View>
                <View style={styles.View7}>
                    <TouchableOpacity onPress={() => setUsage(!usage)}>
                        <Text style={styles.Text3}>Sync Gmail</Text>
                    </TouchableOpacity>
                    <CheckBox
                        disabled={false}
                        value={usage}
                        boxType={'square'}
                        onCheckColor={'#fff'}
                        onFillColor={'blue'}
                        lineWidth={3}
                        tintColor={'#000'}
                        onValueChange={(newValue) => setUsage(newValue)}
                    />
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Days of emails to sync</Text>
                    <Text style={styles.Text4}>30 days</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <TouchableOpacity onPress={() => setMessages(!messages)}>
                        <Text style={styles.Text3}>Download attachments</Text>
                        <View style={styles.View9}>
                            <View style={styles.View8}>
                                <Text style={styles.Text4}>Auto- download attachments to recent messages via WiFi</Text>
                            </View>
                            <CheckBox
                                disabled={false}
                                value={messages}
                                boxType={'square'}
                                onCheckColor={'#fff'}
                                onFillColor={'blue'}
                                lineWidth={3}
                                tintColor={'#000'}
                                onValueChange={(newValue) => setMessages(newValue)}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text3}>Images</Text>
                    <Text style={styles.Text4}>Always display external images</Text>
                </View>
                <View style={styles.View5}>
                </View>
                <View style={styles.View6}>
                    <TouchableOpacity onPress={() => setWhen(!when)}>
                        <Text style={styles.Text3}>Enable dynamic email</Text>
                        <View style={styles.View11}>
                            <View style={styles.View8}>
                                <Text style={styles.Text4} >Display dynamic email content when available</Text>
                            </View>
                            <CheckBox
                                disabled={false}
                                value={when}
                                boxType={'square'}
                                onCheckColor={'#fff'}
                                onFillColor={'blue'}
                                lineWidth={3}
                                tintColor={'#000'}
                                onValueChange={(newValue) => setWhen(newValue)}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
                            <View style={styles.View3}>
                                <Text style={styles.Text3}>Manage Accounts </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View3}>
                            <Text style={styles.Text3}>Help and feedback </Text>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default NareshSingh7011111

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
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
        fontSize: 22,
    },
    View2: {
        paddingHorizontal: 16,
        marginTop: 10
    },
    Text2: {
        fontSize: 15,
        color: 'blue'
    },
    View3: {
        paddingHorizontal: 16,
        marginTop: 25
    },
    Text3: {
        fontSize: 18,
        fontWeight: '500'
    },
    View4: {
        paddingHorizontal: 16,
        marginTop: 35
    },
    View5: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 18
    },
    View6: {
        paddingHorizontal: 16,
        marginTop: 18,
        justifyContent: 'space-between'
    },
    Text4: {
        fontSize: 16,
        marginTop: 3
    },
    View7: {
        paddingHorizontal: 16,
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image2: {
        width: 25,
        height: 25
    },
    View8: {
        flexDirection: 'row',
        width: 300
    },
    View9: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    View10: {
        width: 300
    },
    Image3: {
        width: 25,
        height: 25,
        marginTop: 16
    },
    View16: {
        width: 200,
        height: 120,
        backgroundColor: '#e6e6e6',
        marginTop: 40,
        borderRadius: 5
    },
    View17: {
        alignSelf: 'flex-end'
    },
    Image4: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    View11: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }


})