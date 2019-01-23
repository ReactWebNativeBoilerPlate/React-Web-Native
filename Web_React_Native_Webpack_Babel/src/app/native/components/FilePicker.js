import React, { Component } from "react";
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import openDocumentPicker from '../../utils/DocumentPicker'

export default class FilePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath : 'No file choosen'
        }
    }
    render() {
        return(
            <View style = {styles.containerStyle}>
                <Text style = {styles.textStyle}>{'Selected file name : ' + this.state.filePath}</Text>

                <TouchableOpacity 
                    style = {styles.buttonStyle}
                    onPress = {() => openDocumentPicker(this.onResult)}>
                    <Text style = {styles.buttonTextStyle}>Open File Picker</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onResult = (error, res) => {
        this.setState({filePath : res.fileName})
    }

    onCancel() {
        
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding : 20,
        alignItems : 'center',
    },

    buttonStyle : {
        width : '40%',
        backgroundColor : 'blue',
        padding : 8,
        marginTop : 40,
        alignItems : 'center'
    },

    buttonTextStyle : {
        fontSize : 18,
        color : 'white'
    },

    textStyle : {
        fontSize : 16,
        color : 'black'
    }
});