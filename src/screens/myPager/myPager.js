import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
    return (

        <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1" style={styles.container}>
                <View>
                    <Text>First page</Text>
                </View>
            </View>
            <View key="2">
                <Text>Second page</Text>
            </View>
        </PagerView>

    );
};
export default MyPager
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagerView: {
        flex: 1,
    },

});