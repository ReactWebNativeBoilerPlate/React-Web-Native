# Native App:

# Screenshots:

![Alt text](./scr1.png?raw=true "Optional Title")

## Prebuilt modules:

### File Picker:

```jsx
import openDocumentPicker from "../../utils/DocumentPicker";
...

<TouchableOpacity
  style={appStyles.buttonStyle}
  onPress={this.openDocumentPicker(this.onResult)}>

  <Text style={appStyles.buttonTextStyle}>Open File Picker</Text>
</TouchableOpacity>


  openDocumentPicker = (onResult) => {
    openDocumentPicker(onResult)
  }

  onResult = (error, res) => {
    // handle the result (success/ error) here
    console.log('Selected file path: ' + res.fileName)
  };
```

### Image Picker:
To pick an image from gallery/ camera and show on screen:

```jsx
import launchImagePicker from "../../utils/ImagePickerUtils";
...

<View style={styles.containerStyle}>
  <Toolbar
    headerText="Select Image"
    isBackEnabled={true}
    navigation={this.props.navigation}
  />
  <Image style={styles.imageStyle} source={this.state.avatarSource} />

  <TouchableOpacity
    style={appStyles.buttonStyle}
    onPress={() =>
      launchImagePicker(this.onResult, this.onCancel, this.OnError)
    }>

    <Text style={appStyles.buttonTextStyle}>Load Image</Text>
  </TouchableOpacity>
</View>


onResult = source => {
    this.setState({ avatarSource: source });
};

onCancel = () => {
    //handle as per requirement
}

onError = (error) => {
    //handle as per requirement
}
```

### Charts:
(code below shows an example of line chart):

```jsx
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { LineChart, Grid } from 'react-native-svg-charts';
...

render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
            </LinearGradient>
        </Defs>
        );

    return (
        <LineChart
            style={ { height: 200 } }
            data={ data }
            contentInset={ { top: 20, bottom: 20 } }
            svg={{
                strokeWidth: 2,
                stroke: 'url(#gradient)',
            }}>
            <Grid/>
            <Gradient/>
        </LineChart>
        );
    }
```

### Map:

The framework uses 'react-native-maps' library to show map (Google map in Android and Apple map in iOS). The code below shows an example to use it.

```jsx
import MapView from "react-native-maps";
...

<MapView
    style={{ flex: 1, position: "relative" }}
      region={{
        latitude: 42.882004,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      showsUserLocation={true}
    />
```

## Prebuilt Utilities:
### Localizations:
Add the different locale files under 'src/app/locales' folder. Files for 'en' and 'he' locales are already added there as an example. Add resources for the newly added locales in 'i18n.js' file (located in the same folder).

Using localized strings:
```jsx
// import i18n file
import { strings } from './relative_path_to locales/i18n';
...

//then use it like this
<View>
    <Text>{strings('login.welcome', { name: this.state.username })}</Text>
    <Button title={strings('login.login_button')}></Button>
    <Button title={strings('login.singup_button')}></Button>
</View>

```

### Image Util:
Use 'global.getImage' method to get images specific to the platform. This method accepts two parameters 'imageName' & 'loadComman'. the 'loadComman' param tells whether the image is common for both the platforms.

Images specific to Android platform are stored under 'images/android' folder while images specific to ios platform are stored under 'images/ios' folder.

Example:
```jsx
global.getImage('img_back', false)
```

### Storage Util:
This util is for storing the persistent data. We are using 'sync-storage' for data storage but it can easily be replaced with any other implementation by making some small changes in its wrapper class 'StorageUtils'.

Use below methods for various operations:
- global.init- To initialiszse the storage
- global.get- To get data using the key
- global.set- To save data in the storage
- global.remove- To remove data from the storage
- global.saveItem- To save an item in the storage
- global.getAllKeys- To get all the keys

