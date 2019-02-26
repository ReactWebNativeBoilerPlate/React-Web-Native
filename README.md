# React_Web_Native_Babel_ReduxThunk


Boiler plate which shares application logic between a React Web app and a React Native app, while keeping the individual component rendering unique to each platform.



## Client app
The app has almost all major implementation which are required to start a project and below mentioned module are implemented to avoid rework for setting up the project and writing some basic flow like login, forget password, Registeration, and basic application flow till dashboard . 


#### Technologies Used

- React
- React Native
- Redux
- Webpack
- Babel



## Prebuild module for Web and Native

### Native
    - Login, Registration, forget password screen and basic flow till dashboard
    - Implementation for Map over iOS and Android
    - Push Notification  
    - Graph Library Integration
    - Camera, File and Image Picker
    - Locatlization support 
    - Support for while labling 


#### Screenshots:

 ![Screenshot 1](./Screenshots/native/scr1.png?raw=true) | ![Screenshot 1](./Screenshots/native/scr2.png?raw=true)
 ![Screenshot 1](./Screenshots/native/scr3.png?raw=true) | ![Screenshot 1](./Screenshots/native/scr4.png?raw=true)
 ![Screenshot 1](./Screenshots/native/scr5.png?raw=true) | ![Screenshot 1](./Screenshots/native/scr6.png?raw=true)
 ![Screenshot 1](./Screenshots/native/scr7.png?raw=true)

#### Prebuilt modules:

##### File Picker:

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

##### Image Picker:
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

##### Charts:
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

##### Map:

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

### Prebuilt Utilities:
##### Localizations:
Add the different locale files under 'src/app/locales' folder. Files for 'en' and 'he' locales are already added there as an example. Add resources for the newly added locales in 'i18n.js' file (located in the same folder).

Using localized strings:
```jsx
// import i18n file
import { strings } from './relative_path_to locales/i18n';
...

// then use it like this
<View>
    <Text>{strings('login.welcome', { name: this.state.username })}</Text>
    <Button title={strings('login.login_button')}></Button>
    <Button title={strings('login.singup_button')}></Button>
</View>

```

##### Image Util:
Use 'global.getImage' method to get images specific to the platform. This method accepts two parameters 'imageName' & 'loadComman'. the 'loadComman' param tells whether the image is common for both the platforms.

Images specific to Android platform are stored under 'images/android' folder while images specific to ios platform are stored under 'images/ios' folder.

Example:
```jsx
global.getImage('img_back', false)
```

##### Storage Util:
This util is for storing the persistent data. We are using 'sync-storage' for data storage but it can easily be replaced with any other implementation by making some small changes in its wrapper class 'StorageUtils'.

Use below methods for various operations:
- global.init- To initialiszse the storage
- global.get- To get data using the key
- global.set- To save data in the storage
- global.remove- To remove data from the storage
- global.saveItem- To save an item in the storage
- global.getAllKeys- To get all the keys

   
    
### Web
    - Login, Registration, forget password screen and basic flow till dashboard
    - Integrated Map
    - Graph Library Integration
    - Locatlization support 
    - Support for while labling 

#### Screenshots:

 ![Screenshot 1](./Screenshots/web/scr1.png?raw=true) | ![Screenshot 1](./Screenshots/web/scr2.png?raw=true)
 ![Screenshot 1](./Screenshots/web/scr3.png?raw=true) | ![Screenshot 1](./Screenshots/web/scr4.png?raw=true)
 ![Screenshot 1](./Screenshots/web/scr5.png?raw=true) | ![Screenshot 1](./Screenshots/web/scr6.png?raw=true)
 ![Screenshot 1](./Screenshots/web/scr7.png?raw=true)


### Prebuilt Utilities:
##### Localizations:
Add the different locale files under 'src/app/locales' folder. Files for 'en' and 'he' locales are already added there as an example. Add resources for the newly added locales in 'i18n.js' file (located in the same folder).

Using localized strings:
```jsx
// import i18n file
import { translate } from 'react-i18next';
...

// change export statement to this
export default translate()(Your_Component_Name);   // instead of "export default App;"


// then use it like this
<Link to="/forgotPassword">
    <Button style={style}  >
        { this.props.t('login.forgotPassword', { framework: "react-i18next" }) }
    </Button>
</Link>

```




## Server Side 

### Technologies Used

- Node JS  (Express Framework)
- Postgress (Can run on any latest version) (App will automatically create all the tables)

### Implemented Rest API's

- Login 
- Signup
- Forget Password 
- Dashboard 
- Update profile

### Configuring DB
For configuring DB alter the details in DBConfig.js

### Configuring Email Service
For Configuring Email service check for EmailServer.js file and put the credentials to enable any email account.


## Directories Structure

### Native 
This folder houses all the mobile side component which will render on any mobile 
web folder will contins all the files require for running web application.

### Web
This folder contains web application related code

### Other folder
All the other folder outside of Web and Native are the common code What's going on here is both the native app and web app are sharing their core application logic, while keeping the individual rendering separate.


## Entry Points

### Native
The entry point for the iOS/Android app is App.js

### Web
For the web app is src/app/web/index.html.


## Running applications 

There are 3 defined scripts in [package.json] which are commonly used:

- start-ios
- start-android
- start-web


before running any of the application(Web/Native) please run  "npm run install" and then "npm run update" then use any of the above mention commands. 

## start-ios and start-android 

'start-ios and start-android'  are used when running the native application. When you open either the XCode project or the android studio project and hit "run", it kicks off a node server via the start command. Every time you make a JavaScript change, instead of needing to rebuild and recompile your application, you simply refresh the app and the changes are magically there. As this is not a React Native guide I will not be going into more detail.

##start-web 
Will kickoff clients web application on port 3001 so you can use http://localhost:3001/ to access the first login page 

## Note 
Please note client App (Web client App) will run on port: 3001 and Node server will run on port: 3000

## For Node server user 
npm run start: For running the server to access rest API
