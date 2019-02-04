/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity,

} from 'react-native';

import { Container, Content, Text, List, ListItem } from "native-base";



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

            <Container>
                <Content>
                    <Image
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                    </Image>
                    <List>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('FilePicker')}>
                                <Text style={styles.itemTextStyle}>File Picker</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('CameraView')}>
                                <Text style={styles.itemTextStyle}>Camera</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('MapView')}>
                                <Text style={styles.itemTextStyle}>Map</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('ChartView')}>
                                <Text style={styles.itemTextStyle}>Charts</Text>
                            </TouchableOpacity>
                        </ListItem>
                    </List>
                </Content>
            </Container>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    itemTextStyle: {
        fontSize: 16,
        color: 'black'
    }
});
export default SideDrawer;