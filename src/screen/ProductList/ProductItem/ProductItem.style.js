import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "#8fff",

    marginVertical: 5,
    paddingHorizontal: 5,
    position: 'relative',
  },
  title: {
    fontWeight: "700",

    fontSize: 20,
  },

  image: {
    width: 30,
    height: 30,
  },
  button: {

    
      position: 'absolute',
      top: 50, // Di chuyển nút xuống 50 đơn vị từ trên cùng
      left: 150,
    padding: 8,
    color: "white",
    paddingLeft: 10,
  },
  buttonTextContainer: {

    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    
  }
});
