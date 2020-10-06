import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const addGoalHandler = goal => {
    setIsAddMode(false);
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goal}]);
  }

  const deleteGoalHandler = (goalID) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((item) => item.id != goalID);
    })
  }

  const cancelGoalModal = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput onCancel={cancelGoalModal} modalVisible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList 
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={deleteGoalHandler} />
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
