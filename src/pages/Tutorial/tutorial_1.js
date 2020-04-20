import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import image from '../../assets/tutorial_1.png';

export default function TutorialOne() {
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
    flexDirection: "column",
    backgroundColor: "#e4e4e4"
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
