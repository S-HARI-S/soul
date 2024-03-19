import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Modal,
} from "react-native";

import React, { useState } from "react";

export default function BottomDraw({onClose}) {
  const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
    setModalVisible(false);
    onClose(); 
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}

    >
        <View style={{justifyContent:"flex-end", flex:1, alignItems:"center"}}>


      <View style={styles.container}>
        <TouchableHighlight style={{ width: "100%" }}>
          <View
            style={{
              width: "100%",
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.hehe}>Pin me brah</Text>
          </View>
        </TouchableHighlight>
      </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth:2,
    borderRightWidth:2,
    borderTopWidth:2,
    borderColor:"#00431B",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 400,
    backgroundColor: "#000",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  hehe: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
});
