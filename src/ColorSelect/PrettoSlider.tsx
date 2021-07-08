import { withStyles, Slider } from "@material-ui/core";
import React from "react";

export const PrettoSlider = withStyles({
  root: {
    height: 8,
    width: 250,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
