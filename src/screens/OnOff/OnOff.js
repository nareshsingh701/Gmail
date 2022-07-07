import { StyleSheet, Text, View, Icon } from 'react-native'
// import CheckBox from '@react-native-community/checkbox';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import React, { useState } from 'react'

const OnOff = () => {
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [data, setData] = useState(false)
    return (
        <View style={styles.container}>
            {/* <CheckBox
                disabled={false}
                boxType={'square'}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            /> */}

            <CircleCheckBox
                checked={data}
                innerColor='#0000ff'
                outerColor='#0000ff'
                filterSize='22'
                innerSize='14'
                onToggle={(data) => setData(data)}
                labelPosition={LABEL_POSITION.RIGHT}
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