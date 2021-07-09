import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'

const Item = ( {title} ) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const TopicDay3FlatList = () => {
    const DATA = [
        {
            id : 1,
            note : "Gak bisa pakai <ScrollView /> bisa bentrok jalannya"
        },
        {
            id : 2,
            note : "Harus pakai <View > Biar FlatList nya fungsi"
        },
        {
            id : 3,
            note : "FlatList mengeluarkan data sesuai porsinya, tidak sekaligus"
        },
        {
            id : 4,
            note : 'DATA harus array'
        },
        {
            id : 5,
            note : 'gak boleh ada <Flaslist /> lebih dari 1'
        },
        {
            id : 6,
            note : 'renderItem itu syntax, ini yg bisa di ganti2 dalemnya'
        },
        {
            id : 7,
            note : 'Kalau mau merubah data, maka Array di datanya yg dirubah'
        },
        {
            id : 8,
            note : 'data harus Array, didalamnya bisa berupa obyek'
        },
        {
            id : 9,
            note : 'key: klo gk punya id dia harus dikasih key, biar punya identitas datanya'
        },
        {
            id : 10,
            note : '(item, index) => index ,yg di ambil indexnya, maka berada di parameter kedua. dinilai sebagai index'
        },
        {
            id : 11,
            note : '(index) => index, klo sperti ini tetap dinilai sbgai item bukan index'
        }
    ]

    return (
        <View>
            <FlatList 
                data={DATA}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.id}.</Text>
                        <Text style={styles.title}>{item.note}</Text>
                    </View>
                )}
                keyExtractor={ (item, index) => index}
                ListHeaderComponent={<Text style={{ fontSize: 25, flex: 1}}>Flat List</Text>}
            />
        </View>
    )
    
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#66DE93',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    }
});

export default TopicDay3FlatList