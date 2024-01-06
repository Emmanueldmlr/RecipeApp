import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyle } from './styles';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} >
        <Text style={buttonStyle.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button;
