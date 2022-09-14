import {
  Animated,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Fontisto,
} from '@expo/vector-icons';
import { NumericFormat } from 'react-number-format';
import DATA from '../data/index';
import { useRef, useState } from 'react';

const heightItem = 34 + 20 * 3;

export default function Transactions() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          data={DATA.transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const inputRange = [
              -1,
              0,
              heightItem * index,
              heightItem * (index + 2),
            ];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                activeOpacity={0.9}
                underlayColor="#000"
                onPress={() => {}}
                style={{
                  padding: 20,
                  marginBottom: 20,
                  backgroundColor: '#292929',
                  borderRadius: 16,
                  opacity: scale,
                  transform: [{ scale }],
                }}
              >
                <View style={styles.cardItemList}>
                  <FontAwesome
                    name="dollar"
                    size={34}
                    color="#E9E9E9"
                    style={{ width: 34, height: 34, textAlign: 'center' }}
                  />
                  <View style={{ marginHorizontal: 24 }}>
                    <Text style={styles.cardText}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{ marginLeft: 'auto' }}>
                    <NumericFormat
                      value={item.value}
                      displayType="text"
                      thousandSeparator
                      prefix="-$"
                      renderText={(value) => (
                        <Text style={[styles.cardText, { textAlign: 'right' }]}>
                          {value}
                        </Text>
                      )}
                    />
                  </View>
                </View>
              </Animated.View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  cardItemList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: '#EEEEEE',
    fontSize: 16,
    lineHeight: 24,
  },
});
