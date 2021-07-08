import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { Button } from "@material-ui/core";
import "../App.css";
import "react-color-palette/lib/css/styles.css";

function ColorSelectorThumbDialogContent({
  onOkClick,
}: {
  onOkClick: Function;
}) {
  const [color, setColor] = useColor("hex", "#121212");

  const handleOnClick = (event: React.MouseEvent) => {
    onOkClick(color.hex);
  };

  return (
    <div className="Color-Picker-Dialog">
      <div>
        <ColorPicker
          width={200}
          height={100}
          color={color}
          onChange={setColor}
          hideHSV
        />
      </div>
      <Button onClick={handleOnClick} variant="contained" color="primary">
        Ok
      </Button>
    </div>
  );
}

export default ColorSelectorThumbDialogContent;
