import React, { useState, useEffect } from "react";
import { View, FlatList, Modal } from "react-native";
import data from "./../../../data.json";
import Item from "./ProductItem/ProductItem";
import { styles } from "./ProductList.style";
import FloatButton from "../../components/FloatButton/FloatButton";
import CusModal from "../../components/CusModal/CusModal";
import ProductAdd from "../ProductAdd/ProductAdd";
import ProductUpdate from "../ProductUpdate/ProductUpdate";

export default function ProductList() {
  // state quản lý đóng mở modal => dùng kỹ thuật nâng state
  const [modalVisible, setModalVisible] = useState(false);
  // state tạo mảng dữ liệu copy và quản lý mảng này
  const [copyData, setCopyData] = useState([...data]);
  // state quản tạo product được chọn khi nhấn update bên component item => dùng kỹ thuật nâng state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // setAddedProduct sẽ lấy lại data mới vô là đối tượng mới nhận bên con

  // console.log(addedProduct)

  const addnewProducttoCopyData = (addedProduct) => {
    // console.log(addedProduct)
    //dùng destructuring để phân rã addedProduct ra và gán vào cho 3 biến mới là: addedProductName,addedProductPrice, addedProductImage
    const { addedProductName, addedProductPrice, addedProductImage } =
      addedProduct;
    // tạo một object để chứa đối tượng mới tạo => nhớ để key object giống với mảng copyData thì Flatlist mới lấy được key
    // console.log(addedProduct)
    const addedNewProduct = {
      id: copyData.length + 1,
      name: addedProductName,
      price: addedProductPrice,
      image: addedProductImage,
    };
    // console.log(addedNewProduct);
    // thêm sản phẩm vừa nhận bên component con ProductAdd vào mảng copy data lại
    setCopyData([...copyData, addedNewProduct]);
  };
  // mở modal khi ấn FloatButton
  const handleAddProduct = () => {
    setModalVisible(!modalVisible);
  };

  const updateProducttoCopyData =(dataItem) =>{
    console.log(dataItem)
    // tạo tham chiếu mới
    setCopyData((prevProducts) =>
      prevProducts.map((product) =>
        product.id === dataItem.id ? dataItem : product
      )
    );
    setModalVisible(false);

  }

  //   const   handleUpdateProduct
  //   = (dataItem) => {
  //  // nhận dữ liệu sản phẩm được chọn lên cha ProductList qua biến state selectedProduct rồi từ đó gửi qua cho component UpdateProduct => dùng kỹ thuật nâng state bên cha chứ thông qua hàm trung gian handle nó không ăn dữ liệu váo biến state
  // ==> muốn qua handleUpdate thì phải thêm callback vô biến state như vầy (giống a Tùng dạy nó mới ăn vì setState là hàm bất đồng bộ nên nó chạy trước khi cập nhật nên bị null)
  
  // setSelectedProduct({dataItem}, () => {
  //   console.log(selectedProduct); // Sử dụng callback để đảm bảo giá trị mới nhất
  // });
  //   };


  const deleteProducttoCopyData =(IddataItemdelete) =>{
    console.log(IddataItemdelete)
    // ngữ cảnh xóa này không dùng callback vẫn được
    setCopyData((prevProducts) =>
      prevProducts.filter((product) =>
        product.id !== IddataItemdelete
      )
    );


  }
  return (
    <View>
      <FlatList
        style={styles.container}
        data={copyData}
        renderItem={({ item }) => (
          <Item
            dataItem={item}
            // gửi biên state và hàm setSate đóng mở Modal xuống cho Item
            modalState={modalVisible}
            setModalState={setModalVisible}
            // gửi thẳng hàm setSelectedProduct qua cho ProductItem luôn chứ qua trung gian một hàm handle nó không ăn dữ liệu còn nêú muốn qua hàm handle trung gian thì phải goi callback bên trong setState vì hàm serState là hàm bất đồng bộ nên chạy trước khi cập nhật nên bị null hoặc undefine
            sendProductDataFromItem={setSelectedProduct}
            onDeleteProduct={deleteProducttoCopyData}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {/* FloatButton */}
      {/* Modal */}

      <CusModal show={modalVisible}>
        <ProductAdd
          modalState={modalVisible}
          setModalState={setModalVisible}
          addNewProduct={addnewProducttoCopyData}
        />
      </CusModal>

      <CusModal show={modalVisible}>
        <ProductUpdate
          modalState={modalVisible}
          setModalState={setModalVisible}
          updateProduct={updateProducttoCopyData}
          dataForFroductUpdate={selectedProduct}
        />
      </CusModal>

      <FloatButton onPress={(e) => handleAddProduct(e)} />
    </View>
  );
}
