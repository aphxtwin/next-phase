import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/logo';

export default function FirstScreen() {
  return (
  <View style={styles.container}>
    <Logo />
    <Text style={styles.text}> NextPhase</Text>
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