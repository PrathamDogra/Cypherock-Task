import React, { Component } from "react";
import ScreenOne from "./ScreenOne/ScreenOne";
import ScreenTwo from "./ScreenTwo/ScreenTwo";
import ScreenThree from "./ScreenThree/ScreenThree";
import Success from "./Success/Success";

export class UserForm extends Component {
  state = {
    step: 1,
    username: "",
    mobile: "",
    pincode: "",
    houseno: "",
    colony: "",
    city: "",
    landmark: "",
    state: "",
    country: "",
    cardtype: "",
    cardno: "",
    expirydatem: "",
    expirydatey: "",
    cvv: "",
    cardholdername: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      username,
      mobile,
      pincode,
      houseno,
      colony,
      city,
      landmark,
      state,
      country,
      cardtype,
      cardno,
      expirydatem,
      expirydatey,
      cvv,
      cardholdername,
    } = this.state;
    const values = {
      username,
      mobile,
      pincode,
      houseno,
      colony,
      city,
      landmark,
      state,
      country,
      cardtype,
      cardno,
      expirydatem,
      expirydatey,
      cvv,
      cardholdername,
    };

    switch (step) {
      case 1:
        return (
          <ScreenOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ScreenTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ScreenThree
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
