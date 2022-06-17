
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, Alert } from 'react-native'


const Home = (props) => {
  const data = [

    {
      title: "Google",
      date: "26 May",
      name: "security alert",
      storage: "A new sing-in on Windows nareshi..",
      icon: require('../../assets/images/nam.png'),
      Image: require('../../assets/images/cd.png')
    },
  ]
  const renderListData = (listDataa) => {
    const { item, index } = listDataa;
    return (

      <View style={styles.ViewTwo}>
        <View style={styles.Viewthree}>
          <Image resizeMode={'cover'} style={styles.Image2} source={item.icon} />
          <View style={styles.Viewfor} >
            <View style={styles.View5}>
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
      </View>

    )
  }

  return (


    <SafeAreaView style={styles.container}>
      <View style={styles.Viewone}>

        <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
          <Text style={styles.Textone}>Search in emails</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.ImageTow} source={require('../../assets/images/rama.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.TextTwo}>Primary</Text>
      </View>
      {/* <View style={styles.ViewTwo}>
        <View style={styles.Viewthree}>
          <Image resizeMode={'cover'} style={styles.Image2} source={require('../../assets/images/nam.png')} />
          <View style={styles.Viewfor} >
            <View style={styles.View5}>
              <Text style={styles.Textthree}>Google</Text>
              <Text style={styles.Textfor}>26 May</Text>
            </View>
            <Text style={styles.Text5}>Security alert</Text>
            <View style={styles.View6}>
              <Text style={styles.Text6}>A new sing-in on Windows nareshi..</Text>
              <Image resizeMode={'cover'} style={styles.Image3} source={require('../../assets/images/cd.png')} />
            </View>
          </View>
        </View>
      </View> */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListData}
      />

    </SafeAreaView >
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Viewone: {
    height: 55,
    width: '90%',
    backgroundColor: '#e6e6e6',
    marginLeft: 19,
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 5
  },
  Imageone: {
    marginTop: 15,
    marginLeft: 20
  },
  Textone: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20
  },
  TextTwo: {
    marginLeft: 20,
    marginTop: 20
  },
  ViewTwo: {
    height: 100,
    width: 370,
    //backgroundColor: 'red',
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 10
  },
  Viewthree: {
    flexDirection: 'row'
  },
  Image2: {
    height: 75,
    width: 75,
    //marginTop: 20,
    marginLeft: 10
  },
  Textthree: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  Viewfor: {

    height: 90,
    width: 280,
    //backgroundColor: '#e5e'
  },
  Textfor: {
    marginLeft: 150,
    marginTop: 15,
    fontWeight: 'bold'
  },
  View5: {
    flexDirection: 'row'
  },
  Text5: {
    marginTop: 6,
    fontWeight: 'bold'
  },
  Text6: {
    marginTop: 8
  },
  View6: {
    flexDirection: 'row'
  },
  Image3: {
    marginLeft: 20
  },
  View7: {
    height: 90,
    width: "100%",
    backgroundColor: '#e6e6e6',
    marginTop: 455,
    flexDirection: 'row'
  },
  Image4: {
    height: 35,
    width: 35,
    marginLeft: 70,

  },
  Text7: {
    marginLeft: 70,
    fontSize: 17
  },
  Image5: {
    marginLeft: 180,
    height: 35,
    width: 35,

  },
  Text8: {
    marginLeft: 180,
    fontSize: 17,
  },
  ImageTow: {
    marginLeft: 120,
    marginTop: 4
  }
})