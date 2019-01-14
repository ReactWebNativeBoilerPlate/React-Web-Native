import {Platform} from 'react-native';

export const IMG_BACK = 'img_back';
export const IMG_HOME = 'img_home';
export const IMG_NOTIFICATION = 'img_notification';
export const IMG_CROSS = 'img_cross';
export const IMG_MENU = 'img_menu';

export default function getImage(imgName) {
    switch(imgName) {
        case IMG_BACK:
         return Platform.OS === 'android' ? require('../images/android/img_back.png') : require('../images/ios/img_back.png');

         case IMG_HOME:
         return Platform.OS === 'android' ? require('../images/android/img_home.png') : require('../images/ios/img_home.png');

        case IMG_NOTIFICATION:
        return Platform.OS === 'android' ? require('../images/android/img_notification.png') : require('../images/ios/img_notification.png');

        case IMG_CROSS:
         return Platform.OS === 'android' ? require('../images/android/img_cross.png') : require('../images/ios/img_cross.png');

        case IMG_MENU:
        return Platform.OS === 'android' ? require('../images/android/img_menu.png') : require('../images/ios/img_menu.png');

        default:
        break
    }
}