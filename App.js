import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import Boton from "./proyecto/otrapag"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>xd</Text>
      <Boton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#FFC107',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
