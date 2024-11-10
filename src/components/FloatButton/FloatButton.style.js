import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    left: 264,
    bottom: 95,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Dành cho Android
    borderRadius: 25,
  },

  gradient: {
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
  },
});
