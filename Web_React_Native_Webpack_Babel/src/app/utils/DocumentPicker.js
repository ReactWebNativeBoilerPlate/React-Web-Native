import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

export default function openDocumentPicker(onResult) {
    DocumentPicker.show({
        filetype: [DocumentPickerUtil.images()],
        },(error,res) => {
            // console.log(res.uri, res.type, res.fileName, res.fileSize);
            onResult(error, res);
        });
}