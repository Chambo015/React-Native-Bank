import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
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
  TouchableWithoutFeedback,
} from 'react-native';
const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';

function HomeScreen({ navigation, route }) {
  const [showText, setShowText] = useState(false);
  const fadeText = useRef(new Animated.Value(0)).current;
  const translateText = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    if (showText) {
      Animated.parallel([
        Animated.timing(fadeText, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(translateText, {
          toValue: 0,
          duration: 1000,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeText, {
          toValue: 0,
          duration: 1000,
        }),
        Animated.timing(translateText, {
          toValue: 50,
          duration: 1000,
        }),
      ]).start();
    }
  }, [fadeText, translateText, showText]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={[styles.button, styles.buttonOpenText]}
        onPress={() => navigation.navigate('Image')}
      >
        <Text style={styles.textBtn}>К картинке</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpenText]}
        onPress={() => setShowText(!showText)}
      >
        <Text style={styles.textBtn}>
          {showText ? 'Скрыть' : 'Показать'} текст
        </Text>
      </Pressable>
      <Animated.Text
        style={[
          styles.text,
          { transform: [{ translateY: translateText }], opacity: fadeText },
        ]}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        dolorum adipisci suscipit temporibus expedita. Necessitatibus, voluptas
        fugit? Alias nobis iste dolores, nihil quos, nemo quisquam quam, modi
        fuga repellat delectus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Obcaecati dicta non fugiat tempora aperiam consequatur
        asperiores nobis sit ducimus soluta doloribus autem, officia est
        praesentium, eaque consequuntur molestiae accusamus at? Optio fugiat
        amet minus nam ea aliquid commodi praesentium quaerat, aperiam deleniti.
        A quibusdam temporibus ratione debitis earum nobis, eos minus dolorum
        officiis adipisci ex fuga voluptatum cumque maiores quae! Fugiat,
        consequuntur! Ab, doloremque cumque provident consectetur quod similique
        id. Doloremque reprehenderit harum neque facere numquam quisquam fugit
        voluptatem praesentium laborum esse hic dolore aperiam error tempora, at
        eveniet omnis. Deleniti, at nesciunt. Sequi aspernatur porro, et, unde
        at aperiam sed dolores ab atque dolor dicta autem molestiae voluptatem
        minima iusto voluptates architecto distinctio dignissimos hic eos.
        Aspernatur, quibusdam rem! Quisquam quo temporibus ad porro repellendus
        quas aut eum nostrum debitis doloremque voluptatibus, natus iusto
        explicabo in exercitationem. Voluptatem consequatur dicta doloremque ea
        natus vel eius. Aut quis rem explicabo!
      </Animated.Text>
    </SafeAreaView>
  );
}

function Secondary({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput onChangeText={(e) => navigation.setOptions({ title: e })} />
    </SafeAreaView>
  );
}

function MyImage() {
  const scale = useRef(new Animated.Value(1)).current;
  const [touch, setToch] = useState(false);

  useEffect(() => {
    if (touch) {
      Animated.timing(scale, {
        toValue: 5,
        duration: 7000,
      }).start();
    } else {
      Animated.timing(scale).stop();
    }
  }, [touch, scale]);


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.centeredView}>
      <TouchableWithoutFeedback
        onPressIn={() => setToch(true)}
        onPressOut={() => setToch(false)}
      >
        <Animated.Image
          style={[
            styles.img,
            { width: 100, height: 100, transform: [{ scale: scale }] },
          ]}
          source={logo}
        />
      </TouchableWithoutFeedback>
    </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'yellow' } }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Image" component={MyImage} />
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
    paddingVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    backgroundColor: '#2dcc70',
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    display: 'block',
  },
});

export default App;
