import { StyleSheet, SafeAreaView } from "react-native";
import { Component } from "react";
import ProductList from "./src/screens/product-list/product-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
    selectedProduct: null;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ProductList />
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
