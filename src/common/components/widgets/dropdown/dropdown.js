import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import "./dropdown.scss";

export const DropDown = (props) => {
  const { options = ["add", "remove"], onSelectCb } = props;

  const [open, setOpen] = useState(false);

  const onClickItem = (key) => {
    setOpen(!open);
    onSelectCb(key);
  };

  const toggleDropDown = () => {
    setOpen(!open);
  };

  return (
    <div className="drop-down-container">
      <button className="drop-down-button" onClick={toggleDropDown}>
        <FontAwesomeIcon icon={faCog} />
      </button>
      {open && (
        <div className="drop-down">
          {options.map((o) => {
            return (
              <div
                key={o}
                className="drop-down-item"
                onClick={() => onClickItem(o)}
              >
                {o}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
