import React, { useReducer } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import {Input, Button} from './compenents';

const login = () => {
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#b2dfdb'}}>
            <View style={{flex: 1}}>
                <Image source={require('./assets/16036.png')}
                style={styles.logoStyle}/>
                <Input holder="Please Enter E-Mail Adress"/>
                <Input holder="Please Enter Password"/>
                <Button text="Enter" />
            </View>
        </SafeAreaView>

    )
}

export default login;

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: "contain",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.30
    },
})