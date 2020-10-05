import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {

    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalItem;