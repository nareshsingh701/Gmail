import { StyleSheet, Text, View, Linking } from 'react-native'
import React, { useEffect } from 'react'

const Calendar = () => {
    useEffect(() => {
        {
            Platform.OS === 'ios' &&
                Linking.openURL('https://play.google.com/store/apps/details?id=com.google.android.calendar')
        }

    }, []);
    return (

        <View></View>
    )
}

export default Calendar

const styles = StyleSheet.create({})