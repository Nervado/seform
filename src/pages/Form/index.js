import React, { Component } from "react";
import FormSeachParams from "../../components/FormSeachParams";

//import FormSeachParams from "../../components/FormSeachParams";
//import FormUserDetails from "../../components/FormUserDetails";

// import { Container } from './styles';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    country: "",
    hackathonName: "",
    hackathonSponsors: [],
    programFeatures: [
      "email modules",
      "styled components",
      "auth modules",
      "sms modules",
      "IA modules",
      "react",
      "react native",
      "Angular"
    ]
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // handle change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, programFeatures } = this.state;

    const values = { firstName, lastName, email, programFeatures };

    switch (step) {
      case 1:
        return (
          <FormSeachParams values={values} handleChange={this.handleChange} />
        );
      case 2:
        return <div> case 2 </div>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Sucess</h1>;
      default:
        return <h1> '=(' </h1>;
    }
  }
}

export default UserForm;

/*
export default class UserForm extends Component {

  
  render() {
    console.log(programFeatures);
    
  }
}
*/
