import { Tooltip } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

function ValueLabelComponent(props: any) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top-start"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

export default ValueLabelComponent;
