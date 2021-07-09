import React from 'react'

//import modul yg dibutuhkan
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//import screen
import StackNav from './stackNav'
import TopTabNav from './topTabNav'

import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomtabNav = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "tomato", //ketika aktif waarnanya jadi tomato
                style: {
                    borderRadius: 15,
                    marginBottom: 20,
                    position: 'absolute',
                    marginHorizontal: 32
                },
                labelStyle: {
                    fontSize: 15
                },
                labelPosition: "beside-icon"
            }}
            screenOptions={({ route }) => { //menerima sebuah funtion, dy punya properti route
                return {
                    tabBarIcon: ({size, color, focused}) => {
                        let iconName

                        if (route.name === "Timeline") {
                            iconName = focused ? "time" : "time-outline"
                        } else if (route === "Comments") {
                            iconName = focused ? "chatbubbles" : "chatbubbles-outline"
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                }
            }}
        >
            <Tab.Screen name="Timeline" component={StackNav}/>
            <Tab.Screen name="Comments" component={TopTabNav}/>
        </Tab.Navigator>
    )
}

export default BottomtabNav