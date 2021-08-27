import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './Icons.css'

const ExpandIcon = ({ setExpandView, expandView }) => {
  return (
      <AddIcon
        className="expand-btn"
        onClick={() => {
          setExpandView(!expandView);
        }}
        fontSize="large"
      />
  );
};

const HideIcon = ({ setExpandView, expandView }) => {
  return (
      <RemoveIcon
        className="expand-btn"
        onClick={() => {
          setExpandView(!expandView);
        }}
        fontSize="large"
      />
  );
};


export {ExpandIcon, HideIcon};
