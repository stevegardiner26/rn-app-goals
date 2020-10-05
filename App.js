import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput 
          placeholder="Set Course Goal.."
          style={styles.inputs}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button onPress={addGoalHandler} title="Add"/>
      </View>
      <FlatList 
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#FFF',
    color: '#333',
    alignItems: 'center',
  },
  inputs: {
    width: 200,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row'
  },
  listItem: {
    backgroundColor: 'lightgray',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 15,
    alignSelf: 'center',
    width: 250,
    color: 'white'
  }
});
