import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CheckBox from '@react-native-community/checkbox';

const OnOff = () => {
    const [data, setdata] = useState([])
    const google = [
        {
            name: "Google",
            id: "1"
        },
        {
            name: "Ankush",
            id: "2"
        },
        {
            name: "Naresh",
            id: "3"
        },
        {
            name: "Name",
            id: "4"
        }
    ]

    const onValueChange = (itemSelected, index) => {
        const newData = data.map(newItem => {
            if (newItem.id == itemSelected.id) {
                return {
                    ...newItem,
                    selected: !item.selected
                }
            }
            return {
                ...newItem,
                selected: item.selected
            }
        })
        setdata(newData)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, marginTop: 20 }}>
                <TouchableOpacity style={styles.View} onPress={() => onValueChange(item.id)}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
                <CheckBox
                    value={item.selected}
                    disabled={false}
                    onAnimationType="fill"
                    offAnimationType='fade'
                    boxType='square'
                    onValueChange={() => onValueChange(item, index)}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={google}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}
export default OnOff;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View: {
        flexDirection: 'row',
    },
})