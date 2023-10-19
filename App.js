import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from './assets/logo';
export default function App() {
  return (
  <View style={styles.container}>
    {/* <Image source={require('./assets/logo.png')} /> */}
    <Logo />
    <Text style={styles.text}> Next Phase</Text>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff',
  },
  text:{
    color:'white',
    fontSize:24,
    fontFamily:'Roboto',
  }
});
