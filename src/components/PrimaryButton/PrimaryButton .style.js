import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 30,
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Dành cho Android
    borderRadius: 20,
  },
  gradient: {
    width: 70,
    height: 30,
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
    ...StyleSheet.absoluteFillObject, // Đảm bảo chữ hiển thị trên gradient
  },
  buttonText: {
    position: "absolute",
    bottom: 5,

    zIndex: 1, // Đảm bảo chữ hiển thị trên gradient
    color: "blue",
    fontWeight: "700",
  },
});
