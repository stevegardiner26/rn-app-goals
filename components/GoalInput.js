import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.row}>
            <TextInput 
                placeholder="Set Course Goal.."
                style={styles.inputs}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button onPress={props.onAddGoal.bind(this, enteredGoal)} title="Add"/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputs: {
        width: 200,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    row: {
        flexDirection: 'row'
    }
});

export default GoalInput;