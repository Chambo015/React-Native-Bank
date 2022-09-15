import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard
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
import { useEffect, useRef, useState } from 'react';

const CARD_WIDTH = 280;
const CARD_PADDING = 20;
const COLORS = {
  inactive: '#5A6D9E',
  active: 'green',
};

export default function Transfer({ navigation }) {
  const refFlatListCard = useRef(null);
  const refFlatListContacts = useRef(null);
  const [indexCard, setIndexCard] = useState(0);
  const [indexContact, setIndexContact] = useState(null);
  const [value, setValue] = useState('');
  const [purposeText, setPurposeText] = useState('');

  useEffect(() => {
    refFlatListCard.current?.scrollToIndex({
      index: indexCard,
      animated: true,
      viewPosition: 0.65,
    });
    refFlatListContacts.current?.scrollToIndex({
      index: indexContact,
      animated: true,
      viewPosition: 0.5,
    });
  }, [indexCard, indexContact]);
  const renderCards = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => setIndexCard(index)}
        style={[
          styles.cardWrap,
          {
            borderColor: index == indexCard ? COLORS.active : COLORS.inactive,
            borderRadius: 12,
            backgroundColor:
              index == indexCard ? COLORS.active : COLORS.inactive,
          },
        ]}
      >
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
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAvoidingView  style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.main}>
        <Text style={[styles.textBalanceCard, { marginBottom: 20 }]}>From</Text>
        <View>
          <FlatList
            ref={refFlatListCard}
            data={DATA.cards}
            contentContainerStyle={{ paddingLeft: CARD_PADDING }}
            keyExtractor={(item) => item.id}
            renderItem={renderCards}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={[styles.textBalanceCard, { marginVertical: 20 }]}>To</Text>
        <View>
          <FlatList
            ref={refFlatListContacts}
            data={DATA.contacts}
            ListHeaderComponent={() => (
              <TouchableOpacity>
                <AntDesign name="plus" size={40} color="#213569" />
              </TouchableOpacity>
            )}
            ListHeaderComponentStyle={styles.ListHeader}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setIndexContact(index)}
                style={[
                  styles.contactsItem,
                  {
                    borderColor:
                      index === indexContact ? COLORS.active : COLORS.inactive,
                  },
                ]}
              >
                <Image
                  style={[
                    styles.contactsImage,
                    {
                      borderColor:
                        index === indexContact
                          ? COLORS.active
                          : COLORS.inactive,
                    },
                  ]}
                  source={{ uri: item.avatar }}
                />
                <Text style={styles.contactsName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            horizontal
            snapToInterval={CARD_WIDTH + CARD_PADDING}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={[styles.textBalanceCard, { marginVertical: 20 }]}>
          Amount
        </Text>
        <View>
          <NumericFormat
            value={value}
            displayType="text"
            thousandSeparator
            valueIsNumericString={true}
            prefix="$"
            renderText={(value) => (
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor="white"
                placeholder="$0.00"
                onChangeText={setValue}
                value={value}
                keyboardType="numeric"
              />
            )}
          />
        </View>
        <Text style={[styles.textBalanceCard, { marginVertical: 20 }]}>
          Purpose
        </Text>
        <View style={{marginBottom: 50}}>
          <TextInput
            style={styles.inputStyle}
            placeholderTextColor="#626262"
            placeholder="Education"
            onChangeText={setPurposeText}
            value={purposeText}
          />
        </View>
       
      </ScrollView>
      <TouchableHighlight onPress={Keyboard.dismiss} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Send</Text>
        </TouchableHighlight>
    </KeyboardAvoidingView>
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
    marginBottom: 100
  },
  cardWrap: {
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
  contactsItem: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginRight: 15,
    height: 120,
    borderWidth: 2,
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  contactsImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
  },
  contactsName: {
    color: '#F9F9F9',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  ListHeader: {
    width: 75,
    height: 75,
    backgroundColor: '#DBE3F8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  inputStyle: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    paddingVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#626262',
  },
  submitButton: {
    paddingVertical: 15,
    backgroundColor: '#414A61',
    borderRadius: 14,
    position: 'absolute',
    bottom: 20,
    flex: 1,
    left: 25,
    right: 25
  },
  submitButtonText: {
    color: '#F9F9F9',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
});
