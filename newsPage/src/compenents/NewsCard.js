import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const NewsCard = ({news}) => {
    return (
        <View style={{flex: 1,}}> 
            <Image source={{uri: news.img_url}}
            style={styles.image}
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.desc}>{news.desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        textAlign: "center",
        margin: 2,
        fontSize: 22, 
    },
    desc: {
        textAlign: "justify",
        margin: 8,
        padding: 10,
        fontSize: 17,
        borderWidth: 3,
        borderRadius: 3,
        borderColor : '#e0e0e0',
    },
    image: {
        height:Dimensions.get('window').height * 0.3,
        resizeMode: 'cover',
        margin: 5,
        borderRadius: 5,
    }
})


export {NewsCard} ;