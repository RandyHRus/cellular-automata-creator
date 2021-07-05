import { Input } from "@material-ui/core";
import React from "react";

function CellNameInput(props: any) {
  const inputProps = {
    placeholder: "Cell name",
    backgroundColor: "#EBEBEB",
    border: "rgba(0,0,0,0)",
    caretColor: "#333",
  };

  return <Input {...inputProps} />;
}

export default CellNameInput;
