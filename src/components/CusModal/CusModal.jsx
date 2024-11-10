import React from "react";
import { Modal } from "react-native";
import { styles } from "./CusModal.style";

export default function CusModal({ children, show}) {
  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      transparent={true}
      visible={show}
    >
      {children}
    </Modal>
  );
}
