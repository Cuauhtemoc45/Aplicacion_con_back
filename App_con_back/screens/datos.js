import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/datos');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Datos de la Base de Datos:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Edad: {item.password}</Text>
            {/* Agrega más campos según la estructura de tus datos */}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No hay datos disponibles</Text>}
      />
    </View>
  );
};

export default DataComponent;
