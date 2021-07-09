import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native'
import { backgroundColor } from '../styles/coloring';
import { margin } from '../styles/spacing';

const ContohComponent = () => {
    useEffect (() => {
        return () => {
            console.log('will unmount')
        }
    }, [])
    return (
        <View style={{...styles.container, ...margin.m4, ...backgroundColor.secondColor}}>
            <Text style={{ fontSize: 50}}>contoh Component</Text>
        </View>  
    )

}



const TopicDay2 = () => {
    const [user, setUser] = useState('')
    const [result, setResult] = useState('RESULT')
    const [show, setShow] = useState(true)

    const onSubmit = () => {
        setResult(user)
    }

      // useEffect biasa
    // useEffect(() => {
    //     console.log('useEffect')
    // })

    // useEffect menjadi seperti componentDidMount
    // useEffect(() => {
    //     console.log('did mount')
    // }, [])

    // useEffect menjadi seperti componentDidUpdate
    // useEffect(() => {
    //     console.log('did update')
    // }, [user])

return (
    <View>
        <View style={{...styles.container, ...margin.m4, ...backgroundColor.fisrtColor}}>
            <Text style={{ fontSize: 50}}>Hello World</Text>
            <Text style={{ fontSize: 20}}>Hay</Text>
        </View>   
        <TextInput 
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
        }}
        onChangeText={(text) => setUser(text)}
        />
        <Button title="Submit" onPress={onSubmit}/>
        <Button title="Hide Component" onPress={() => setShow(false)}/>

        <Text style={{ fontSize: 25}}>{result}</Text>
        {show? <ContohComponent /> : null }
    </View>
)
};


const styles = StyleSheet.create ({
    container: {
        borderColor: 'salmon',
        borderWidth: 5,
        borderStyle: 'solid'
    }
})

export default TopicDay2