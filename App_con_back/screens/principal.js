import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Principal = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          style={styles.logo}
          source={require('../assets/logotipo.png')}
        />

        <Text style={styles.title}>Bienvenido!!</Text>

        <Image 
        style={styles.producto_img}
        source={{uri: "https://www.lego.com/cdn/cs/set/assets/bltf3373cedc39c4e7b/42161_alt1.png"}}
        />

        
        <Text style={styles.paragraph}>
        Sumérgete en la emoción de las carreras con el increíble set LEGO Speed Champions. Este set presenta un coche de carreras excepcionalmente detallado, diseñado para brindar una experiencia de construcción y juego emocionante.
        </Text>

        <Image 
        style={styles.producto_img}
        source={{uri: "https://m.media-amazon.com/images/I/81yzNCpfLQL.jpg"}} 
        />

        <Text style={styles.paragraph}>
        En el emocionante mundo de los vehículos de control remoto, el Explorador RC Pro-X destaca como una obra maestra de ingeniería y rendimiento. 
        </Text>

        <Image 
        style={styles.producto_img}
        source={{uri: "https://cdn.chaoscards.co.uk/uploads/prod_img/2_208170_e.png?v=-62169983925"}} 
        />

        <Text style={styles.paragraph}>
        Sumérgete en el mundo encantador y acogedor del Peluche de Abeja "Zummielicioso", una creación tierna y suave que te robará el corazón. Este adorable peluche no solo es un compañero perfecto para abrazar, sino que también es una obra de arte detallada que refleja la belleza y la dulzura de las abejas. 
        </Text>

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  
  scrollContent: {
    alignItems: 'center',
  },

  logo: {
    resizeMode: 'contain',
    width: 400,
    height: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 15,
    fontFamily: 'Roboto',
  },

  paragraph: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: 'Roboto',
  },

  producto_img: {
    resizeMode: 'contain',
    width: 400,
    height: 300,
    marginBottom: 20,
  },
});

export default Principal;
