import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Graficas = () => {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        data: [50, 80, 45, 60, 75, 90],
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ marginVertical: 20, marginHorizontal: 10, alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: 400,
            height: 100,
            marginBottom: 10,
          }}
          source={require('../assets/logotipo.png')}
        />
        <Text style={{ color: '#F04949', fontSize: 24, marginBottom: 10 }}>Ventas</Text>
      </View>
      <BarChart
        data={data}
        width={screenWidth - 20}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(240, 73, 73, ${opacity})`, // Cambiar a color rojo #F04949
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Graficas;
