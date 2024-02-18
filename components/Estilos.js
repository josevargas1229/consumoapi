import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5E5E5E',
    padding:10,
    margin:15,
    borderRadius:10,
    flexDirection: 'row'
  },
  imagenContainer: {
    marginRight:10
  },
  datosContainer: {
    width:200,
  },
  titulo: {
    color:'white',
    fontWeight:'bold',
    maxWidth:'100%',
    fontSize:16,
    marginRight:15,
    marginBottom:5,
    alignSelf:'center'
  },
  text: {
    color:'white',
    maxWidth:'100%',
    marginRight:15,
    marginBottom:5
  }
});