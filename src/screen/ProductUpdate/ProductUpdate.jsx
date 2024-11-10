import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./ProductUpdate.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";

export default function ProductUpdate({modalState,setModalState,updateProduct,dataForFroductUpdate}) {

  const [textProductName, setTextProductName] = useState(dataForFroductUpdate.name);
  const [textProductPrice, setTextProductPrice] = useState(dataForFroductUpdate.price);
  const [textProductImage, setTextProductImage] = useState(dataForFroductUpdate.image);

  const handleChangeProductName = (input) => {
    setTextProductName(input);
  };

  const handleChangeProductPrice = (input) => {
    setTextProductPrice(input);
  };

  const handleChangeProductImage = (input) => {
    setTextProductImage(input);
  };
  const handleUpdateProduct = () => {
    // tạo một object để chứa đối tượng mới tạo => nhớ lấy key giống mảng copyData thì thì mới map key vào bên ProductList ở hàm updateProducttoCopyData được
    const updatedProduct = {
        id: dataForFroductUpdate.id,
        name: textProductName,
        price: textProductPrice,
        image: textProductImage,
    };
    // gọi hàm addnewProducttoCopyData bên cha bằng callback để gửi  sản phẩm mới lên  để bên cha đính thêm id  tạo mới vào và luu vô mảng copyData-> dùng kỹ thuật nâng state bên cha
    updateProduct(updatedProduct);
    // chuyển các input lại thành rỗng
    setTextProductImage("");
    setTextProductPrice("");
    setTextProductName("");
    // // truyền callback lên cha để đóng modal
    setModalState(!modalState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Update sản phẩm </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm ở đây"
        value={textProductName}
        onChangeText={handleChangeProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập giá sản phẩm ở đây"
        keyboardType="numeric"
        value={textProductPrice}
        onChangeText={(e) => handleChangeProductPrice(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập ảnh sản phẩm ở đây"
        value={textProductImage}
        onChangeText={(e) => handleChangeProductImage(e)}
      />
      <PrimaryButton style={styles.button} onPress={handleUpdateProduct}>
        Lưu
      </PrimaryButton>
    </View>
  );
}
