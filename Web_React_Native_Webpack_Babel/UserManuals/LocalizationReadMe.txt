Source:

react-native-localization
https://github.com/stefalda/ReactNativeLocalization/


Defined like:

let strings = new LocalizedStrings({
 "en-US":{
   hi:"Hi there"
 },
 en: {
     hi: "Hi there"
 },
 hi: {
hi: "नमस्ते"
 }
});

Use it this way:
<Text>{strings.hi}</Text>


Updation:

1. updated like: (NOTE that this will remove all other localizations if used.)

strings.setContent({
  en:{
    hi: "Hello there"
  }
})

Or

2. updated like: (This will apply to specific language)

strings.setContent(Object.assign({},strings.getLocaleObject(),
{
  en:{
    hi: "Hello there"
  }
}));



APIs:

setLanguage(languageCode) - to force manually a particular language
getLanguage() - to get the current displayed language
getInterfaceLanguage() - to get the current device interface language
formatString() - to format the passed string replacing its placeholders with the other arguments strings
  en:{
    bread:"bread",
    butter:"butter",
    question:"I'd like {0} and {1}, or just {0}"
  }
  ...
  strings.formatString(strings.question, strings.bread, strings.butter)
Beware: do not define a string key as formatString or language!

getAvailableLanguages() - to get an array of the languages passed in the constructor


Examples:

To force a particular language use something like this:

_onSetLanguageToItalian() {
  strings.setLanguage('it');
  this.setState({});
}

