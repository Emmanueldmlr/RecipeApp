import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native';
import { buttonStyle } from './styles';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle.container}>
        <Text style={buttonStyle.buttonText}>{children}</Text>
        <Image style={buttonStyle.icon} source={require("../../../assets/arrowRight.png")}/>
    </TouchableOpacity>
  )
}

export default Button;
