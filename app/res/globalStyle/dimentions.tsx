import {Platform, Dimensions, StatusBar} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height; 
export const PLATFORM_IOS = Platform.OS === 'ios' ? true : false;
export const STATUSBAR_HEIGHT = PLATFORM_IOS ? 10 : StatusBar.currentHeight;
export const HEADER_HEIGHT = 36;

// getStatusBarHeight
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const IPHONE_12_WIDTH = 390;
export const IPHONE_12_HEIGHT = 844;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

export let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) ||
    (W_WIDTH === IPHONE_12_WIDTH && W_HEIGHT === IPHONE_12_HEIGHT);
}
