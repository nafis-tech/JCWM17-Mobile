import React from 'react'
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native'
import naruto from '../assets/image/naruto.jpg'

const TopicDay4 = () => {
    const width = parseInt(Dimensions.get("screen").width)
    const height2 = parseInt(Dimensions.get("screen").height)
    const height = parseInt(Dimensions.get("window").height)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{ padding: 10}}>
                <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "position"}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 25, fontFamily: 'AveriaSansLibre-Bold'}}>
                            Contoh Custom Font :
                            pakai font-family 'sesuai nama yg ada di folder font yg uda di download'
                        </Text>
                        <Text style={{ fontSize: 45, backgroundColor: '#66DE93',color: '#D83A56',fontFamily: 'Tourney-VariableFont_wdth,wght'}}>
                            Contoh Custom Font
                        </Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 25}} >Dimensions device Pixel 3a : </Text>
                        <Text style={{ fontSize: 25}} >{width} width screen</Text>
                        <Text style={{ fontSize: 25}} >{height2} height screen</Text>
                        <Text style={{ fontSize: 25}} >{height} height window</Text>
                        <Text style={{ fontSize: 25, backgroundColor: 'lightblue', padding: 10}} >window : selebar putih2nya, secreen : all layar dari back, navbar, semuanya</Text>
                    </View>
                    <Image
                        source={naruto}
                        style={{ 
                            height: height * 0.5,
                            width : width * 0.8,
                            alignSelf: 'center',
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{ padding: 10, fontSize: 17}}>Image pakai ukuran height & width * 0.5 dari ukuran hp, biar lebih responsive (center & contain)</Text>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 25 }}>Platform Styling</Text>

                    </View>
                    <View style={Platform.select({
                        ios: styles.titleIos,
                        android: styles.titleAndroid
                    })}>
                        <Text style={{ fontSize: 25 }}> Platform Styling Advance</Text>
                        <Text style={{fontSize: 18, padding: 10, color: 'white', backgroundColor: 'salmon'}}>ios: styles.titleIos,
                        android: styles.titleAndroid. pakai terneri operation di bagian style</Text>
                    </View>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput placeholder="coba disini" style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableWithoutFeedback>
      
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 17
    },
    title :{
        backgroundColor : Platform.OS === 'ios' ? 'lightblue' : 'orange',
        borderWidth : 5,
        borderColor : Platform.OS === 'ios' ? 'orange' : 'lightblue'
    },
    titleIos : {
        backgroundColor : 'lightblue',
        borderWidth : 5,
        borderColor : 'orange'

    },
    titleAndroid : {
        backgroundColor : 'orange',
        borderWidth : 5,
        borderColor : 'lightblue'
    }
})

export default TopicDay4