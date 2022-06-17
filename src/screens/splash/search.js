import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Search = (props) => {
    return (
        <View style={styles.container}>
            < View style={styles.Viewone}>
                <View style={styles.Viewfor}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                        <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Viewtow}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Search in emails'
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.Viewthree}>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/recorder.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.View}>
                    <TouchableOpacity>
                        <View style={styles.View2}>
                            <Text style={styles.Text1}>Labels</Text>
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
                    <TouchableOpacity>
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
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
    },
    Viewone: {
        flexDirection: 'row'
    },
    TextInput: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 70,
    },
    Imageone: {
        marginTop: 70,
        marginLeft: 10
    },
    Viewtow: {
        height: 120,
        width: 290,
        backgroundColor: '#e6e6e6',
    },
    Viewthree: {
        height: 120,
        width: 50,
        backgroundColor: '#e6e6e6',
    },
    Viewfor: {
        height: 120,
        width: 50,
        backgroundColor: '#e6e6e6',
    },
    View: {
        flexDirection: 'row'
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
    Text1: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 8
    },
    Image1: {
        marginLeft: 10,
        marginTop: 5
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
    View1: {
        width: 140,
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
})