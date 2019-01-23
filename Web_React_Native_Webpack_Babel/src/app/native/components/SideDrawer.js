/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
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
            <View>
                <TouchableOpacity style={styles.container}
                    onPress = {() => this.props.navigation.navigate('FilePicker')}>
                    <Text style = {styles.itemTextStyle}>File Picker</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}
                    onPress = {() => this.props.navigation.navigate('CameraView')}>
                    <Text style = {styles.itemTextStyle}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}
                    onPress = {() => this.props.navigation.navigate('MapView')}>
                    <Text style = {styles.itemTextStyle}>Map</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 20,   
    },

    itemTextStyle : {
        fontSize : 16,
        color : 'black'
    }
});
export default SideDrawer;