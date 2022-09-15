import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function MyModal({modalVisible, setModalVisible}) {
  return (
    <Modal visible={modalVisible}    animationType="slide"
    transparent={true} onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Transfer Success!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(21,20,26, .7)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 120
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
   
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  }
});