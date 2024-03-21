import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LoginForm from './screens/login';
import Principal from './screens/principal';
import Graficas from './screens/graficas';
import DataComponent from './screens/datos';

const Drawer = createDrawerNavigator();

export default function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.90.1:3000/datos');
        setDatos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  return (
    <><NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='login' component={LoginForm} />
        <Drawer.Screen name='Datos' component={DataComponent} />
        <Drawer.Screen name='graficas' component={Graficas} />
        <Drawer.Screen
          name='principal'
          component={Principal}
          initialParams={{ hidden: true }} // Pass a parameter to hide the screen initially
          options={({ route }) => ({
            drawerLabel: route.params && route.params.hidden ? () => null : 'Principal',
          })} />
      </Drawer.Navigator>
    </NavigationContainer>
    
    <View>
        {datos.map((dato, index) => (
          <Text key={index}>{dato}</Text>
        ))}
      </View></>
  );
}
