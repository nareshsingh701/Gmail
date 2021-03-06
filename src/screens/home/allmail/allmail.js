import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const Allmail = () => {
  const data = [

    {
      title: "Figma",
      date: "2 Jun",
      name: "Welcome to Figma!Let`s get you set..",
      storage: "Here are a few of our favorits ways t..",
      icon: require('../../../assets/images/figma.png'),
      Image: require('../../../assets/images/cd.png'),
    },
  ]
  const renderListData = (listDataa) => {
    const { item, index } = listDataa;
    return (
      <View style={styles.ViewTwo}>
        <TouchableOpacity>
          <View style={styles.Viewthree}>
            <Image resizeMode={'cover'} style={styles.Image2} source={item.icon} />
            <View style={styles.Viewfor} >
              <View style={styles.View8}>
                <Text style={styles.Textthree}>{item.title}</Text>
                <Text style={styles.Textfor}>{item.date}</Text>
              </View>
              <Text style={styles.Text5}>{item.name}</Text>
              <View style={styles.View6}>
                <Text style={styles.Text6}>{item.storage}</Text>
                <Image resizeMode={'cover'} style={styles.Image3} source={item.Image} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.View}>
          <TouchableOpacity>
            <View style={styles.View1}>
              <Text style={styles.Text1}>All emails</Text>
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
          <TouchableOpacity>
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
        <Text style={styles.Text2}>All mait</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image resizeMode={'cover'} style={styles.Image4} source={require('../../../assets/images/hide.png')} />
          <Text style={styles.Text2}>Hide filters</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListData}
      />
    </View>
  )
}

export default Allmail

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
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
    marginLeft: 10,
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
  Image2: {
    marginLeft: 3,
    marginTop: 5
  },
  Image5: {
    marginLeft: 3,
    marginTop: 5
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
  View5: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Text2: {
    marginTop: 20,
    fontSize: 15
  },
  Image4: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  ViewTwo: {
    height: 100,
    width: 370,
    borderRadius: 15,
    marginTop: 20
  },
  Viewthree: {
    flexDirection: 'row'
  },
  Image2: {
    height: 75,
    width: 75,
    marginTop: 7
  },
  Viewfor: {
    height: 90,
  },
  View8: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Textthree: {
    marginTop: 10,
    fontSize: 20,
  },
  Textfor: {
    marginTop: 15,
  },
  Text5: {
    marginTop: 6,
  },
  View6: {
    flexDirection: 'row'
  },
  Text6: {
    marginTop: 4
  },
  Image3: {
    marginLeft: 8,
    width: 20,
    height: 20,
    marginTop: 3
  },
}) 