import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import styles from "./Three.module.css";
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
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
        cardholdername,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog open="true" fullWidth="true" maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Username" secondary={username} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mobile" secondary={mobile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pincode" secondary={pincode} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Flat, House no, Building"
                  secondary={houseno}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Area, Colony, Street"
                  secondary={colony}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Landmark" secondary={landmark} />
              </ListItem>
              <ListItem>
                <ListItemText primary="State" secondary={state} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country" secondary={country} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Card Type" secondary={cardtype} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Card Holder Name"
                  secondary={cardholdername}
                />
              </ListItem>
            </List>

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
              Confirm
            </Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
