import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Item({ title, status }) {
   const [isDone, setIsDone]  = useState(status)
  return (
    <TouchableOpacity  style={styles.wrap} onLongPress={() => setIsDone(!isDone)}>
      <Text style={{fontSize: 24}} >{title}</Text> {isDone && <MaterialIcons name="done" size={24} color="black" style={{marginLeft: 5}} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#d2d5d6',
    alignItems: 'center',
  },
});
