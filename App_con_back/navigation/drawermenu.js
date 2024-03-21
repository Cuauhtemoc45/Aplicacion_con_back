import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import LoginForm from '../screens/login';
import Principal from '../screens/principal';
import Graficas from '../screens/graficas';

const Drawer = createDrawerNavigator();

export function DrawerMenu() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuItems {...props} />}
    >
      <Drawer.Screen
        name="login"
        component={LoginForm}
        options={{ drawerLabel: () => null }}
      />
      <Drawer.Screen name="principal" component={Principal} />
      <Drawer.Screen name="grafica" component={Graficas} />

    </Drawer.Navigator>
  );
}

const MenuItems = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView style={stylesdraw.container}>
      <View style={stylesdraw.header}>
        <Text style={stylesdraw.menuText}>MENU</Text>
      </View>

      <TouchableOpacity
        style={stylesdraw.menuItem}
        onPress={() => navigateToScreen('principal')}
      >
        <Text style={stylesdraw.menuItemText}>Principal</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const stylesdraw = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuItem: {
    marginBottom: 15,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default DrawerMenu;
