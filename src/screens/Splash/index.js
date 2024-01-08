import React from 'react'
import { View, Text, ImageBackground, Image } from "react-native";
import Button from '../../components/Button';
import { splashStyle } from './styles';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../../../assets/splash.png")}
      style={splashStyle.imageBackground}
    >
      <View style={splashStyle.container}>
        <Image
          style={splashStyle.icon}
          source={require("../../../assets/logo.png")}
        />
        <Text style={splashStyle.text}>100k+ Premium Recipes</Text>
        <Button onPress={() => alert("Hello World")}>Start Cooking</Button>
      </View>
    </ImageBackground>
  );
}

export default SplashScreen;
