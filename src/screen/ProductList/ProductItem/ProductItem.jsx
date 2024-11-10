import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./ProductItem.style";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton ";

export default function ProductItem({ dataItem, modalState, setModalState,sendProductDataFromItem,onDeleteProduct }) {

const handleUpdate=()=>{
// mở modal
  setModalState (!modalState);
// gửi dữ liệu sản phẩm được chọn lên cha ProductList qua biến state selectedProduct rồi từ đó mới gửi qua cho component UpdateProduct => dùng kỹ thuật nâng state bên cha
  sendProductDataFromItem(dataItem);
}
const handleDelete=()=>{


  onDeleteProduct(dataItem.id)

}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tên sản phẩm: {dataItem.name} </Text>
      <Text>Giá sản phẩm: {dataItem.price} </Text>
      <Image source={dataItem.image} style={styles.image} />
      <View style={{ flexDirection:'row',justifyContent:"space-between"}}>
      <Text style={styles.buttonTextContainer}> <PrimaryButton style={styles.button} onPress={handleUpdate} > Sửa </PrimaryButton>      </Text>
      <PrimaryButton style={styles.button} onPress={handleDelete} > Xóa </PrimaryButton>

      </View>
     


     
    </View>
  );
}
