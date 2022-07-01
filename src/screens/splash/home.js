
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native'


const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <TouchableOpacity onPress={() => props.navigation.navigate('hometo')}>
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

  const navigateToScreen = () => {
    setModalVisible(false)
    props.navigation.navigate('setemail')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Viewone}>
        <TouchableOpacity onPress={() => props.navigation.navigate('search')}>
          <Text style={styles.Textone}>Search in emails</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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





      <View style={styles.centeredView}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.View8}>
                <TouchableOpacity
                  style={[styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Image resizeMode={'cover'} style={styles.Image5} source={require('../../assets/images/croos.png')} />
                </TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.Image7} source={require('../../assets/images/google_logo.png')} />
              </View>
              <View style={styles.View9}>
                <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/rama.png')} />
                <View style={styles.View11}>
                  <Text style={styles.Text1}>Naresh Singh</Text>
                  <Text>nareshsingh7011111@gmail</Text>
                </View>
              </View>
              <View style={styles.View12}>
                <Text style={styles.Text1}>Manage your Google Account</Text>
              </View>
              <View style={styles.View13}>
              </View>
              <TouchableOpacity onPress={() => {
                setModalVisible(false)
                props.navigation.navigate('storage')
              }}>
                <View style={styles.View14}>
                  <Image resizeMode={'cover'} style={styles.Image8} source={require('../../assets/images/cloud.png')} />
                  <Text style={styles.Text2}>Storage used: 0% of 15 GB</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View15}>
              </View>
              <TouchableOpacity onPress={navigateToScreen}>
                <View style={styles.View16}>
                  <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/user.png')} />
                  <Text style={styles.Text3}>Add another account</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setModalVisible(false)
                props.navigation.navigate('account')
              }}>
                <View style={styles.View17}>
                  <Image resizeMode={'cover'} style={styles.Image9} source={require('../../assets/images/settings.png')} />
                  <Text style={styles.Text3}>Manage accounts on this device</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View18}>
              </View>
              <View style={styles.View19}>
                <Text onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=en-GB')}>privacy policy</Text>
                <Text style={styles.Text4}>.</Text>
                <Text onPress={() => Linking.openURL('https://policies.google.com/terms?hl=en-GB')}>Terms of service</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>

    </SafeAreaView >
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20
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
    marginLeft: 5
  },
  Textfor: {
    marginLeft: 140,
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
    width: 20,
    height: 20,
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
  },




  centeredView: {
    flex: 1,
    marginTop: 140,
    paddingHorizontal: 16
  },
  modalView: {
    backgroundColor: "white",
    height: 385,
    width: '100%',
    borderRadius: 10,

  },
  Image5: {
    height: 30,
    width: 30,
    marginTop: 12
  },
  Image7: {
    height: 60,
    width: 100,
    marginLeft: 75
  },
  View8: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 16
  },
  View9: {
    flexDirection: "row",
    paddingHorizontal: 16
  },
  Image6: {
    height: 12,
    width: 12
  },
  View10: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 12,
  },
  View11: {
    marginTop: 6,
    marginLeft: 10
  },
  Text1: {
    fontWeight: '600',
    fontSize: 15
  },
  View12: {
    height: 32,
    width: 240,
    borderWidth: 1,
    marginLeft: 58,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7
  },
  View13: {
    borderWidth: 0.4,
    marginTop: 14
  },
  Image8: {
    width: 30,
    height: 30
  },
  View15: {
    borderWidth: 0.5,
    marginTop: 9
  },
  View14: {
    paddingHorizontal: 25,
    marginTop: 4,
    flexDirection: 'row'
  },
  Text2: {
    marginTop: 8,
    marginLeft: 18
  },
  Image9: {
    width: 25,
    height: 25
  },
  View16: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginTop: 20
  },
  Text3: {
    marginTop: 4,
    marginLeft: 20
  },
  View17: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginTop: 25
  },
  View18: {
    borderWidth: 0.5,
    marginTop: 20,

  },
  View19: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    marginTop: 15
  },
  Text4: {
    fontWeight: 'bold',
    fontSize: 18
  }

})