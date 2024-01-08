import { StyleSheet } from 'react-native';
import COLORS from '../../constants/color';

export const splashStyle = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  icon: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 20,
  },
});