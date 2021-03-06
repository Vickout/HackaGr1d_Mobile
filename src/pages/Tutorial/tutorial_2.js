import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import image from '../../assets/tutorial_2.png';

export default function TutorialTwo() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});