import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NeighbourCheckBoxes } from "./Neighbours/NeighbourCheckboxes";
import { Box, Grid } from "@material-ui/core";
import CellNameInput from "./CellNameInput/CellNameInput";

function App() {
  return (
    <div className="App">
      <div className="bg-rectangle">
        <div className="top-bar">
          <text className="cell-creator">Cell Creator</text>
        </div>
        <div className="test">
          <Grid container justify="center" spacing={5} alignContent="center">
            <Grid container item xs={12} spacing={1} justify="center">
              <CellNameInput />
            </Grid>
            <Grid container item xs={12} spacing={1} justify="center">
              <NeighbourCheckBoxes />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
