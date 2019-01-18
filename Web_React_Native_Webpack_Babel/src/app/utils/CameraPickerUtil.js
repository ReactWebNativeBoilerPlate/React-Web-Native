import ImagePicker from 'react-native-image-picker';

export default function launchCamera(onResponse) {
    const options = {
        title: 'Video Picker',
        takePhotoButtonTitle: 'Take Video...',
        mediaType: 'video',
        videoQuality: 'medium',
      };
      ImagePicker.launchCamera(options, (response) => {
        onResponse(response)
    })
}
