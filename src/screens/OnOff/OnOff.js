import { StyleSheet, Text, View, Icon } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import React, { useState } from 'react'

const OnOff = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <CheckBox
                disabled={false}
                boxType={'square'}


                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />


        </View>
    )
}

export default OnOff

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})