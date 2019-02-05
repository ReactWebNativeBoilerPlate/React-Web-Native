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

import { Container, Content, Text, List, ListItem, View } from "native-base";



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
                        source={require('../../images/avatar.png')}
                        style={{
                            height: 120,
                            alignSelf: "center",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                    </Image>
                    <List>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('FilePicker')}>
                                <View style = {styles.innerContainerStyle}>
                                <Image source = {require('../../images/ic_file.png')}
                                    style = {{width : 24, height : 24, marginRight : 8}}
                                    />
                                <Text style={styles.itemTextStyle}>File Picker</Text>
                                </View>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('CameraView')}>
                                <View style = {styles.innerContainerStyle}>
                                <Image source = {require('../../images/ic_camera.png')}
                                    style = {{width : 24, height : 24, marginRight : 8}}
                                    />
                                <Text style={styles.itemTextStyle}>Camera</Text>
                                </View>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('MapView')}>
                                <View style = {styles.innerContainerStyle}>
                                <Image source = {require('../../images/ic_map.png')}
                                    style = {{width : 24, height : 24, marginRight : 8}}
                                    />
                                <Text style={styles.itemTextStyle}>Map</Text>
                                </View>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.container}
                                onPress={() => this.props.navigation.navigate('ChartView')}>
                                <View style = {styles.innerContainerStyle}>
                                <Image source = {require('../../images/ic_chart.png')}
                                    style = {{width : 24, height : 24, marginRight : 8}}
                                    />
                                <Text style={styles.itemTextStyle}>Charts</Text>
                                </View>
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
        padding: 8,
    },

    innerContainerStyle: {
        flexDirection: 'row',
        alignItems : 'center'
    },

    itemTextStyle: {
        fontSize: 16,
        color: 'black'
    }
});
export default SideDrawer;