import ImagePicker from 'react-native-image-picker';

export default function launchImagePicker(onSuccess, onCancel, onError) {
    const options = {
        title: 'Select Image',
        takePhotoButtonTitle: 'Capture Image...',
        mediaType: 'photo',
      };
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
            onCancel();
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            onError(response.error);
          } else {
            const source = { uri: response.uri };
            onSuccess(source)
          }
    })
}
