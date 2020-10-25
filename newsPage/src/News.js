import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, Image, Dimensions  } from "react-native";
import { NewsCard } from "./compenents";

const mydata = [{
    id:0,
    title:'McDonnell Douglas F-15E Strike Eagle',
    desc:'The McDonnell Douglas (now Boeing) F-15E Strike Eagle is an American all-weather multirole strike fighter[6] derived from the McDonnell Douglas F-15 Eagle. The F-15E was designed in the 1980s for long-range, high-speed interdiction without relying on escort or electronic-warfare aircraft. ',
    img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/F-15E_Strike_Eagle.jpg/300px-F-15E_Strike_Eagle.jpg',
},
{
    id:1,
    title:'Lockheed Martin F-22 Raptor',
    desc:'The Lockheed Martin F-22 Raptor is a single-seat, twin-engine, all-weather stealth tactical fighter aircraft developed for the United States Air Force (USAF). The result of the USAF s Advanced Tactical Fighter (ATF) program, the aircraft was designed primarily as an air superiority fighter, but also has ground attack, electronic warfare, and signal intelligence capabilities',
    img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/300px-F-22_Raptor_edit1_%28cropped%29.jpg',
},
{
    id:2,
    title:'Lockheed Martin F-35 Lightning II',
    desc:'The Lockheed Martin F-35 Lightning II is an American family of single-seat, single-engine, all-weather stealth multirole combat aircraft that is intended to perform both air superiority and strike missions. It is also able to provide electronic warfare and intelligence, surveillance, and reconnaissance capabilities. Lockheed Martin is the prime F-35 contractor, with principal partners Northrop Grumman and BAE Systems.',
    img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/300px-F-35A_flight_%28cropped%29.jpg',
},
{
    id:3,
    title:'General Dynamics F-16 Fighting Falcon',
    desc:'The General Dynamics F-16 Fighting Falcon is a single-engine supersonic multirole fighter aircraft originally developed by General Dynamics for the United States Air Force (USAF). Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft. ',
    img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/300px-F-16_June_2008.jpg',
},
{
    id:4,
    title:'Fairchild Republic A-10 Thunderbolt II',
    desc:'The Fairchild Republic A-10 Thunderbolt II is a single-seat, twin turbofan engine, straight wing jet aircraft developed by Fairchild-Republic for the United States Air Force (USAF). It is commonly referred to by the nicknames "Warthog" or "Hog", although the A-10 s official name comes from the Republic P-47 Thunderbolt, a World War II fighter-bomber effective at attacking ground targets',
    img_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/A-10_-_32156159151.jpg/300px-A-10_-_32156159151.jpg',
},
];

const banner_data =[
    {
        id:0,
        image_url:'https://www.thebalancecareers.com/thmb/8SCWZCp6b986yyHLxhy5HYfRZl8=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():saturation(0.2):brightness(10):contrast(5)/2812527-56a9b30c5f9b58b7d0fe2e67.jpg'
    },
    {
        id:1,
        image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq5JFkFC_umpkK96hK5bOQtCXsUjak_5B_Xw&usqp=CAU'
    },
    {
        id:2,
        image_url:'https://lh5.ggpht.com/_Tsf-t_mqSxc/TThtZ7JpTeI/AAAAAAAAxIc/U1anL0jBKi4/s800/2009%20US%20Air%20Force%20with%20GAS%20Mustang%20X-1_11.jpg'
    },
    {
        id:3,
        image_url:'https://www.usagovpolicy.com/wp-content/uploads/2019/03/Index-USAF-624x416.jpg'
    },
]

//const renderNews = ({item}) => { 
//    return (<Text>{item.title}</Text>)};       
     
const News = () => {
    const renderNews = ({item}) => { 
        return(
        <NewsCard news={item}/>
        )
    }; 
    const listHeader = () => {
        
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {banner_data.map( banner_item => {
                    return (
                        <Image source={{
                            uri:banner_item.image_url}} 
                            style={{
                                
                                height:Dimensions.get('window').height *0.27,
                                width:Dimensions.get('window').width * 0.9, 
                                resizeMode:'cover',
                                margin: 5,
                                borderRadius: 3,
                    
                            }}/>
                            
                    )
                })}
            </ScrollView>
        )
    };
    return (
        <SafeAreaView style={{flex:1}}> 
            <FlatList
                keyExtractor={(item, index) => {item.id.toString()}}
                data={mydata}
                renderItem={renderNews}
                ListHeaderComponent={listHeader}
            />
                
        </SafeAreaView>  
    )
}

export default News;