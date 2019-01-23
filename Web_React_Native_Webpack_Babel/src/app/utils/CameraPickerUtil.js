import ImagePicker from 'react-native-image-picker';

export default function launchCamera(onSuccess, onCancel, onError) {
    const options = {
        title: 'Capture Image',
        takePhotoButtonTitle: 'Capture Image...',
        mediaType: 'photo',
      };
      ImagePicker.launchCamera(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
            onCancel();
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            onError(response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
            onSuccess(source)
          }
    })
}
