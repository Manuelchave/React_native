import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponents from './src/components/CatComponents';

export default function App() {
  return (
    <View style={styles.container}>
    
       <CatComponents nombre="Rober" raza="calle" foto="https://reactnative.dev/docs/assets/p_cat2.png"></CatComponents>
       <CatComponents nombre="Manuel" raza="negro" foto="https://reactnative.dev/docs/assets/p_cat1.png"></CatComponents>

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
