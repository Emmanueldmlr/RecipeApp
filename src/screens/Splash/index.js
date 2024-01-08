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
        <View style={splashStyle.header}>
          <Image
            style={splashStyle.icon}
            source={require("../../../assets/logo.png")}
          />
          <Text style={splashStyle.text}>100k+ Premium Recipes</Text>
        </View>
        <View style={splashStyle.footer}>
          <Text style={splashStyle.footerHeaderText}>Get </Text>
          <Text style={splashStyle.footerHeaderText}>Cooking</Text>
          <Text style={splashStyle.footerText}>Simple ways to find Tasty Recipe</Text>
          <Button style={splashStyle.footerButton} onPress={() => alert("Hello World")}>Start Cooking</Button>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SplashScreen;
