import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = (props) => {

    const ref = React.useRef(null);

    const onClicknext = () => {
        ref.current.setPage(1)
    }

    return (

        <PagerView ref={ref} style={styles.pagerView} initialPage={0}>
            <ScrollView>
                <View key="1" style={styles.container}>
                    <View>
                        <Image resizeMode={'cover'} style={styles.Imageone} source={require('../../assets/images/google.png')} />
                    </View>
                    <View style={styles.View1}>
                        <Text style={styles.Text1}>Welcome to Gmail</Text>
                    </View>
                    <View style={styles.View2}>
                        <Text style={styles.Text2}>One app for all of your emails</Text>
                    </View>
                    <View style={styles.View3}>
                    </View>
                    <View style={styles.View4}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('skip')}>
                            <Text style={styles.Text3}>SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClicknext}>
                            <Image resizeMode={'cover'} style={styles.Imagetow} source={require('../../assets/images/Than.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


            <ScrollView>
                <View key="2" style={styles.container2}>
                    <View>
                        <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/kkk.jpg')} />
                    </View>
                    <View style={styles.View6}>
                        <Text style={styles.Text4}>Gmail lets you get straight to</Text>
                        <Text style={styles.Text4}>the good stuff by sorting out</Text>
                        <Text style={styles.Text4}>Promotional and Social emails.</Text>
                    </View>
                    <View style={styles.View}>
                    </View>
                    <View style={styles.View5}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('skip')}>
                            <Text style={styles.Text5}>SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('skip')}>
                            <Text style={styles.Text6}>DONE</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </PagerView>

    );
};
export default MyPager
const styles = StyleSheet.create({
    container2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 20,
        paddingHorizontal: 16
    },
    Image: {
        width: 300,
        height: 300,
        marginTop: 40
    },
    Text4: {
        fontSize: 22,
    },
    View: {
        width: '100%',
        borderBottomWidth: 1,
        marginTop: 200,
    },
    Text5: {
        fontSize: 25,
        marginTop: 15
    },
    Text6: {
        fontSize: 25,
        marginTop: 15,
        marginLeft: 220
    },
    View5: {
        flexDirection: 'row'
    },
    View6: {
        marginTop: 120
    },















    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 20
    },
    pagerView: {
        flex: 1,
    },
    Imageone: {
        marginTop: 100,
        height: 200,
        width: 200
    },
    View1: {
        marginTop: 130
    },
    Text1: {
        fontSize: 30
    },
    View2: {
        marginTop: 20
    },
    Text2: {
        fontSize: 20
    },
    View3: {
        width: '100%',
        marginTop: 250,
        borderBottomWidth: 1

    },
    Text3: {
        marginRight: 170,
        fontSize: 20,
        marginTop: 15
    },
    View4: {
        flexDirection: 'row'
    },
    Imagetow: {
        width: 30,
        height: 30,
        marginTop: 15,
        marginLeft: 50
    },

});