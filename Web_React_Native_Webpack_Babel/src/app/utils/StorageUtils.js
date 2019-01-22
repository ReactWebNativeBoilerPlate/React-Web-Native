import SyncStorage from "sync-storage";


/**
 * Use to store object/Data into storage, 
 * Can be used globally via global object
 * 
 * Change the implementation of each wrapper methode if preffered any other library then sync-storage
 */

  global.init = function () {
    SyncStorage.init();
  }

  global.get = function (key , defalutValue) {
   var value = SyncStorage.get(key)
   if(value)
   {
       return value;
   }
   return defalutValue;
  }

  global.set =  function (key, value){
   return SyncStorage.set(key, value)
  }

  global.remove =  function (key) {
    return SyncStorage.remove(key)
  }

  global.saveItem = function (stringArray) {
     SyncStorage.saveItem(stringArray)
  }

  global.getAllKeys = function () {
   return SyncStorage.getAllKeys(stringArray)
  }