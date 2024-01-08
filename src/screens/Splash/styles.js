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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    marginVertical: 60,
  },
  header: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 20,
  },
  footer: {
    alignItems: "center",
    width: "100%",
  },
  footerHeaderText: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    marginVertical: 20,
  },
  footerButton: {
    marginTop: 20,
  },
});