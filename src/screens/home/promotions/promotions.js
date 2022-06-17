import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Promotions = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Text1}>Promotions</Text>
            </View>
            <TouchableOpacity>
                <View>
                    <View style={styles.View1}>
                        <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/kamla.png')} />
                        <View>
                            <Text style={styles.Text2}>Coding Ninjas India</Text>
                            <View style={styles.View2}>
                                <View style={styles.View3}>
                                    <Text style={styles.Text3}>Ad</Text>
                                </View>
                                <Text style={styles.Text4}>Course designed exclusively...</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.Image2} source={require('../../../assets/images/givn.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.View4}>
                        <TouchableOpacity>
                            <View style={styles.View5}>
                                <Text style={styles.Text5}>Min Salary Commitment o...</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/cd.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Promotions

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Text1: {
        marginTop: 20,
        marginLeft: 20
    },
    View1: {
        flexDirection: 'row'
    },
    Image1: {
        marginLeft: 15,
        marginTop: 25
    },
    Text2: {
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        fontSize: 20
    },
    Image2: {
        marginLeft: 30,
        marginTop: 20
    },
    View2: {
        flexDirection: 'row'
    },
    View3: {
        width: 22,
        height: 20,
        borderWidth: 1,
        marginLeft: 15,
    },
    Text3: {
        color: '#196619'
    },
    Text4: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    View4: {
        flexDirection: 'row'
    },
    View5: {
        width: 240,
        height: 30,
        borderWidth: 1,
        marginLeft: 85,
        borderRadius: 25,
        borderColor: 'gray',
    },
    Text5: {
        fontSize: 16,
        marginTop: 5,
        marginLeft: 10,
        color: '#0000cc'
    },
    Image3: {
        marginLeft: 20
    }
})