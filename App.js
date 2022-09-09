import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
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
  StatusBar,
  TextInput,
  Button,
  Image,
} from 'react-native';
const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';


function HomeScreen({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
          <Link style={[styles.button, styles.buttonClose]} to={ {screen: 'Secondary'}}> Перейти</Link>
    </SafeAreaView>
  );
}

function Secondary({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput onChangeText={(e) => navigation.setOptions({title: e})} />
    </SafeAreaView>
  );
}

function LogoTitle() {
  return <Image style={{ width: 100, height: 50 }} source={logo} />;
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'yellow' } }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Secondary"
            component={Secondary}
            options={{
              headerTitleStyle: { fontWeight:'bold', color: 'green' },
              headerRight: (props) => (<LogoTitle {...props} />),
              headerTitleAlign: 'center',
              headerBackImageSource: 'https://e7.pngegg.com/pngimages/1023/763/png-clipart-arrow-font-awesome-computer-icons-back-to-back-angle-logo-thumbnail.png'
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpenList: {
    backgroundColor: '#F194FF',
  },
  buttonOpenText: {
    marginTop: 20,
    backgroundColor: '#2dcc70',
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    paddingHorizontal: 10,
    height: 500,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    border: '1px solid',
  },
});

export default App;
