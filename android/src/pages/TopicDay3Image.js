import React from 'react'
import {
    Text,
    Image,
    ScrollView
} from 'react-native'

import naruto from '../assets/image/naruto.jpg'

const TopicDay3Image = () => {
    return (
        <ScrollView>
            <Text style={{ fontSize: 30 }}>Offline Image</Text>
            <Image 
                style={{ height: 300, width: 300, backgroundColor: 'salmon'}}
                source={naruto}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30}}>Web Image</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://polarumah.com/wp-content/uploads/2020/05/Desain-interior-rumah-minimalis-modern-3-1200x900.jpg'}}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30}}>Scroll View - contain</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30}}>center</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
                resizeMode="center"
            />
            <Text style={{ fontSize: 30}}>cover</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
                resizeMode="cover"
            />
            <Text style={{ fontSize: 30}}>repeat</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
                resizeMode="repeat"
            />
            <Text style={{ fontSize: 30}}>stretch</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
                resizeMode="stretch"
            />
              <Text style={{ fontSize: 30}}>no-resizeMode</Text>
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_15724034250.jpeg'}}
            />
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://polarumah.com/wp-content/uploads/2017/08/desain-ruang-tamu-minimalis-sederhana-ukuran-3x3-features-1200x900.jpg'}}
                resizeMode="contain"
            />
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://cdn-brilio-net.akamaized.net/news/2019/04/01/161631/750xauto-25-desain-ruang-tamu-minimalis-terbaik-bikin-rumah-makin-keren-1904011.jpg'}}
                resizeMode="contain"
            />
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'http://informazone.com/wp-content/uploads/2020/10/desain-ruang-tamu-kecil-instagram.commins1606-1024x1024-1.jpg'}}
                resizeMode="cover"
            />
            <Image 
                style={{ height: 300, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://cdn.idntimes.com/content-images/post/20180226/18723627-1771558643135939-2945162248571584512-n-aa110d9c7d98cca581370dd99d5a298d-1a4a0dcb99f1bb1ea8aa9f9ebd339046_600x400.jpg'}}
                resizeMode="contain"
            />
            <Image 
                style={{ height: 350, width: 350, backgroundColor: 'salmon'}}
                source={{ uri: 'https://i.pinimg.com/736x/29/ac/20/29ac20563df4c5feb937a694416cff78.jpg'}}
                resizeMode="contain"
            />
        </ScrollView>
    )
}

export default TopicDay3Image
