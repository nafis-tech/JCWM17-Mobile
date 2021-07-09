import React from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native'

const Profile = (props) => {
    const data = props.route.params
    
    return(
        <View>
            <Text style={{ fontSize: 25 }}>Profile Screen</Text>
            <Text style={{ fontSize: 25 }}>Username: {data.username}</Text>
            <Button
                title="Navigate to Home"
                onPress={ () => props.navigation.navigate("Home", { previous: 'dapet nih'})}
            />
        </View>
    )
}

export default Profile