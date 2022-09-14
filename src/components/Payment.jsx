import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function Payment() {
  const [isPayed, setIsPayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if(isPayed) {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }
  }, [isPayed])
  return (
    <TouchableOpacity
      onPress={() => setIsPayed(true)}
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
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff"  style={{marginHorizontal: 'auto', paddingVertical:  5}}/>
      ) : (
        <>
          <Text style={styles.textBalanceCard}>{isPayed ?  'Payment is Done' : 'Make a Payment'}</Text>
          <View style={{ alignItems: 'flex-end' }}>
            {isPayed ? <MaterialIcons name="done-outline" size={24} color="green" /> : 
            <>
                <Text style={styles.textBalanceCard}>$220</Text>
                <Text style={styles.textCardSub}>Due: Feb 10, 2022</Text>
            </>
            }
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
