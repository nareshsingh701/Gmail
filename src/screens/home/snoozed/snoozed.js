import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Snoozed = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/badel.png')} />
      <Text style={styles.Text1}>Nothing in Snooxed</Text>
    </View>
  )
}

export default Snoozed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  Image1: {
    width: 250,
    height: 250
  },
  Text1: {
    fontSize: 25
  }
})