import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import CheckBoxArray from "./CheckBoxArray";

export default class FormSeachParams extends Component {
  contiue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const features = [...values.programFeatures];
    return (
      <MuiThemeProvider>
        <AppBar title="Enter preferences"></AppBar>
        <div style={styles.container}>
          <div style={styles.defs}>
            <TextField
              hintText="Your main language programing"
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
          </div>
          <CheckBoxArray
            style={styles.Array}
            programFeatures={features}
          ></CheckBoxArray>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    alignItens: "center",
    justifyContent: "center"
  },
  defs: {
    display: "flex",
    alignItens: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginright: "-150"
  },
  Array: {
    boxsizing: "border-box",
    margin: 15
  },
  button: {
    margin: 15
  }
};

/**
 * 
 * <CheckBoxArray
            className="Array"
            programFeatures={features}
            onChange={handleChange("programFeatures")}
          />
 */
