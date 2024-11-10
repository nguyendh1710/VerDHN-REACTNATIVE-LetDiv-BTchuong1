import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    bottom: 25,
    right: 25,
    borderRadius: 30,
    position: "absolute",
    height: 60,
    width: 60,
    shadowColor: "#222",
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },

  linearContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
export default styles;
