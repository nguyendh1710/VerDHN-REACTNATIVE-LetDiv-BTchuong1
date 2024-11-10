import { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./item.style";
import PrimaryButton from "./../../../components/primary-button/primary-button";

class Item extends Component {
  handleUpdate = () => {
    const { productItemData, onUpdateProduct, onSetModalState } = this.props;
    onSetModalState(); // Gọi hàm mà không cần truyền đối tượng
    onUpdateProduct(productItemData);
  };

  handleDelete = () => {
    const { productItemData, onDeleteProduct } = this.props;

    onDeleteProduct(productItemData.id);
  };

  render() {
    const { productItemData } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this.handleUpdate}>
            <Text style={styles.productName}>Tên sản phẩm</Text>
          </TouchableOpacity>

          <Text style={styles.productPrice}>
            <Text style={styles.highlight}>Price:</Text>
            {productItemData.price}
          </Text>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={30} color="#1c7ed6" />
          </TouchableOpacity>
        </View>
        <PrimaryButton style={styles.deleteButton} onPress={this.handleDelete}>
          Xóa
        </PrimaryButton>
      </View>
    );
  }
}

export default Item;
