import React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native'

//importLesson misal mau di tampilkan disini
import TopicDay2 from './android/src/pages/TopicDay2';
import TopicDay3FlatList from './android/src/pages/TopicDay3FlatList';
import TopicDay3Image from './android/src/pages/TopicDay3Image';
import TopicDay4 from './android/src/pages/TopicDay4';
import TopicDay5 from './android/src/pages/TopicDay5';

//import navigator
import StackNav from './android/src/navigator/stackNav'
import BottomtabNav from './android/src/navigator/bottomTabNav';

// //import screen sudah di taruh StackNav, jadi gak perlu di import disini
// import Home from './android/src/screens/home';
// import Profile from './android/src/screens/profile';
// import Comment from './android/src/screens/comment';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNav /> */}
      <BottomtabNav />
    </NavigationContainer>
   
    
  )
};

export default App;