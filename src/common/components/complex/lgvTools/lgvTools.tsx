import React, { useState } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import "./lgvTools.scss";

const LgvTools = (props) => {
	const {
		className,
		// onResizeMethodChange,
		onLatchChange,
		onDeskInteractionChange,
		onAddItem,
	} = props;

	// const [resizeMethod, setResizeMethod] = useState(false);
	const [latch, setLatch] = useState(true);
	const [addOrCut, setAddOrCut] = useState("CUTSPACE"); // ADD or CUTSPACE

	// const onResizeMethodClick = (event) => {
	// 	setResizeMethod(!resizeMethod);

	// 	if (onResizeMethodChange) {
	// 		onResizeMethodChange(!resizeMethod);
	// 	}
	// };

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
		<div className={`${className} lgv-tools`}>
			<FormGroup row>
				<FormControlLabel
					control={
						<Checkbox size="small" checked={latch} onClick={onLatchClick} />
					}
					label="Latch on move/resize"
				/>
				<div className="seperator" />
				<RadioGroup
					name="addOrCut"
					row
					onChange={onAddOrCutClick}
					value={addOrCut}
				>
					<FormControlLabel
						value="CUTSPACE"
						control={<Radio size="small" />}
						label={
							<>
								<FontAwesomeIcon icon={faCut} />
								{"  "}
								Cut Space
							</>
						}
					/>
					<FormControlLabel
						value="ADD"
						control={<Radio size="small" />}
						label={
							<>
								<TouchAppOutlinedIcon />
								{"  "}Add item by dragging
							</>
						}
					/>
				</RadioGroup>
				<div className="seperator" />
				<FormControlLabel
					control={
						<IconButton size="small" onClick={onAddItemClick}>
							<AddOutlinedIcon />
						</IconButton>
					}
					label="Add item"
				/>
			</FormGroup>
		</div>
	);
};

const StyledLgvTools = styled(LgvTools)`
	span {
		font-size: 12px !important;
	}
	.seperator {
		width: 2px;
		height: 100%;
		margin: 0 10px;
		background-color: #c0c0c0;
	}
	.MuiButtonBase-root {
		padding-top: 0;
		padding-bottom: 0;
	}
	.MuiSvgIcon-root {
		vertical-align: middle;
	}
`;

export default StyledLgvTools;
