import React from "react";
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

import image from '../../assets/tutorial_3.png';

export default function TutorialThree() {
    const navigation = useNavigation();

    function navigateToLogin() {
      navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
              <TouchableOpacity 
                style={styles.button}
                onPress={navigateToLogin}
              >
                <Text style={styles.textButton}>continuar <FontAwesome name="arrow-right" size={19} color="#1892d6" />
                </Text>          
              </TouchableOpacity>
            </ImageBackground>          
         </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 540

  },

  textButton: {
    color: "#1892d6",
    textDecorationLine: "underline",
    fontSize: 23,
    fontWeight: "bold"
  },

});