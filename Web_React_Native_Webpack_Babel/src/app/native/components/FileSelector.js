import RNFileSelector from 'react-native-file-selector';

export const openFileSelector = (onDone, onCancel) => {
    RNFileSelector.Show(
        {
            title: 'Select File',
            onDone: (path) => {
                console.log('file selected: ' + path)
                onDone(path)
            },
            onCancel: () => {
                console.log('cancelled')
                onCancel()
            }
        }
    )
}