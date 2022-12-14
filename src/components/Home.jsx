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
} from 'react-native';
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Fontisto,
} from '@expo/vector-icons';
import DATA from '../data/index';
import { NumericFormat } from 'react-number-format';

const name = 'John Smith';
const balance = '$ 8,640.00';

function HomeScreen({ navigation }) {
  const renderItemBtns = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.actionName)}
        key={item.actionName + index}
        style={styles.touchableActionBtn}
      >
        <View style={styles.actionBtnItem}>
          <MaterialCommunityIcons
            name={item.btnName}
            size={35}
            color="#031952"
          />
        </View>
        <Text style={{ color: '#EEEEEE' }}>{item.actionName}</Text>
      </TouchableOpacity>
    );
  };
  const renderItemCards = ({ item }) => {
    return (
      <TouchableHighlight
      onPress={() => navigation.navigate('Cards')}
        activeOpacity={0.9}
        underlayColor="#000"
        style={{ padding: 20 }}
      >
        <View style={styles.cardWrap}>
          <Fontisto
            name={item.title}
            size={34}
            color="#E9E9E9"
            style={{ width: 52, textAlign: 'center' }}
          />
          <View style={{ marginHorizontal: 24 }}>
            <Text style={styles.cardText}>{item.title.toUpperCase()}</Text>
            <Text style={styles.cardSubText}>**{item.cardNumber}</Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <NumericFormat
              value={item.balance}
              displayType="text"
              thousandSeparator
              prefix="$"
              renderText={(value) => (
                <Text style={[styles.cardText, { textAlign: 'right' }]}>
                  {value}
                </Text>
              )}
            />
            <Text style={[styles.cardSubText, { textAlign: 'right' }]}>
              {item.deadline}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  const renderItemTransactions = ({ item }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#000"
        onPress={() => navigation.navigate('Transactions')}
        style={{ padding: 20 }}
      >
        <View style={styles.cardWrap}>
          <FontAwesome
            name="dollar"
            size={34}
            color="#E9E9E9"
            style={{ width: 52, textAlign: 'center' }}
          />
          <View style={{ marginHorizontal: 24 }}>
            <Text style={styles.cardText}>{item.title}</Text>
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={{ color: '#F9F9F9' }}>Good Morning!</Text>
        <Text style={styles.headText}>{name}</Text>
        <View style={styles.balanceWrap}>
          <Text style={styles.balanceText}>{balance}</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.actionBtnWrap}>
          {DATA.actionBtns.map(renderItemBtns)}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>My Cards</Text>
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
            data={DATA.cards.slice(0, 2)}
            renderItem={renderItemCards}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <FlatList
            style={{
              backgroundColor: '#292929',
              borderRadius: 20,
              marginBottom: 25,
            }}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: '#585858' }}></View>
            )}
            data={DATA.transactions.slice(0, 4)}
            renderItem={renderItemTransactions}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#414A61',
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headText: {
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 33,
    color: '#F9F9F9',
  },
  balanceWrap: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    color: '#F9F9F9',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 39,
  },
  main: {
    flex: 1,
    backgroundColor: 'black',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 25,
  },
  actionBtnWrap: {
    flexDirection: 'row',
    paddingVertical: 33,
    justifyContent: 'space-between',
  },
  touchableActionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnItem: {
    backgroundColor: '#DBE3F8',
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#EEEEEE',
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 25,
  },
  cardWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: '#EEEEEE',
    fontSize: 16,
    lineHeight: 24,
  },
  cardSubText: {
    color: 'rgba(238, 238, 238, 0.6)',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default HomeScreen;
