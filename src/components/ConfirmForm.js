import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class ConfirmForm extends Component {
  contiue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter preferences"></AppBar>
          <TextField
            hintText="Enter your main language programing"
            floatingLabelText="Main Language"
            onChange={handleChange("firstName")}
            defaultValue={values.FirstName}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your main eviroment"
            floatingLabelText="Main enviroment"
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
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.contiue}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
