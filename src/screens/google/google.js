import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'

const Google = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheck, setToggleCheck] = useState(false)
    const [toggleCheckname, setToggleCheckname] = useState(false)
    const [togglename, setTogglename] = useState(false)

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
                <TouchableOpacity style={styles.View6} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Calender</Text>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType={'circle'}
                            onCheckColor={'#fff'}
                            onFillColor={'blue'}
                            lineWidth={3}
                            tintColor={'#000'}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 29 June 2022, 8:23 am</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.View6} onPress={() => setToggleCheck(!toggleCheck)}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Contacts</Text>
                        <CheckBox
                            disabled={false}
                            value={toggleCheck}
                            boxType={'circle'}
                            onCheckColor={'#fff'}
                            onFillColor={'blue'}
                            lineWidth={3}
                            tintColor={'#000'}
                            onValueChange={(newValue) => setToggleCheck(newValue)}
                        />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 28 June 2022, 4:16 pm</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.View6} onPress={() => setTogglename(!togglename)}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Drive</Text>
                        <CheckBox
                            disabled={false}
                            value={togglename}
                            boxType={'circle'}
                            onCheckColor={'#fff'}
                            onFillColor={'blue'}
                            lineWidth={3}
                            tintColor={'#000'}
                            onValueChange={(newValue) => setTogglename(newValue)}
                        />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 24 June 2022, 5:34 am</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.View6} onPress={() => setToggleCheckname(!toggleCheckname)}>
                    <View style={styles.View5}>
                        <Text style={styles.Text4}>Gmail</Text>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckname}
                            boxType={'circle'}
                            onCheckColor={'#fff'}
                            onFillColor={'blue'}
                            lineWidth={3}
                            tintColor={'#000'}
                            onValueChange={(newValue) => setToggleCheckname(newValue)}
                        />
                    </View>
                    <View>
                        <Text style={styles.Text3} >Last synced 28 June 2022, 4:18 pm</Text>
                    </View>
                </TouchableOpacity>
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
        justifyContent: 'space-between',
        marginRight: 10
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