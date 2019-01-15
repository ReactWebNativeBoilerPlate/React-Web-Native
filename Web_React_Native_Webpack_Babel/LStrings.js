import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export let strings = new LocalizedStrings({
 "en-US":{
   hi: "Hi There"
 },
 en:{
    hi: "Hi There"
 },
 it: {
    hi: "Ciao"
 },
 fr: {//french
     hi: "salut"
 },
 de: {//germen
     hi: "Hallo"
 },
 ga: {//irish
     hi: "Dia Duit"
 },
 hi: {//Hindi
     hi: "नमस्ते"
 },
 ja: {//japanese
     hi: "こんにちは"
 },
 pt: {//portuguese
     hi: "Olá"
 },
 es: {//spanish
     hi: "Hola"
 }
});