import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color';

export const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        flex: 1,
        padding: 15,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

});