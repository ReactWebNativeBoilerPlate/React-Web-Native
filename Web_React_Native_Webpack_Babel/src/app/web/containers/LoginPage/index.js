/**
 * LoginPage
 *
 * This is the page we show when the user visits login url
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row
} from 'reactstrap';

import Center from 'react-center';


import Button from '@material-ui/core/Button';
import '../../css/custom.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import * as loginActions from '../../../actions/LoginAction';
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
`;


class LoginPage extends Component {



  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      statusMessage: "", width: 0, height: 0,
      open: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email != undefined && this.state.email != "" && this.state.password != undefined && this.state.password != "")
      this.props.actions.doLogin({ email: this.state.email, password: this.state.password });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.history.push('/home');
    } else
      if (nextProps.loginResponse) {
        this.setState({ statusMessage: nextProps.loginResponse.message });
        this.setState({ open: !this.props.isLoggedIn });
      }
  }


  handleChange(event) {

    const target = event.target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;

    this.setState({ [name]: value });

  }



  render() {
    const style =
    {
      margin: 15,
      bg: {
        backgroundColor: '#fafafa',
        height: '100vh'
      },
      inner: {
        marginTop: '15%',
        padding: "20px"
      },
      close: {
        padding: 10,
      },

    };

    console.log('************ Rendering login **********************');
    let { loginResponse, isLoggedIn } = this.props;
    console.log('render props loginResponse: ', loginResponse, isLoggedIn, window.height);
    return (

      <Container style={{ display: 'flex', backgroundColor: "green", height: this.state.height - 10, flexDirection: 'column', }}>

        <Container style={{ display: 'flex', height: 80, backgroundColor: "#A52A2A", flexDirection: 'row', width: "100%", justifyContent: 'flex-end' }}>
          <MuiThemeProvider>
            <TextField
              name="email"
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <TextField
              name="password"
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <Link to="/home" style={{ textDecoration: 'none' }} >
              <Button variant="contained" color="primary" style={style} /* onClick={(event) => this.handleSubmit(event)} */ >
                Login
              </Button>
            </Link>

            <Link to="/forgotPassword">
              <Button style={style}  >
                Forgot Password
                </Button>
            </Link>

            <Link to="/signup" style={{ textDecoration: 'none' }} >
              <Button variant="contained" color="secondary" style={style} >
                Register
                </Button>
            </Link>
          </MuiThemeProvider>
        </Container>
        <Container style={{ display: 'flex', width: '100%', height: "100%", backgroundColor: "white" }}>

         
        </Container>


        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          variant="error"
          open={this.state.open}
          autoHideDuration={12000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.statusMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Container >

    );
  }
}


function mapStateToProps(state) {
  console.log('login new mapStateToProps', state);
  return {
    loginResponse: state.loginReducer.loginResponse,
    isLoggedIn: state.loginReducer.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

LoginPage.propTypes = {
  loginResponse: PropTypes.any,
  actions: PropTypes.any,
  doLogin: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  history: PropTypes.any,
  push: PropTypes.any,
  message: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);