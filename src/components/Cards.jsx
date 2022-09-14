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

const CARD_WIDTH = 280;
const CARD_PADDING = 20;

export default function Cards({ navigation }) {
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
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
        <TouchableOpacity
          style={{
            marginVertical: 50,
            backgroundColor: '#414A61',
            padding: 20,
            borderRadius: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.textBalanceCard}>Make a Payment</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textBalanceCard}>$220</Text>
            <Text style={styles.textCardSub}>Due: Feb 10, 2022</Text>
          </View>
        </TouchableOpacity>
        <Pressable style={{backgroundColor: '#414A61'}}>
          <Text style={styles.switchButtonTextActive}>Settings</Text>
        </Pressable>
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
  }
});
