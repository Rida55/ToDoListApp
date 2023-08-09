import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {navigationRef} from './RootNavigation';
// import FlashMessage from "react-native-flash-message";
// import StackRoutes from './app/src/router/stackRoutes';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
// import icons from './app/res/constants/icons';
import {FONTS} from './app/res/globalStyle/themeSizes';
import {scale} from './app/res/components/scale/scale';
import Loader from './app/src/services/loader';
import BottomTabs from './app/src/router/bottomTabs';
import { Provider } from 'react-redux';
import { persistor, store } from './app/src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { PLATFORM_IOS } from './app/res/constants/dimentions';
// import SplashScreen from 'react-native-splash-screen';
// import { fetchReadingList } from './app/src/redux/middleware/fetchReadingList';
// import { store } from './app/src/redux/store';
// import {
//   setReaderListLoading,
//   setReaderListError,
//   setReaderList,
// } from './app/src/redux/slice/readinglistSlice';
// import { Provider } from 'react-redux';
const App = () => {
//   useEffect(()=>{
// if(!PLATFORM_IOS){
//   SplashScreen.hide();
// }

//   },[])
const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   // Simulate an async operation
//   setTimeout(() => {
//     setIsLoading(false);
//   }, 3000);
// }, []);
  return (
    <>
     {/* <Provider store={store}> */}
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <SafeAreaView style={{flex: 1, backgroundColor:'#FFFFFF'}}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
       
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
      {/* <FlashMessage position="top" />  */}
      </Provider>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: scale(97),
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#272B2E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderRadius: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    ...FONTS.bodyBold1,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#8E8E93',
    ...FONTS.hBold5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  progressBar: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    height: 5,
    width: '100%',
    backgroundColor: 'red',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});

