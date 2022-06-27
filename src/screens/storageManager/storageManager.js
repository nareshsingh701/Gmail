import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'

const StorageManager = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('storage')}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Storage Manager</Text>
            </View>
            <ScrollView>
                <View style={styles.View2}>
                </View>
                <View style={styles.View3}>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/one.png')} />
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text2}>Manage your account storage</Text>
                </View>
                <View style={styles.View5}>
                    <Text style={styles.Text3}>Clear up space across Gmail, Google Photos and Google Drive. Only files that count towards your current storage limit are shown.</Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/googleone/answer/9776477')}>
                    <View style={styles.View6}>
                        <Text style={styles.Text4}>Learn more</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.View7}>
                    <Text>Discardad items</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.View9}>
                        <View style={styles.View8}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/google.png')} />
                                <Text style={styles.Text5}>Deleted emails</Text>
                            </View>
                            <View style={styles.View11}>
                                <Text style={styles.Text6}>Emails that you moved to the bin but haven`t been paemanently deleted</Text>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text7}>No emails in the bin</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.View8}>
                        <View style={styles.View10}>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/google.png')} />
                            <Text style={styles.Text5}>Spam emails</Text>
                        </View>
                        <View style={styles.View11}>
                            <Text style={styles.Text6}>Emails marked as spam</Text>
                        </View>
                        <View style={styles.View13}>
                            <Text style={styles.Text7}>No spam emails</Text>
                        </View>
                    </View>
                    <View style={styles.View9}>
                        <View style={styles.View8}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/drive.png')} />
                                <Text style={styles.Text5}>Deleted files</Text>
                            </View>
                            <View style={styles.View11}>
                                <Text style={styles.Text6}>Files that you movedx to the bin but haven`t been permanently deleted</Text>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text7}>No files in the bin</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.View14}>
                </View>
                <View style={styles.View}>
                    <Text>Large items</Text>
                </View>
                <ScrollView horizontal={true}>

                    <View style={styles.View9}>
                        <View style={styles.View15}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/google.png')} />
                                <Text style={styles.Text5}>Emails with large attachments</Text>
                            </View>
                            <View style={styles.View16}>
                            </View>
                            <View style={styles.View16}>
                            </View>
                            <View style={styles.View17}>
                                <Text style={styles.Text7}>No files in the bin</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.View9}>
                        <View style={styles.View15}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/drive.png')} />
                                <Text style={styles.Text5}>Large files</Text>
                            </View>
                            <View style={styles.View19}>
                                <View style={styles.View18}>
                                </View>
                                <View style={styles.View18}>
                                </View>
                                <View style={styles.View18}>
                                </View>
                                <View style={styles.View18}>
                                </View>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text7}>No large files</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.View9}>
                        <View style={styles.View15}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/photos.png')} />
                                <Text style={styles.Text5}>Large photos and videos</Text>
                            </View>
                            <View style={styles.View19}>
                                <View style={styles.View18}>
                                </View>
                                <View style={styles.View18}>
                                </View>
                                <View style={styles.View18}>
                                </View>
                                <View style={styles.View18}>
                                </View>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text7}>No large photos and videos</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.View14}>
                </View>
                <View style={styles.View}>
                    <Text>Other items</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.View9}>
                        <View style={styles.View8}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/photos.png')} />
                                <Text style={styles.Text5}>Unsupported videos</Text>
                            </View>
                            <View style={styles.View11}>
                                <Text style={styles.Text6}>Videos that Google Photos can`t  process or play</Text>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text7}>No unsupported videos</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.View9}>
                        <View style={styles.View8}>
                            <View style={styles.View10}>
                                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/folder.png')} />
                                <Text style={styles.Text5}>Device storage</Text>
                            </View>
                            <View style={styles.View11}>
                                <Text style={styles.Text6}>In addition to freeing up cloud storage, clean up storage on your device</Text>
                            </View>
                            <View style={styles.View12}>
                                <Text style={styles.Text}>No unsupported videos</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default StorageManager

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,

    },
    View1: {
        height: 40,
        flexDirection: 'row',
        marginTop: 40,
        paddingHorizontal: 16
    },
    Text1: {
        fontSize: 20,
        marginLeft: 20
    },
    Image1: {
        width: 25,
        height: 25
    },
    View2: {
        borderWidth: 0.4,
        marginTop: 20
    },
    View3: {
        alignSelf: 'center',
        marginTop: 30
    },
    Image2: {
        height: 65,
        width: 65
    },
    View4: {
        alignItems: 'center'
    },
    Text2: {
        fontSize: 22
    },
    View5: {
        paddingHorizontal: 30,
        marginTop: 25
    },
    Text3: {
        textAlign: 'center',
        fontSize: 16
    },
    View6: {
        width: 150,
        height: 45,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text4: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '400'
    },
    View7: {
        paddingHorizontal: 16,
        marginTop: 60
    },
    View8: {
        height: 160,
        width: 300,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 16,
        borderRadius: 15,
        marginTop: 30
    },
    View9: {
        paddingHorizontal: 16,
    },
    Image3: {
        width: 30,
        height: 30,
        marginTop: 10
    },
    Text5: {
        marginTop: 14,
        fontSize: 17,
        marginLeft: 10
    },
    View10: {
        flexDirection: 'row'
    },
    View11: {
        marginTop: 15,
    },
    Text6: {
        lineHeight: 23
    },
    View12: {
        marginTop: 20
    },
    Text7: {
        fontSize: 16
    },
    View13: {
        marginTop: 40
    },
    View14: {
        borderWidth: 0.5,
        marginTop: 25
    },
    View15: {
        height: 160,
        width: 300,
        backgroundColor: '#e6e6e6',
        paddingHorizontal: 16,
        borderRadius: 15,
        marginTop: 30
    },
    View16: {
        width: '100%',
        height: 30,
        backgroundColor: '#bfbfbf',
        borderRadius: 20,
        marginTop: 10
    },
    View17: {
        marginTop: 12
    },
    View18: {
        height: 55,
        width: 55,
        backgroundColor: '#bfbfbf',
        marginTop: 10,
        borderRadius: 5,
        marginLeft: 10
    },
    View19: {
        flexDirection: 'row'
    },
    View: {
        paddingHorizontal: 16,
        marginTop: 30
    },
    Text: {
        fontSize: 16,
        color: 'blue'
    }
})