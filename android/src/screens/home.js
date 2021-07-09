import React from 'react'
import {
    Text,
    View,
    Button,
    FlatList,
    StyleSheet,
    Image
} from 'react-native'
import { BtnCustom } from '../components/button'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = ({navigation, route}) => {
    //props.navigation --> navigation, route keduanya sama2 dari props
    const users = [
        {
            username: 'Naruto',
            id: 1
        },
        {
            username: 'Sazuke',
            id: 2
        },
        {
            username: 'Sakura',
            id: 3
        }
    ]
    const data = route.params

    return(
        <View style={{padding: 20}}>
            <Text style={{ fontSize: 25 }}>Home Screen</Text>
            <Ionicons name="home" size={50} color="orange" />
            <Text>Data dari profile : {data?.previous}</Text>
            <Button
                title="Navigate to Profile"
                onPress={ () => navigation.push("Profile", {username: 'Nafis'})}
            />
            <FlatList 
            data={users}
            renderItem={({item}) => (
                <View>
                    <Text style={styles.contuser}>{item.username}</Text>
                    {/* <Button 
                        title="See Profile"
                        onPress={ () => navigation.push("profile", item)}
                    /> */}
                    <BtnCustom navToProfile={ () => navigation.push("Profile", item)} />
                </View>
            )}
            style={{marginTop:10, marginBottom: 10}}
            /> 
            <Image 
                style={{ height: 250, width: 350}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
                resizeMode="center"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contuser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    }
})

export default Home