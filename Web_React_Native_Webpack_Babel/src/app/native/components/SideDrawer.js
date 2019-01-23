/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';




class SideDrawer extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#16a085",
            elevation: null
        },
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
              
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default SideDrawer;