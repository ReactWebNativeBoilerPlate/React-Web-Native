import React, { Component } from 'react';
import { View } from 'react-native';

import appStyle from '../../styles/styles';
import HelloWorld from '../../components/HelloWorld';

import Toolbar from '../../components/ToolbarWithMenu';

/************************** Redux************************/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
/********************************************************/



class Dashboard extends Component {

  componentDidMount() {
    this.interval = setInterval(
      () => {
        clearInterval(this.interval);
        this.props.navigation.navigate('Home');
      },
      1000
    );
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
      <View>
        <Toolbar headerText = 'Dashboard'></Toolbar> 
      </View>

    );
  }
}


const mapStateToProps = state => {
  console.log('login new mapStateToProps', state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

