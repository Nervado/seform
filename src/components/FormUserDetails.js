import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter preferences"></AppBar>
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.FirstName}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.FirstName}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.FirstName}
          ></TextField>
          <br />
          <div className="buttons">
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={true}
              style={styles.button}
              onClick={this.back}
            />
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  buttons: {
    display: "flex"
  },
  button: {
    margin: 15
  }
};
