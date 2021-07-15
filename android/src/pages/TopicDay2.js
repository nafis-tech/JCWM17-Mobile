import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
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



const TopicDay2 = (props) => {
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

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("TopicDay3Flatlist")}
                >
                <Text>Topis Day 3 - FlatList</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("TopicDay3Image")}
                >
                <Text>Topis Day 3 - Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("TopicDay4")}
                >
                <Text>Topis Day 4 - Font, Dimension</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("TopicDay5")}
                >
                <Text>Topic Day 5 - Component</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create ({
    container: {
        borderColor: 'salmon',
        borderWidth: 5,
        borderStyle: 'solid'
    },
    button: {
        alignItems: "center",
        backgroundColor: "salmon",
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 50,
        fontSize: 35
    }
})

export default TopicDay2