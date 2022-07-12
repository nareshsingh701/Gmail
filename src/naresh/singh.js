import { StyleSheet, Text, View, Button, Touchable } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition, subtraction } from '../store/action';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';

const Singh = (props) => {
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.View1} onPress={() => dispatch(addition())} >
                <Text style={styles.Text1}>Add</Text>
            </TouchableOpacity>

            <Text style={styles.Text2}>{data}</Text>

            <TouchableOpacity style={styles.View2} onPress={() => dispatch(subtraction())} >
                <Text style={styles.Text1}>subtract</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Singh

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text1: {
        fontSize: 25
    },
    View1: {
        width: 120,
        height: 50,
        backgroundColor: '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    View2: {
        width: 120,
        height: 50,
        backgroundColor: '#9900cc',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    Text2: {
        fontSize: 30,
        color: '#ff33ff',
        fontWeight: '800'
    }
})