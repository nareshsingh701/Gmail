import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Lsunread = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.Viewone}>
                <TouchableOpacity onPress={() => props.navigation.navigate('important')}>
                    <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/back.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('searchTow')}>
                    <Text style={styles.Textone}>Search in emails</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <ScrollView horizontal={true}>
                    <View style={styles.View}>
                        <TouchableOpacity>
                            <View style={styles.View1}>
                                <Text style={styles.Text1}>Important</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View2}>
                                <Text style={styles.Text1}>From</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View3}>
                                <Text style={styles.Text1}>To</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View1}>
                                <Text style={styles.Text1}>Attachment</Text>
                                <Image resizeMode={'cover'} style={styles.Image5} source={require('../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View2}>
                                <Text style={styles.Text1}>Date</Text>
                                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/doun.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('lsunread')}>
                            <View style={styles.View2}>
                                <Text style={styles.Text1}>Is unread</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.View4}>
                                <Text style={styles.Text1}>Exclude calendar updates</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.View6}>
                    <Image resizeMode={'cover'} style={styles.Imagesearch} source={require('../../assets/images/search2.png')} />
                    <Text style={styles.Text}>No matches for this seach</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Lsunread

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    Viewone: {
        width: '100%',
        height: 60,
        backgroundColor: '#e6e6e6',
        marginTop: 55,
        borderRadius: 30,
        flexDirection: 'row'
    },
    Imageone: {
        marginTop: 15,
        marginLeft: 18,
        width: 30,
        height: 30
    },
    Textone: {
        fontSize: 20,
        marginTop: 17,
        marginLeft: 18
    },
    View: {
        flexDirection: 'row'
    },
    View1: {
        width: 140,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        borderRadius: 10,
        marginLeft: 15,
        flexDirection: 'row'
    },
    Text1: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 10
    },
    Image1: {
        marginLeft: 15,
        marginTop: 5
    },
    View2: {
        width: 100,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    View3: {
        width: 75,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row'
    },
    Image5: {
        marginLeft: 3,
        marginTop: 5
    },
    View4: {
        height: 35,
        width: 245,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 15
    },
    View5: {
        flexDirection: 'row'
    },
    Text2: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 15
    },
    Image4: {
        width: 30,
        height: 30,
        marginTop: 15,
        marginLeft: 150
    },
    Imagesearch: {
        width: 250,
        height: 250
    },
    View6: {
        alignItems: 'center',
        marginTop: 100
    },
    Text: {
        fontSize: 20
    }
})