import React, { useReducer } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';

import {Input, Button} from './compenents';

const login = () => {
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#b2dfdb'}}>
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS=='android' ? null : "padding"}> 
                <ScrollView style={{flex:1, }}>
                    <View style={{flex: 1}}>
                        <Image source={require('./assets/16036.png')}
                        style={styles.logoStyle}/>
                        <Input holder="Please Enter E-Mail Adress"/>
                        <Input holder="Please Enter Password"/>
                        <Button text="Enter" />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
           
        </SafeAreaView>

    )
}

export default login;

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: "contain",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.20,
        marginBottom: 20,
        marginTop:20,
    },
})