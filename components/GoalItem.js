import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'lightgray',
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 15,
        alignSelf: 'center',
        width: 250,
        color: 'white'
      }
})

export default GoalItem;