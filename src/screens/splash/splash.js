import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("home")

        }, 2000);
    }, []);
    return (
        <View></View>

    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})