import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, TextInput } from "react-native";
import { Component } from "react";
import PrimaryButton from "./../../components/primary-button/primary-button";

class ProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      productImage: "",
    };
  }

  handleAddProduct = () => {
    const { productName, productPrice, productImage } = this.state;

    this.props.onAddProduct({ productName, productPrice, productImage });
    this.setState({ productName: "", productPrice: "", productImage: "" });
    this.props.onCloseModal(); // Đóng modal sau khi thêm sản phẩm
  };

  render() {
    return (
      <ScrollView>
        <Text>Thêm sản phẩm</Text>
        <TextInput
          placeholder="Nhập tên sản phẩm..."
          value={this.state.productName}
          onChangeText={(text) => this.setState({ productName: text })}
        />
        <TextInput
          placeholder="Nhập giá sản phẩm..."
          value={this.state.productPrice}
          keyboardType="numeric"
          onChangeText={(text) => this.setState({ productPrice: text })}
        />
        <TextInput
          placeholder="Nhập đường dẫn ảnh..."
          value={this.state.productImage}
          onChangeText={(text) => this.setState({ productImage: text })}
        />

        <PrimaryButton onPress={this.handleAddProduct}>Lưu</PrimaryButton>
      </ScrollView>
    );
  }
}
export default ProductAdd;
