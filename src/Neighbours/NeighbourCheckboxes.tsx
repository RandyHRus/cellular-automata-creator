import React from "react";
import { Checkbox, makeStyles, Grid } from "@material-ui/core";
import "../App.css";

export function NeighbourCheckBoxes() {
  return (
    <div className="Neighbour-Checkboxes">
      <Grid container spacing={1} direction="column" alignItems="center">
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
        <Grid container item xs={12} spacing={1} justify="center">
          <CheckboxRow />
        </Grid>
      </Grid>
    </div>
  );
}

const CheckboxRow = () => {
  return (
    <React.Fragment>
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
      <NCheckbox />
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  input: {
    height: "20px",
    width: "20px",
    boxSizing: "border-box", // <-- add this to remove the touch area of checkboxes
  },
});

const NCheckbox = () => {
  const classes = useStyles();
  return <Checkbox color="primary" classes={{ root: classes.input }} />;
};
