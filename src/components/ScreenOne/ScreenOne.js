import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./One.module.css";
export class ScreenOne extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth="sm"
            className={styles.container}
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Username"
              label="Enter Your Username"
              onChange={handleChange("username")}
              defaultValue={values.username}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              placeholder="Mobile"
              label="Enter Your Mobile No"
              onChange={handleChange("mobile")}
              defaultValue={values.mobile}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              placeholder="Pincode"
              label="Pincode"
              onChange={handleChange("pincode")}
              defaultValue={values.pincode}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              label="Flat, House no, Building, Company, Apartment"
              onChange={handleChange("houseno")}
              defaultValue={values.houseno}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              label="Area, Colony, Street, Sector, Village"
              onChange={handleChange("colony")}
              defaultValue={values.colony}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              label="Landmark e.g. near Apollo hospital"
              onChange={handleChange("landmark")}
              defaultValue={values.landmark}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              label="Town/City"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              label="State"
              onChange={handleChange("state")}
              defaultValue={values.state}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <TextField
              label="Country"
              onChange={handleChange("country")}
              defaultValue={values.country}
              margin="normal"
              fullWidth="true"
              className={styles.text}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              className={styles.button}
            >
              Continue
            </Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ScreenOne;
