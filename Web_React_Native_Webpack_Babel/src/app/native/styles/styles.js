import { StyleSheet } from 'react-native';
import themeStyle from './theme.style';

export default appStyle = StyleSheet.create({
  reactNativeWeb: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },

  toolbarStyle : {
    backgroundColor : themeStyle.PRIMARY_COLOR,
    alignItems : 'center',
    flexDirection : 'row',
    paddingLeft : 16,
    paddingRight : 16,
    height : 48,
  },
  
  toolbarTextStyle : {
    color : 'white',
    fontSize : 18,
    fontWeight : 'bold'
  },

  textInputStyle : {
    backgroundColor : '#F8F8F8',
    paddingLeft : 16,
    paddingRight : 16,
    paddingTop : 8,
    paddingBottom : 8,
    borderRadius : 5
  },

  buttonStyle : {
    backgroundColor : themeStyle.PRIMARY_COLOR,
    padding : 8,
    borderRadius : 5,
    width : '60%',
    alignItems : 'center',
    alignSelf: 'center'
  },

  buttonTextStyle : {
    color : 'white',
    fontSize : 14,
  },

  linkStyle : {
    color : 'black',
    fontSize : 12,
    textDecorationLine : 'underline'
  }

});



