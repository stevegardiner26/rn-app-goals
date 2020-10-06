import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.input_container}>
                <TextInput 
                    placeholder="Set Course Goal.."
                    style={styles.inputs}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button title="cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={props.onAddGoal.bind(this, enteredGoal)} title="Add"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputs: {
        width: 250,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    },
    input_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%',
        marginVertical: 5
    }
});

export default GoalInput;