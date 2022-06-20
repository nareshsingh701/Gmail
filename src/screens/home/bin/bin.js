import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'

const Bin = () => {
    const data = [
        {
            title: "upGead Campus",
            date: "16 jun",
            name: "Fff",
            storage: "https://faq.whatsapp.com/general?lg..",
            icon: require('../../../assets/images/ccc.png'),

        },
    ]
    const renderListData = (listDataa) => {
        const { item, index } = listDataa;
        return (
            <View style={styles.ViewTwo}>
                <TouchableOpacity>
                    <View style={styles.Viewthree}>
                        <Image resizeMode={'cover'} style={styles.Image2} source={item.icon} />
                        <View style={styles.Viewfor} >
                            <View style={styles.View5}>
                                <Text style={styles.Textthree}>{item.title}</Text>
                                <Text style={styles.Textfor}>{item.date}</Text>
                            </View>
                            <View style={styles.View4}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={styles.View6}>
                                <Text>{item.storage}</Text>
                                <Image resizeMode={'cover'} style={styles.Image3} source={item.Image} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Viewone}>
                <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
                    <Text style={styles.Textone}>Search in emails</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.ImageTow} source={require('../../../assets/images/rama.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.View7}>
                <Text>Bin</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderListData}
            />

        </SafeAreaView >
    )
}

export default Bin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    Viewone: {
        height: 55,
        width: '100%',
        backgroundColor: '#e6e6e6',
        borderRadius: 30,
        flexDirection: 'row',
        marginTop: 10
    },
    Textone: {
        marginTop: 15,
        paddingHorizontal: 16,
        fontSize: 20
    },
    ViewTwo: {
        height: 100,
        width: '100%',
        borderRadius: 15,
        marginTop: 20,
    },
    Viewthree: {
        flexDirection: 'row',
        height: 100,
        width: 70,
    },
    Image2: {
        height: 70,
        width: 70,
        marginTop: 8,
    },
    Textthree: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    Viewfor: {
        height: 100,
        width: 280,
        marginLeft: 5
    },
    Textfor: {
        marginLeft: 50,
        fontWeight: 'bold'
    },
    View5: {
        flexDirection: 'row',
        marginTop: 10,
    },
    View6: {
        flexDirection: 'row',
        marginTop: 8
    },
    Image3: {
        width: 24,
        height: 24,
        marginLeft: 7
    },
    ImageTow: {
        marginLeft: 100,
        marginTop: 3
    },
    View4: {
        marginTop: 5
    },
    View7: {
        marginTop: 20
    }
})