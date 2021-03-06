import React from 'react'

//import modul material topTab
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

//import scren
import Comment from '../screens/comment'
import TopComment from '../screens/topComment'

const TopTabNav = () => {
    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator lazy>
            <Tab.Screen name="Comment" component={Comment} options={{title:'All Comment'}}/>
            <Tab.Screen name="TopComment" component={TopComment} options={{title:"Top Comment"}}/>
        </Tab.Navigator>
    )
}

export default TopTabNav