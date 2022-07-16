import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'


const OnOff = () => {
    const [checkeds, setcheckeds] = useState(false);

    return (
        <View style={styles.container}>
            {checkeds == false ?
                <View>
                    <Text style={styles.Text8}>ON</Text>
                </View>
                :
                <View>
                    <Text style={styles.Text8}>off</Text>
                </View>
            }
            <TouchableOpacity onPress={() => setcheckeds(!checkeds)}>
                <Text>wert</Text>
            </TouchableOpacity>

        </View>
    );
};


export default OnOff

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})