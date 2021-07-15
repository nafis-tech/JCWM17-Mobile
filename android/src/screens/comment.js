import React, {useEffect} from 'react'
import {
    Button,
    Text,
    View
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Comment = () => {
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    const dispatch = useDispatch() //variabel dispatch berupa funct useDispatch
    const dataUsername = "Naruto"

    useEffect(async() => {  //keeplogin, kita get data, kirim lagi ke redux
        const usernameAS = await AsyncStorage.getItem('username')

        if (usernameAS) { 
            dispatch({
                type: 'CHANGE_USERNAME',
                payload: usernameAS
            })
        }
        
    }, [])

    //cek dulu, usernameAS ada gk? klo true maka change username, jika gak. baru di hapus

    const onChangeUser = async () => {
        await AsyncStorage.setItem('username',dataUsername) 
         dispatch({
                type: 'CHANGE_USERNAME',
                payload: "Naruto" //merubah data steve - naruto
            })
    }

    const onReset = async () => {
        await AsyncStorage.removeItem('username')

        dispatch({
            type: "RESET"
        })
    } // untuk reset data kesemula

    return(
        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
            <Text style={{ fontSize: 25 }}>Comment Screen</Text>
            <Text>{username}</Text>
            <Button title="change username" onPress={onChangeUser} />
            <Button title="reset global state" onPress={onReset} />
        </View>
    )
}

export default Comment