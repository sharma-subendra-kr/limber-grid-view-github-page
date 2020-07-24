import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClone, faHandPointUp } from "@fortawesome/free-regular-svg-icons";

import "./lgvTools.scss";

const LgvTools = (props) => {
  const { onLatchChange, onDeskInteractionChange, onAddItem } = props;

  const [latch, setLatch] = useState(true);
  const [addOrCut, setAddOrCut] = useState("ADD"); // ADD or CUTSPACE

  const onLatchClick = (event) => {
    setLatch(!latch);

    if (onLatchChange) {
      onLatchChange(!latch);
    }
  };

  const onAddOrCutClick = (event) => {
    let newState;
    if (addOrCut === "ADD") {
      setAddOrCut("CUTSPACE");
      newState = "CUTSPACE";
    } else {
      setAddOrCut("ADD");
      newState = "ADD";
    }

    if (onDeskInteractionChange) {
      onDeskInteractionChange(newState);
    }
  };

  const onAddItemClick = (event) => {
    if (onAddItem) {
      onAddItem();
    }
  };

  return (
    <div className="lgv-tools">
      <div className="lgv-tool lgv-tool-latch">
        <input
          type="checkbox"
          value={latch}
          defaultChecked={latch}
          onClick={onLatchClick}
        />
        <FontAwesomeIcon icon={faClone} rotation={90} />
        Latch on move
      </div>
      {addOrCut === "ADD" ? (
        <div className="lgv-tool" onClick={onAddOrCutClick}>
          <FontAwesomeIcon icon={faCut} />
          Cut Space
        </div>
      ) : (
        <div className="lgv-tool" onClick={onAddOrCutClick}>
          <FontAwesomeIcon icon={faHandPointUp} />
          Add by dragging
        </div>
      )}
      <div className="lgv-tool" onClick={onAddItemClick}>
        <FontAwesomeIcon icon={faPlus} />
        Add Item
      </div>
    </div>
  );
};

export default LgvTools;
