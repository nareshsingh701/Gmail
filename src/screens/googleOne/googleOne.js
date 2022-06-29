import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'

const GoogleOne = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <View style={styles.View2}>
                    <View style={styles.View3}>
                        <Image resizeMode={'cover'} style={styles.Image1} source={require('../../assets/images/google_logo.png')} />
                        <Text style={styles.Text1}>One</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                        <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/croos.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.View4}>
                    <View style={styles.View5}>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/attention.png')} />
                        <Text style={styles.Text2}>Some payment options arent available.</Text>
                    </View>
                    <View style={styles.View6}>
                        <Text>Due to Reserve Bank of India regulations, you can only use certain payment methods to buy recurring subscriptions.</Text>
                    </View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://support.google.com/googleone/answer/9003634?hl=en-GB&co=GENIE.Platform%3DAndroid')}>
                        <View style={styles.View7}>
                            <View style={styles.View8}>
                                <Text style={styles.Text3}>Learn more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.View9}>
                    <Text style={styles.Text4}>Get more storage with Google One</Text>
                </View>

                <View style={styles.View10}>
                    <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/round.png')} />
                    <Text style={styles.Text5}>Monthly</Text>
                    <View style={styles.View11}>
                        <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/round.png')} />
                        <Text style={styles.Text5}>Monthly</Text>
                    </View>
                </View>
                <View style={styles.View12}>
                    <View style={styles.View13}>
                        <View style={styles.View14}>
                            <Text style={styles.Text6}>RECOMMENDED</Text>
                            <Text style={styles.Text7}>100 GB</Text>
                        </View>
                        <View style={styles.View15}>
                            <Text style={styles.Text3}>130/month</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.View12}>
                    <View style={styles.View16}>
                        <View style={styles.View18}>
                            <Text style={styles.Text8}>200 GB</Text>
                        </View>
                        <View style={styles.View17}>
                            <Text style={styles.Text9}>210/month</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.View12}>
                    <View style={styles.View16}>
                        <View style={styles.View18}>
                            <Text style={styles.Text8}>2 TB</Text>
                        </View>
                        <View style={styles.View17}>
                            <Text style={styles.Text9}>650/month</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.View19}>
                    <Text style={styles.Text10}>Not ready to get storage? <Text style={styles.Text11} onPress={() => props.navigation.navigate("storageManager")} >Clean up account storage</Text></Text>

                </View>
                <View style={styles.View20}>
                    <Text>You can cancel or make changes at any time. Storage is used for Drive,photosand Gmail.</Text>
                </View>
                <View style={styles.View20}>
                    <Text>By getti a Google One plan,you agree to the <Text style={styles.Text11} onPress={() => Linking.openURL('https://one.google.com/terms-of-service?hl=en_IN')}>Google One terms of Service. </Text><Text> The <Text style={styles.Text11} onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=en-GB')}>Google Privacy Policy</Text></Text></Text>
                    <Text>describes how data is handled in thi service.</Text>
                </View>
            </ScrollView>


        </View>
    )
}

export default GoogleOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    View1: {
        marginTop: 50,
        paddingHorizontal: 16,
    },
    View2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View3: {
        flexDirection: 'row'
    },
    Text1: {
        fontSize: 17
    },
    Image1: {
        width: 70,
        height: 20
    },
    Image2: {
        width: 25,
        height: 25
    },
    View4: {
        width: '100%',
        height: 150,
        backgroundColor: '#c1d1f0',
        marginTop: 20
    },
    Image3: {
        width: 25,
        height: 25,
    },
    View5: {
        paddingHorizontal: 16,
        marginTop: 15,
        flexDirection: 'row'
    },
    Text2: {
        marginLeft: 15,
        fontWeight: '600'
    },
    View6: {
        marginLeft: 58,
    },
    View7: {
        paddingHorizontal: 16,
        marginTop: 18
    },
    View8: {
        height: 30,
        width: 150,
        backgroundColor: '#002db3',
        borderRadius: 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text3: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    },
    View9: {
        alignSelf: 'center',
        marginTop: 25
    },
    Text4: {
        fontSize: 20
    },
    View10: {
        marginTop: 20,
        flexDirection: "row",
        marginLeft: 80
    },
    Text5: {
        fontSize: 16,
        marginTop: 3,
        marginLeft: 20
    },
    View11: {
        flexDirection: 'row',
        marginLeft: 35
    },
    View12: {
        paddingHorizontal: 16,

    },
    View13: {
        borderWidth: 1,
        height: 75,
        width: '100%',
        borderRadius: 10,
        marginTop: 20,
        borderColor: 'green',
        borderBottomColor: 'red',
        borderLeftColor: 'blue',
        borderEndColor: 'yellow',
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View14: {
        marginTop: 15,
    },
    Text6: {
        color: 'blue',
        fontSize: 12
    },
    Text7: {
        fontSize: 20,
        marginTop: 5
    },
    View15: {
        height: 40,
        width: 150,
        backgroundColor: '#002db3',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    View16: {
        borderWidth: 1,
        height: 75,
        width: '100%',
        paddingHorizontal: 16,
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    View18: {
        justifyContent: 'center',
    },
    Text8: {
        fontSize: 20
    },
    View17: {
        height: 40,
        width: 150,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }, Text9: {
        color: 'blue'
    },
    View19: {
        paddingHorizontal: 17,
        marginTop: 30
    },
    Text10: {
        fontSize: 16
    },
    Text11: {
        color: 'blue'
    },
    View20: {
        paddingHorizontal: 17,
        marginTop: 20
    }

})