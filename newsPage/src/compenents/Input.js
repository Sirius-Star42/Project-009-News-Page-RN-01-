import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({holder}) => {
    
    return (
        <View style={styles.container }>
            <TextInput placeholder={holder} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin: 10,
        padding: 8,
        borderRadius: 10,
        marginVertical: 20,
    }
})
export {Input};