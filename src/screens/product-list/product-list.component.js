import { Component } from "react";
import { View, FlatList, Modal } from "react-native";
import styles from "./product-list.styles";
import Item from "./item/item.component";
import SAMPLE_DATA from "../../../data.sample";
import FloatButton from "../../components/float-button/float-button.component";
import ProductAdd from "../../screens/product-add/product-add.component";
import ProductUpdate from "../../screens/product-update/product-update.component";
class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      list: SAMPLE_DATA,
      productNeedUpdateFromItem: null, // Khởi tạo biến state
    };
    // trong class component thì nhớ phải khai báo hàm trong constructor vầy thì khi truyền props xuống component con nó mới nhận
    this.toggleShow = this.toggleShow.bind(this);
    this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

  // hàn quản lý đóng/mở modal
  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  // hàm thêm sản phẩm
  addProduct = ({ productName, productPrice, productImage }) => {
    //  console.log(productName)
    const newProduct = {
      id: this.state.list.length + 1,
      name: productName,
      price: productPrice,
      image: productImage,
    };
    this.setState((prevState) => ({
      list: [...prevState.list, newProduct],
    }));
  };

  // hàm update sản phẩm
  handleUpdateProduct = (dataItem) => {
    this.setState({ productNeedUpdateFromItem: dataItem }, () => {
      console.log(this.state.productNeedUpdateFromItem); // Sử dụng callback để đảm bảo giá trị mới nhất
    });
  };

  handleDeleteProduct = (productDeleteId) => {
    console.log(productDeleteId);
    this.setState((prevState) => ({
      list: prevState.list.filter((product) => product.id !== productDeleteId),
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          style={styles.container}
          renderItem={({ item }) => (
            <Item
              productItemData={item}
              key={item.id}
              onSetModalState={this.toggleShow}
              onUpdateProduct={this.handleUpdateProduct}
              onDeleteProduct={this.handleDeleteProduct}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <FloatButton onPress={this.toggleShow} />
        {/* Modal Thêm sản phẩm */}
        <Modal
          animationType="slide"
          supportedOrientations={["portrait", "landscape"]}
          visible={this.state.show}
        >
          <ProductAdd
            onAddProduct={this.addProduct}
            onCloseModal={this.toggleShow}
          />
        </Modal>
        {/* Modal Update sản phẩm */}
        {/* <Modal
          animationType="slide"
          supportedOrientations={["portrait", "landscape"]}
          visible={this.state.show}
        >
          <ProductUpdate
               dataProductUpdate={}
               onAddProduct={this.addProduct}
               onCloseModal={this.closeModal}
            />
        </Modal> */}
      </View>
    );
  }
}

export default ProductList;
