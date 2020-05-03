import React, { Component } from "react";
import styles from "./Two.module.css";
import { Button } from "@material-ui/core";
export default class ScreenTwo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.topBox}>
          <p>Payment Details</p>
        </div>
        <div className={styles.middleBox}>
          <label class={styles.containerRadio}>
            Debit Card
            <input
              type="radio"
              name="radio"
              value="Debit"
              onChange={handleChange("cardtype")}
              defaultValue={values.cardtype}
            />
            <span class={styles.checkmark}></span>
          </label>
          <label class={styles.containerRadio}>
            Credit Card
            <input
              type="radio"
              name="radio"
              value="Credit"
              onChange={handleChange("cardtype")}
              defaultValue={values.cardtype}
            />
            <span class={styles.checkmark}></span>
          </label>
          <label class={styles.containerRadio}>
            UPI
            <input
              type="radio"
              name="radio"
              value="UPI"
              onChange={handleChange("cardtype")}
              defaultValue={values.cardtype}
            />
            <span class={styles.checkmark}></span>
          </label>
          <label class={styles.containerRadio}>
            Cash On Delivery
            <input type="radio" name="radio" disabled />
            <span class={styles.checkmark}></span>
          </label>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.cardNum}>
            <label>Card Number</label>
            <br />
            <input
              type="text"
              className={styles.cardField}
              placeholder="xxxx-xxxx-xxxx"
              onChange={handleChange("cardno")}
              defaultValue={values.cardno}
            />
          </div>
          <div className={styles.dateField}>
            <label>Expiry Date</label>
            <br />
            <input
              type="text"
              className={styles.date}
              placeholder="mm"
              onChange={handleChange("expirydatem")}
              defaultValue={values.expirydatem}
            />
            <input
              type="text"
              className={styles.date}
              placeholder="yyyy"
              onChange={handleChange("expirydatey")}
              defaultValue={values.expirydatey}
            />
          </div>
          <div className={styles.cvvField}>
            <label>CVV</label>
            <br />
            <input
              type="password"
              className={styles.cvv}
              placeholder="xxx"
              onChange={handleChange("cvv")}
              defaultValue={values.cvv}
            />
          </div>
          <div className={styles.nameField}>
            <label>Card Holder Name</label>
            <br />
            <input
              type="text"
              className={styles.name}
              placeholder="Full Name"
              onChange={handleChange("cardholdername")}
              defaultValue={values.cardholdername}
            />
          </div>

          <Button
            color="secondary"
            variant="contained"
            className={styles.payButton}
            onClick={this.back}
          >
            Back
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={styles.payButton}
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
}
