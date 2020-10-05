import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goal}]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
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
  }
});
