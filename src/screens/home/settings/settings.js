import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const Settings = (props) => {
    const [ModalDot, setModalDot] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')} >
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>Settings</Text>
                <TouchableOpacity onPress={() => setModalDot(true)}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/givn.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('generalSettings')}>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>General settings</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('nareshSingh7011111')}>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>nareshsingh7011111@gmail.com</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('addAccount')}>
                <View style={styles.View2}>
                    <Text style={styles.Text2}>Add account</Text>
                </View>
            </TouchableOpacity>










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
                            <Text style={styles.Text3}>Clear search history </Text>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    View1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
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
        fontSize: 20,
        marginLeft: 30
    },
    View2: {
        marginTop: 30
    },
    Text2: {
        fontSize: 17,
    },
    View16: {
        width: 240,
        height: 120,
        backgroundColor: '#e6e6e6',
        marginTop: 100,
        borderRadius: 5
    },
    View17: {
        alignSelf: 'flex-end'
    },
    View3: {
        marginTop: 25,
        paddingHorizontal: 16
    },
    Text3: {
        fontSize: 20
    },
})