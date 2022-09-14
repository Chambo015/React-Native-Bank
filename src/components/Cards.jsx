import {
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
import { useState } from 'react';
import Payment from './Payment';

const CARD_WIDTH = 280;
const CARD_PADDING = 20;

export default function Cards({ navigation }) {
  const [isSettings, setIsSettings] = useState(true);

  const renderCards = ({ item }) => {
    return (
      <View style={styles.cardWrap}>
        <View style={{ justifyContent: 'flex-end' }}>
          <Text
            style={styles.textNumberCard}
          >{`**** **** **** ${item.cardNumber}`}</Text>
          <Text style={styles.textCardSub}>Available Balance</Text>
          <NumericFormat
            value={item.balance}
            displayType="text"
            thousandSeparator
            prefix="$"
            renderText={(value) => (
              <Text style={styles.textBalanceCard}>{value}</Text>
            )}
          />
        </View>
        <View
          style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}
        >
          <Fontisto name={item.title} size={20} color="#E9E9E9" />
          <Text style={styles.textCardSub}>{item.deadline}</Text>
        </View>
      </View>
    );
  };

  const renderItemTransactions = ({ item }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#000"
        onPress={() => {}}
        style={{ padding: 20 }}
      >
        <View style={styles.cardItemList}>
          <FontAwesome
            name="dollar"
            size={34}
            color="#E9E9E9"
            style={{ width: 52, textAlign: 'center' }}
          />
          <View style={{ marginHorizontal: 24 }}>
            <Text style={styles.cardText}>{item.title.toUpperCase()}</Text>
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
      </TouchableHighlight>
    );
  };

  const renderItemSettings = ({ item }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#000"
        onPress={() => {}}
        style={{ padding: 20 }}
      >
        <View style={styles.cardItemList}>
          {item.icon()}
          <View style={{ marginHorizontal: 24 }}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <Entypo
              name="chevron-right"
              size={24}
              color="rgba(209, 209, 209, 0.6)"
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={DATA.cards}
            keyExtractor={(item) => item.id}
            renderItem={renderCards}
            horizontal
            snapToInterval={CARD_WIDTH + CARD_PADDING}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Payment />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Pressable
            key={1}
            style={[styles.switchBtn, { opacity: isSettings ? 1 : 0.5 }]}
            onPress={() => setIsSettings(true)}
          >
            <Text style={styles.switchButtonTextActive}>Settings</Text>
          </Pressable>
          <Pressable
            key={2}
            style={[styles.switchBtn, { opacity: isSettings ? 0.5 : 1 }]}
            onPress={() => setIsSettings(false)}
          >
            <Text style={styles.switchButtonTextActive}>Transactions</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 40 }}>
          {isSettings ? (
            <FlatList
              style={{
                backgroundColor: '#292929',
                borderRadius: 20,
                marginBottom: 25,
              }}
              contentContainerStyle={{}}
              ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: '#585858' }}></View>
              )}
              data={DATA.settings}
              renderItem={renderItemSettings}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <FlatList
              style={{
                backgroundColor: '#292929',
                borderRadius: 20,
                marginBottom: 25,
              }}
              contentContainerStyle={{}}
              ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: '#585858' }}></View>
              )}
              data={DATA.transactions.slice(0, 3)}
              renderItem={renderItemTransactions}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </ScrollView>
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
  cardWrap: {
    backgroundColor: '#5A6D9E',
    width: CARD_WIDTH,
    height: 130,
    borderRadius: 20,
    padding: CARD_PADDING,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: CARD_PADDING,
  },
  textNumberCard: {
    color: '#031952',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
  },
  textCardSub: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 16,
  },
  textBalanceCard: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
  },
  switchButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  switchBtn: {
    backgroundColor: '#414A61',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
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
