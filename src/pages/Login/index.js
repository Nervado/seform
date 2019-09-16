import React, { Component } from "react";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import "./index.css";

export default class Login extends Component {
  //const handleChange = () => {};
  render() {
    return (
      <MuiThemeProvider className="provider">
        <AppBar className="title" title="Login"></AppBar>
        <div className="login">
          <div className="Fields">
            <TextField
              hintText="Your username here"
              floatingLabelText="Username"
              defaultValue="Evandro"
            ></TextField>
            <br />
            <TextField
              hintText="Your main language programing"
              floatingLabelText="Main Language"
              defaultValue="123456"
            ></TextField>
            <br />
          </div>
          <div className="buttons">
            <RaisedButton className="btn" primary>
              <Link to="/form">
                {" "}
                <strong>Login</strong>{" "}
              </Link>
            </RaisedButton>
            <RaisedButton className="btn" secondary>
              <strong>Sigin</strong>
            </RaisedButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

//<AppBar title="Enter preferences"></AppBar>
