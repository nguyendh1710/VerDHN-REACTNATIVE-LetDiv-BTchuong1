import { Text, ScrollView, TextInput } from "react-native";
import { Component } from "react";
import PrimaryButton from "./../../components/primary-button/primary-button";

class ProductUpdate extends Component {






  

  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      productImage: "",
 
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.product !== this.props.product) {
  //     this.setState({ product: this.props.product });
  //   }
  // }

  handleUpdateProduct = () => {

    // const { productName, productPrice,productImage } = this.state;

    // this.props.onUpdateProduct({ productName, productPrice,productImage });
    // this.setState({ productName: '', productPrice: '', productImage: '' });
    this.props.onCloseModal(); // Đóng modal sau khi thêm sản phẩm
  };

  render() {
    return (
      <ScrollView>
        <Text>Cập nhật sản phẩm</Text>
        <TextInput
          placeholder="Nhập tên sản phẩm..."
          value={this.state.productName}
          onChangeText={(text) => this.setState({ productName: text })}
        />
        <TextInput
          placeholder="Nhập giá sản phẩm..."
          keyboardType="numeric"
          value={this.state.productPrice}
          onChangeText={(text) => this.setState({ productPrice: text })}
        />
        <TextInput
          placeholder="Nhập đường dẫn ảnh..."
          value={this.state.productImage}
          onChangeText={(text) => this.setState({ productImage: text })}
        />

        <PrimaryButton onPress={this.handleUpdateProduct}>Lưu</PrimaryButton>
      </ScrollView>
    );
  }
}
export default ProductUpdate;
