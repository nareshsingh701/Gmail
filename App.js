import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'
import NavigationComponent from './src/navigation/rootNavigation';
import Singh from './src/naresh/singh';
import { store } from './src/store/store';
//Custom Imports



const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Singh />
        {/* <NavigationComponent /> */}
      </Provider>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})