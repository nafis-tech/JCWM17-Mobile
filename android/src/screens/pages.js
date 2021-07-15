import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

//import all pages
import TopicDay2 from '../pages/TopicDay2'
import TopicDay3FlatList from '../pages/TopicDay3FlatList'
import TopicDay3Image from '../pages/TopicDay3Image'
import TopicDay4 from '../pages/TopicDay4'
import Topicday5 from '../pages/TopicDay5'

const Pages = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName="TopicDay2">
            <Stack.Screen name="TopicDay2" component={TopicDay2}/>
            <Stack.Screen name="TopicDay3Flatlist" component={TopicDay3FlatList}/>
            <Stack.Screen name="TopicDay3Image" component={TopicDay3Image}/>
            <Stack.Screen name="TopicDay4" component={TopicDay4}/>
            <Stack.Screen name="TopicDay5" component={Topicday5}/>
        </Stack.Navigator>
        
    )
}

export default Pages