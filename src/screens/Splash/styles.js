import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color';

export const splashStyle = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});