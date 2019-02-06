import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import appTheme from "../../styles/theme.style";

import Toolbar from "../../components/ToolbarWithMenu";
import { Container, Tab, Tabs } from "native-base";
import Holder from "../../components/HolderComponent";

/************************** Redux************************/
import { connect } from "react-redux";
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
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: appTheme.PRIMARY_COLOR }}
        >
          <Tab
            heading="Tab1"
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            textStyle={{ color: "#000" }}
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#000", fontWeight: "normal" }}
          >
            <Holder />
          </Tab>
          <Tab
            heading="Tab2"
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            textStyle={{ color: "#000" }}
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#000", fontWeight: "normal" }}
          >
            <Holder />
          </Tab>
          <Tab
            heading="Tab3"
            tabStyle={{ backgroundColor: "#F8F8F8" }}
            textStyle={{ color: "#000" }}
            activeTabStyle={{ backgroundColor: "#F8F8F8" }}
            activeTextStyle={{ color: "#000", fontWeight: "normal" }}
          >
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
