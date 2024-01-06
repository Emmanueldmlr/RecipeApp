import React from 'react'
import { View, Text, ImageBackground } from "react-native";
import Button from '../../components/Button';
import { splashStyle } from './styles';

const SplashScreen = () => {
  return (
      <ImageBackground
        source={require("../../../assets/splash.png")}
        style={splashStyle.imageBackground}
      >
        <Text>100k+ Premium Recipes</Text>
        <Button onPress={() => alert("Hello World")}>Start Cooking</Button>
      </ImageBackground>
  );
}

export default SplashScreen;
