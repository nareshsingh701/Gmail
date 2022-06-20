import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Snoozed = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.Viewone}>
        <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
          <Text style={styles.Textone}>Search in emails</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.ImageTow} source={require('../../../assets/images/rama.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollView horizontal={true} >
          <View style={styles.View}>
            <TouchableOpacity>
              <View style={styles.View1}>
                <Text style={styles.Text1}>starred</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.View2}>
                <Text style={styles.Text1}>From</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.View3}>
                <Text style={styles.Text1}>To</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.View1}>
                <Text style={styles.Text1}>Attachment</Text>
                <Image resizeMode={'cover'} style={styles.Image5} source={require('../../../assets/images/doun.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.View2}>
                <Text style={styles.Text1}>Date</Text>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../../../assets/images/doun.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('lsunread')}>
              <View style={styles.View2}>
                <Text style={styles.Text1}>Is unread</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.View4}>
                <Text style={styles.Text1}>Exclude calendar updates</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.View5}>
          <Image resizeMode={'cover'} style={styles.Image3} source={require('../../../assets/images/badel.png')} />
          <Text style={styles.Text8}>Nothing in Snooxed</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Snoozed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
  },
  View5: {
    marginTop: 50
  },
  Image3: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  Text8: {
    fontSize: 25,
    alignSelf: 'center'
  },
  Viewone: {
    height: 55,
    width: '100%',
    backgroundColor: '#e6e6e6',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 10
  },
  Textone: {
    marginTop: 15,
    paddingHorizontal: 16,
    fontSize: 20
  },
  ImageTow: {
    marginLeft: 100,
    marginTop: 3
  },

  View: {
    flexDirection: 'row'
  },
  View1: {
    width: 140,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
    flexDirection: 'row'
  },
  Text1: {
    fontSize: 20,
    marginTop: 3,
    marginLeft: 10
  },
  Image1: {
    marginLeft: 15,
    marginTop: 5
  },
  Image5: {
    marginLeft: 3,
    marginTop: 5
  },
  View2: {
    width: 100,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
    flexDirection: 'row'
  },
  View3: {
    width: 75,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
    flexDirection: 'row'
  },
  View4: {
    height: 35,
    width: 245,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 15
  },
})