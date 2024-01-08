import { StyleSheet } from "react-native";
import COLORS from "../../constants/color";

export const buttonStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    width: "80%",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
});
