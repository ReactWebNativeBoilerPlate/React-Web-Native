import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import appStyle from "../../styles/styles";
import HelloWorld from "../../components/HelloWorld";

import Toolbar from "../../components/ToolbarWithMenu";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import Holder from "../../components/HolderComponent";

/************************** Redux************************/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
/********************************************************/

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

class Dashboard extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      clearInterval(this.interval);
      this.props.navigation.navigate("Home");
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component  will receive props");
    console.log(nextProps);
  }
  handleSubmit(event) {
    console.log(this.props);
  }

  render() {
    return (
      <Container>
        <Toolbar headerText="Dashboard" navigation={this.props.navigation} />
        <Tabs>
          <Tab heading="Tab1">
            <Holder />
          </Tab>
          <Tab heading="Tab2">
            <Holder />
          </Tab>
          <Tab heading="Tab3">
            <Holder />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});

const mapStateToProps = state => {
  console.log("login new mapStateToProps", state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

// Wrap the component to inject dispatch and state into it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
