import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Switch, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'

const XiaomiCloud = (props) => {
    const [checked, setchecked] = useState(false);
    const [checkeds, setcheckeds] = useState(false);
    const [naresh, setnaresh] = useState(false);
    const [phrases, setphrases] = useState(false);
    const [name, setname] = useState(false);
    const [Cloud, setCloud] = useState(false);
    const [Name, setName] = useState(false);
    const [Off, setOff] = useState(false);
    const [Messages, setMessages] = useState(false);
    const [Last, setLast] = useState(false);
    const [Audio, setAudio] = useState(false);
    const [History, setHistory] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('account')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCloud(true)}>
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
                    <TouchableOpacity onPress={() => setcheckeds(!checkeds)}>
                        <View style={styles.View11}>
                            <View style={styles.View12}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/restore.png')} />
                                <Text style={styles.Text5}>Backups</Text>
                            </View>
                            <View style={styles.View13}>
                                {checkeds == false ?
                                    <View>
                                        <Text style={{ fontSize: 16 }}>off</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={{ fontSize: 16 }}>on</Text>
                                    </View>
                                }
                                <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setName(!Name)}>
                        <View style={styles.View11}>
                            <View style={styles.View12}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/iphone.png')} />
                                <Text style={styles.Text5}>Find device</Text>
                            </View>
                            <View style={styles.View13}>
                                {Name == false ?
                                    <View>
                                        <Text style={{ fontSize: 16 }}>on</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={{ fontSize: 16 }}>off</Text>
                                    </View>
                                }
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
                </View>
                <View style={styles.View9}>
                </View>
                <View style={styles.View14}>
                    <Text style={styles.Text2} >Sync app data</Text>
                    <View style={styles.View15}>
                        <Text style={styles.Text3}>Sync</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setOff(!Off)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/gallery.png')} />
                            <View>
                                <Text style={styles.Text7}>Gallery</Text>
                                <Text style={styles.Text8}>Photos and videos</Text>
                            </View>
                        </View>
                        <View style={styles.View18}>
                            {Off == false ?
                                <View>
                                    <Text style={{ fontSize: 16 }}>on</Text>
                                </View>
                                :
                                <View>
                                    <Text style={{ fontSize: 16 }}>off</Text>
                                </View>
                            }
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMessages(!Messages)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/messages.png')} />
                            <View>
                                <Text style={styles.Text7}>Messages</Text>
                                <Text style={styles.Text8}>Text messages</Text>
                            </View>
                        </View>
                        <View style={styles.View18}>
                            {Messages == false ?
                                <View>
                                    <Text style={{ fontSize: 16 }}>off</Text>
                                </View>
                                :
                                <View>
                                    <Text style={{ fontSize: 16 }}>on</Text>
                                </View>
                            }
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLast(!Last)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/contacts.png')} />
                            <View>
                                <Text style={styles.Text7}>Contacts</Text>
                                <Text style={styles.Text8}>Last synced: 14 hrs ago</Text>
                            </View>
                        </View>
                        <View style={styles.View18}>
                            {Last == false ?
                                <View>
                                    <Text style={{ fontSize: 16 }}>on</Text>
                                </View>
                                :
                                <View>
                                    <Text style={{ fontSize: 16 }}>off</Text>
                                </View>
                            }
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAudio(!Audio)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/audio.png')} />
                            <View>
                                <Text style={styles.Text7}>Recorder</Text>
                                <Text style={styles.Text8}>Audio and call recordings</Text>
                            </View>
                        </View>
                        <View style={styles.View18}>
                            {Audio == false ?
                                <View>
                                    <Text style={{ fontSize: 16 }}>on</Text>
                                </View>
                                :
                                <View>
                                    <Text style={{ fontSize: 16 }}>off</Text>
                                </View>
                            }
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setHistory(!History)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/phone.png')} />
                            <View>
                                <Text style={styles.Text7}>Call history</Text>
                                <Text style={styles.Text8}>Call history</Text>
                            </View>
                        </View>
                        <View style={styles.View18}>
                            {History == false ?
                                <View>
                                    <Text style={{ fontSize: 16 }}>off</Text>
                                </View>
                                :
                                <View>
                                    <Text style={{ fontSize: 16 }}>on</Text>
                                </View>
                            }
                            <Image resizeMode={'cover'} style={styles.Image4} source={require('../../assets/images/greater.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setchecked(!checked)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/note.png')} />
                            <View>
                                <Text style={styles.Text7}>Notes</Text>
                                {checked == false ?
                                    <View>
                                        <Text style={styles.Text8}>Notes</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.Text8}>Last synced: 49 mins ago</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={styles.View18}>
                            <Switch
                                value={checked}
                                onValueChange={() => setchecked(!checked)}
                                trackColor={{ false: '#767577', true: '#0000ff' }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setcheckeds(!checkeds)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/calendar.png')} />
                            <View>
                                <Text style={styles.Text7}>Calendar</Text>
                                {checkeds == false ?
                                    <View>
                                        <Text style={styles.Text8}>Events</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.Text8}>Last synced: just now</Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={styles.View18}>
                            <Switch
                                value={checkeds}
                                onValueChange={() => setcheckeds(!checkeds)}
                                trackColor={{ false: '#767577', true: '#0000ff' }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setnaresh(!naresh)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/wifi.png')} />
                            <View>
                                <Text style={styles.Text7}>Wi-Fi</Text>
                                {naresh == false ?
                                    <View>
                                        <Text style={styles.Text8}>Wi-Fi settings</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.Text8}>Last synced: 8 mins ago </Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={styles.View18}>
                            <Switch
                                value={naresh}
                                onValueChange={() => setnaresh(!naresh)}
                                trackColor={{ false: '#767577', true: '#0000ff' }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setphrases(!phrases)}>
                    <View style={styles.View16}>
                        <View style={styles.View17}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/big.png')} />
                            <View>
                                <Text style={styles.Text7}>Frequent phrases</Text>
                                {phrases == false ?
                                    <View>
                                        <Text style={styles.Text8}>Frequent phrases</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.Text8}>Last synced: 5 mins ago </Text>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={styles.View18}>
                            <Switch
                                value={phrases}
                                onValueChange={() => setphrases(!phrases)}
                                trackColor={{ false: '#767577', true: '#0000ff' }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.View9}>
                </View>
                <View style={styles.View19}>
                    <Text style={styles.Text9}>SYNC SETTINGS</Text>
                </View>
                <TouchableOpacity onPress={() => setname(!name)}>
                    <View style={styles.View19}>
                        <Text style={styles.Text10}>Quick sync</Text>
                    </View>
                    <View style={styles.View21}>
                        <View style={styles.View20}>
                            <Text style={styles.Text11} >Sync app data in real time. Power consumption will increase when this feature is on.</Text>
                        </View>
                        <View>
                            <Switch
                                value={name}
                                onValueChange={() => setname(!name)}
                                trackColor={{ false: '#767577', true: '#0000ff' }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView >
            <Modal
                animationType="none"
                transparent={true}
                visible={Cloud}
            >
                <Pressable style={{ flex: 1, paddingHorizontal: 20, alignItems: 'flex-end' }} onPress={() => setCloud(false)}>
                    <View style={styles.View22}>
                        <Text style={{ fontSize: 18, marginTop: 16, color: "#000" }}>Terms and conditions</Text>
                        <Text style={{ fontSize: 18, marginTop: 30, color: "#000" }}>Help and feedback</Text>
                        <TouchableOpacity
                            style={[styles.croos, styles.buttonClose]}
                            onPress={() => setCloud(!Cloud)}
                        >
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </View >
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
        marginTop: 45,
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
        marginTop: 15
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
    },
    View16: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30

    },
    View17: {
        flexDirection: 'row'
    },
    Text7: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 8
    },
    Image3: {
        width: 50,
        height: 50
    },
    Image4: {
        width: 25,
        height: 25
    },
    View18: {
        flexDirection: 'row',
        marginTop: 10
    },
    Text8: {
        marginLeft: 20,
        fontWeight: '200'
    },
    Image7: {
        width: 50,
        height: 50
    },
    View19: {
        marginTop: 30
    },
    Text9: {
        color: 'gray'
    },
    Text10: {
        fontSize: 20,
        fontWeight: '500'
    },
    View20: {
        width: 250,
    },
    Text11: {
    },
    View21: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    View22: {
        width: 210,
        height: 120,
        backgroundColor: '#fff',
        marginTop: 40,
        borderRadius: 10,
        paddingHorizontal: 18
    }
})