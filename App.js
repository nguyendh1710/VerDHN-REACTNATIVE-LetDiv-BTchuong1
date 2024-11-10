import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ProductList from "./src/screen/ProductList/ProductList";



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
