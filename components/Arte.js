import { View, Text, ActivityIndicator, Alert, Image, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Estilos';
const Arte = ({ dato }) => {
  const medidas = dato.measurements[0].elementMeasurements;
  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image source={{ uri: dato.primaryImage }} style={{ height: 150, width: 150 }} />
      </View>
      <View style={styles.datosContainer}>
        <Text style={styles.titulo}>{dato.title}</Text>
        <Text style={styles.text}>Artista: {dato.artistDisplayName}</Text>
        <Text style={styles.text}>Tipo: {dato.classification}</Text>
        {medidas.Diameter ? (
          <Text style={styles.text}>Diámetro: {medidas.Diameter} cm</Text>
        ) : (
          <View>
            <Text style={styles.text}>Alto: {medidas.Height} cm</Text>
            {medidas.Width ? (
              <Text style={styles.text}>Ancho: {medidas.Width} cm</Text>
            ) : (
              <Text style={styles.text}>Peso: {medidas.Weight} kg</Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
const Artes = () => {
  const [datos, setDatos] = useState([])
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const ids = [436524, 705155, 190739, 816522, 360837, 343052, 347980, 208554, 207869]
    const fetchData = async () => {
      try {
        const promises = ids.map(async (id) => {
          const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
          return response.json();
        });

        const result = await Promise.all(promises);
        setDatos(result);
        setLoad(true);
      } catch (err) {
        Alert.alert('Ocurrió un error: ' + err);
      }
    };

    fetchData();
  }, [])
  const screenL = () => {
    return (
      <SafeAreaView>
        <FlatList
          data={datos}
          renderItem={({ item }) => <Arte dato={item} />}
          keyExtractor={item => item.objectID}
        />
      </SafeAreaView>
    )
  }
  const screenU = () => {
    return (
      <View>
        <Text style={styles.text}>Cargando datos...</Text>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <View>
      {load ? screenL() : screenU()}
    </View>
  )
}

export default Artes