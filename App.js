import { NavigationContainer } from '@react-navigation/native';
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
} from 'react-native';

const DATA = [
  {
    title: 'Форсаж',
    genre: 'боевик, криминал, приключения',
    id: 1,
  },
  {
    title: 'Парк Юрского периода',
    genre: 'приключения, фантастика, семейный',
    id: 2,
  },
  {
    title: 'Аватар',
    genre: 'фантастика, боевик, драма, приключения',
    id: 3,
  },
];

function CreateFilm({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  return (
    <>
      <TextInput placeholder='Название фильма' style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput placeholder='Жанр фильма' style={styles.input} value={genre} onChangeText={setGenre} />
      <Button title="Done" 
				onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { film: {
              title,
              genre,
              id: route.params.id
            }},
          });
        }}
      />
    </>
  );
}

const Item = ({film}) => (
  <View style={styles.item}>
    <Text style={styles.header}>{film.title}</Text>
    <Text style={styles.text}>{film.genre}</Text>
  </View>
);

function HomeScreen({ navigation, route }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (route.params?.film) {
      setFilms(prev => [...prev, route.params?.film])
    }
  }, [route.params?.film]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        {films.map(film => {
          return <Item film={film} key={film.id}/>
        })}
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpenText]}
        onPress={() => setFilms(DATA)}
      >
        <Text style={styles.textStyle}>Обновить</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpenText]}
        onPress={() => navigation.navigate('CreateFilm', {id: films.length})}
      >
        <Text style={styles.textStyle}>Добавить</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateFilm" component={CreateFilm} />
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
    fontWeight: '700'
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
    border: '1px solid'
  }
});

export default App;
