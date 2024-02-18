import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Artes from './components/Arte';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Pie />
    </View>
  );
}
export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.title}>ArtHub</Text>
    </View>
  )
}

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>
      <Artes />
    </View>
  )
}

export const Pie = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.text}>José de Jesús Vargas Esparza || 5° "A"</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000'
  },
  encabezado: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  cuerpo: {
    flex: 8,
    backgroundColor: '#363636',
    width:'100%'
  },
  pie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  title:{
    color:'white',
    fontSize:40
  },
  text:{
    color: 'white'
  }

});
