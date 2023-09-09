import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Add animation logic here
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();

    // After the animation or any necessary initialization, navigate to the main screen
    setTimeout(() => {
      navigation.replace('SignInScreen'); // Replace 'MainScreen' with your main screen name
    }, 4000); // Adjust the time (in milliseconds) as needed
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
  source={require('../assets/img/splash.png')}
  style={[styles.image, { opacity: fadeAnim }]}
  resizeMode="contain" // O prueba otros valores como "cover" o "stretch"
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // Aumenta el tamaño del contenedor
    width: '100%', // Puedes usar '100%' para que ocupe todo el ancho de la pantalla
    height: '100%', // Puedes usar '100%' para que ocupe todo el alto de la pantalla
  },
  
  image: {
    width: 300, // Set the width of your image
    height: 300, // Set the height of your image
  },
});

export default SplashScreen;
