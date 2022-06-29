import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Google = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('account')}>
                <View style={styles.View1}>
                    <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/back.png')} />
                </View>
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.View2}>
                    <Text style={styles.Text1}>Google</Text>
                </View>
                <View style={styles.View3}>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/good.png')} />
                    <View style={styles.View4}>
                        <Text style={styles.Text2}>nareshsingh7011111@gmail.com</Text>
                        <View style={styles.View4}>
                            <Text style={styles.Text3}>Google</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.View6}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Calender</Text>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/ok.png')} />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 29 June 2022, 8:23 am</Text>
                    </View>
                </View>
                <View style={styles.View6}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Contacts</Text>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/ok.png')} />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 28 June 2022, 4:16 pm</Text>
                    </View>
                </View>
                <View style={styles.View6}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Drive</Text>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/ok.png')} />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 24 June 2022, 5:34 am</Text>
                    </View>
                </View>
                <View style={styles.View6}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Gmail</Text>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/ok.png')} />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 28 June 2022, 4:18 pm</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.View7}>
                <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/more.png')} />
                <Text>More</Text>
            </View>



        </View>
    )
}

export default Google

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    View1: {
        marginTop: 35
    },
    Image1: {
        width: 30,
        height: 30
    },
    View2: {
        marginTop: 20
    },
    Text1: {
        fontSize: 30,
        fontWeight: '300'
    },
    View3: {
        alignItems: 'center',
        marginTop: 20
    },
    Text2: {
        fontSize: 20,
        fontWeight: '600'
    },
    View4: {
        marginTop: 7,
        alignSelf: 'center'
    },
    Text3: {
        color: 'gray',
        fontSize: 15
    },
    View5: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text4: {
        fontSize: 20,
        fontWeight: '600'
    },
    Image3: {
        marginTop: 8
    },
    View6: {
        marginTop: 35
    },
    View7: {
        marginTop: 50,
        alignItems: 'center'
    }
})