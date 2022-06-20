
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, } from 'react-native'


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
        <TouchableOpacity>
          <View style={styles.Viewthree}>
            <Image resizeMode={'cover'} style={styles.Image2} source={item.icon} />
            <View style={styles.Viewfor} >
              <View style={styles.View5}>
                <Text style={styles.Textthree}>{item.title}</Text>
                <Text style={styles.Textfor}>{item.date}</Text>
              </View>
              <View style={styles.View4}>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.View6}>
                <Text>{item.storage}</Text>
                <Image resizeMode={'cover'} style={styles.Image3} source={item.Image} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
      <View style={styles.View7}>
        <Text>Primary</Text>
      </View>
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
    paddingHorizontal: 16
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
  ViewTwo: {
    height: 100,
    width: '100%',
    borderRadius: 15,
    marginTop: 20,
  },
  Viewthree: {
    flexDirection: 'row',
    height: 100,
    width: 70,
  },
  Image2: {
    height: 70,
    width: 70,
    marginTop: 20,
  },
  Textthree: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  Viewfor: {
    height: 100,
    width: 280,
  },
  Textfor: {
    marginLeft: 150,
    fontWeight: 'bold'
  },
  View5: {
    flexDirection: 'row',
    marginTop: 10,
  },
  View6: {
    flexDirection: 'row',
    marginTop: 8
  },
  Image3: {
    width: 24,
    height: 24,
    marginLeft: 10
  },
  ImageTow: {
    marginLeft: 100,
    marginTop: 3
  },
  View4: {
    marginTop: 5
  },
  View7: {
    marginTop: 20
  }
})