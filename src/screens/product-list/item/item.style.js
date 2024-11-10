import { StyleSheet, Text, View, Button, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 100,
    marginBottom: 20,
    gap: 15,
    borderWidth: 0.5,
    borderColor: "#495057",
    borderRadius: 10,
  },
  image: {
    flex: 1.5,
    borderRadius: 5,
    resizeMode: "cover",
  },
  infoBox: {
    flex: 3,
    gap: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#343a40",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "500",
    color: "#37d24d",
  },
  highlight: {
    fontWeight: "700",
  },
  deleteButton: {
    backgroundColor: "blue",
    fontSize: 18,
    fontWeight: "500",
    color: "#37d24d",
    paddingVertical: 80,
  },
});
export default styles;
