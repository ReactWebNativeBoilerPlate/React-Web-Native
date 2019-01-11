import {Platform} from 'react-native';
export const IMG_BACK = 'img_back';

export default function getImage(imgName) {
    switch(imgName) {
        case IMG_BACK:
         return Platform.OS === 'android' ? require('../images/android/img_back.png') : require('../images/ios/img_back.png');
    }
}