import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';

export default function Transfer({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        
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
});
