import 'react-native-gesture-handler';
import React from 'react'
// import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'
import NavigationComponent from './src/navigation/rootNavigation';

//Custom Imports
//import store from './src/redux/store';
// import NavigationComponent from './src/gmail'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Provider store={store}> */}
      <NavigationComponent />

      {/* </Provider> */}
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})