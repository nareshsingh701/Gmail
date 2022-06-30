import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const NareshSingh7011111 = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity onPress={() => props.navigation.navigate('settings')} >
                    <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.Text1}>nareshsingh7011111@gmail</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/givn.png')} />
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
                    <Text style={styles.Text3}>Chat notification</Text>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/check.png')} />
                </View>
                <View style={styles.View5}>
                </View>
            </ScrollView>
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
        marginTop: 18
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
    }
})