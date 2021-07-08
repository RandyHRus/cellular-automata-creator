import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import ColorSelectorThumbDialogContent from "./ColorSelectorThumbDialogContent";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { PrettoSlider } from "./PrettoSlider";
import { ConfirmationNumberSharp } from "@material-ui/icons";

class Color {
  constructor(public color: string) {}
}

const defaultColor = "#ff0d4d";
const defaultValue = 1;

function ColorSelect(this: any, props: any) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [colors, setColors] = useState<Color[]>([new Color(defaultColor)]);
  const [values, setValues] = useState<number[]>([defaultValue]);
  const [previousColorValues, setPreviousColorValues] = useState<
    number | number[]
  >([]);
  const [sliderChangedFlag, setSliderChangedFlag] = useState<boolean>(false);

  function addColorClickHandler() {
    setValues((numbers) => [...numbers, 0.5]);
    setColors((colors) => [...colors, new Color(defaultColor)]);
  }

  const sliderChangeHandler = (event: any, newValue: number | number[]) => {
    if (typeof newValue === "number") setValues([newValue]);
    else setValues(newValue);
  };

  function sliderChangeCommitedHandler(
    event: any,
    newValue: number | number[]
  ) {
    //Don't need to do if there is only one number
    if (!(typeof newValue === "number")) {
      values.forEach((number, index) => {});
    }

    if (!(JSON.stringify(newValue) === JSON.stringify(previousColorValues))) {
      setSliderChangedFlag(true);
      setPreviousColorValues(newValue);
    }
  }

  function DialogClickOpen() {
    setDialogOpen(true);
  }

  return (
    <div className="Color-select">
      <PrettoSlider
        track={false}
        value={values}
        onChange={sliderChangeHandler}
        onChangeCommitted={sliderChangeCommitedHandler}
        valueLabelDisplay="auto"
        min={0}
        max={1}
        step={0.005}
        ThumbComponent={CustomThumbComponent}
      />
      <IconButton color="primary" onClick={addColorClickHandler}>
        <AddCircleRoundedIcon />
      </IconButton>
      <ColorPickerDialog />
    </div>
  );

  function ColorPickerDialog(props: any) {
    const handleDialogClose = () => {
      setDialogOpen(false);
    };
    const handleDialogCloseOk = (colorHex: string) => {
      setDialogOpen(false);
    };

    return (
      <Dialog onClose={handleDialogClose} open={dialogOpen}>
        <ColorSelectorThumbDialogContent
          onOkClick={handleDialogCloseOk}
        ></ColorSelectorThumbDialogContent>
      </Dialog>
    );
  }

  function CustomThumbComponent(props: any) {
    const [color, setColor] = useState<string>(
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );

    let isTarget: boolean = false;
    alert(JSON.stringify(props.data));

    const handleThumbClick = (event: any) => {
      if (!sliderChangedFlag) {
        isTarget = true;
        DialogClickOpen();
      } else {
        setSliderChangedFlag(false);
      }
    };

    return (
      <span {...props} onClick={handleThumbClick}>
        <FiberManualRecordRoundedIcon style={{ fill: color }} />
      </span>
    );
  }
}

export default ColorSelect;
