import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
const name = 'John Smith';
const balance = '$ 8,640.00';
function HomeScreen({ navigation }) {
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
          <TouchableOpacity style={styles.touchableActionBtn}>
            <View style={styles.actionBtnItem}>
              <MaterialCommunityIcons
                name="bank-transfer"
                size={35}
                color="#031952"
              />
            </View>
            <Text style={{ color: '#EEEEEE' }}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableActionBtn}>
            <View style={styles.actionBtnItem}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={35}
                color="#031952"
              />
            </View>
            <Text style={{ color: '#EEEEEE' }}>Bills</Text>
          </TouchableOpacity>
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
    fontWeight: 500,
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
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 39,
  },
  main: {
    flex: 1,
    backgroundColor: 'black',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  actionBtnWrap: {
    flexDirection: 'row',
    paddingVertical: 33,
    paddingHorizontal: 25,
  },
  touchableActionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  actionBtnItem: {
    backgroundColor: '#DBE3F8',
    width: 75,
    height: 75,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default HomeScreen;
