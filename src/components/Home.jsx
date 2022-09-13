import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Pressable,
} from 'react-native';
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import DATA from '../data/index';

const name = 'John Smith';
const balance = '$ 8,640.00';

function HomeScreen({ navigation }) {
  const renderItemBtns = (item, index) => {
    return (
      <TouchableOpacity
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
      <TouchableHighlight style={{padding: 20}}>
     <Fontisto name={item.title} size={34} color="#E9E9E9" />
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.container}>
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
        <View>
          <Text style={styles.sectionTitle}>My Cards</Text>
          <FlatList
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: '#585858' }}></View>
            )}
            style={{ backgroundColor: '#292929', borderRadius: 20 }}
            data={DATA.cards}
            renderItem={renderItemCards}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
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
  sectionTitle: { color: '#EEEEEE', fontSize: 20, lineHeight: 30, marginBottom: 25 },
});

export default HomeScreen;
