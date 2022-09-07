import React, { useState } from "react";
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Modal,
  Alert,
  ScrollView,
  Text,
  Pressable,
  View,
  StatusBar
} from "react-native";

const DATA = [
  {
    title: "Vue",
    data: ["Vuex", "Vue-Router", "Vuetify"]
  },
  {
    title: "React",
    data: ["React-Redux", "React-Router", "Redux-Toolkit"]
  },
  {
    title: "Angular",
    data: ["TypeScript", "NgRx", "RxJS"]
  },
  {
    title: "NodeJS",
    data: ["Express", "MongoDB"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function TextLorem() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
          also reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function List({ data }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function MyModal({ modalVisible, setModalVisible, children }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

function App() {
  const [listVisible, setListVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MyModal modalVisible={listVisible} setModalVisible={setListVisible}>
        {listVisible === "list" ? <List data={DATA} /> : <TextLorem />}
      </MyModal>

      <View style={styles.centeredView}>
        <Pressable
          style={[styles.button, styles.buttonOpenList]}
          onPress={() => setListVisible("list")}
        >
          <Text style={styles.textStyle}>Show List</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpenText]}
          onPress={() => setListVisible("text")}
        >
          <Text style={styles.textStyle}>Show Text</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 14
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
    elevation: 2
  },
  buttonOpenList: {
    backgroundColor: "#F194FF"
  },
  buttonOpenText: {
    marginTop: 20,
    backgroundColor: "#2dcc70"
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  scrollView: {
    paddingHorizontal: 10,
    height: 150,
    width: 200,
    backgroundColor: "pink",
    marginHorizontal: 20
  },
  text: {
    fontSize: 20
  }
});

export default App;
