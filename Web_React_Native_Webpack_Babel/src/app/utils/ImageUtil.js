import {Platform} from 'react-native';



var Image = {
     IMG_BACK : 'img_back',
     IMG_HOME : 'img_home',
     IMG_NOTIFICATION : 'img_notification',
     IMG_CROSS : 'img_cross',
     IMG_MENU : 'img_menu',
     IMG_SPLASH : "img_splash"
};
global.ImageName = Image;

global.getImage =  function getImage(imgName, loadCommon = true) {
    if(loadCommon)
    {
        switch(imgName) {
            case Image.IMG_SPLASH:
             return  require('../images/splash.png');
        }
    } else {
        switch(imgName) {
            case Image.IMG_BACK:
            return Platform.OS === 'android' ? require('../images/android/img_back.png') : require('../images/ios/img_back.png');

            case Image. IMG_HOME:
            return Platform.OS === 'android' ? require('../images/android/img_home.png') : require('../images/ios/img_home.png');

            case Image. IMG_NOTIFICATION:
            return Platform.OS === 'android' ? require('../images/android/img_notification.png') : require('../images/ios/img_notification.png');

            case Image. IMG_CROSS:
            return Platform.OS === 'android' ? require('../images/android/img_cross.png') : require('../images/ios/img_cross.png');

            case Image. IMG_MENU:
            return Platform.OS === 'android' ? require('../images/android/img_menu.png') : require('../images/ios/img_menu.png');

            default:
            break;
        }
  }
};