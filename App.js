import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, AntDesign, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
// Компоненты
import HomeScreen from './src/components/Home';
import Cards from './src/components/Cards';
import Transactions from './src/components/Transactions';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Иконки
          tabBarIcon: (params) => {
            if (route.name === 'Home')
              return <Entypo name="home" {...params} />;
            if (route.name === 'Cards')
              return <AntDesign name="creditcard" {...params} />;
            if (route.name === 'Transactions')
              return (
                <MaterialCommunityIcons
                  name="file-document-outline"
                  {...params}
                />
              );
            if (route.name === 'Profile')
              return <FontAwesome name="user" s {...params} />;
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'black',
            
          },
          tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0 },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Transactions" component={Transactions} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
