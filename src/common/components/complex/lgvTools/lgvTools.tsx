import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { withLGV } from "../../hoc/withLGV";
import {
	getLatch,
	changeLatchAction,
	getDeskInteractionMode,
	changeDeskInteractionModeAction,
	setPositionDataAction,
} from "src/pages/home/ducks";

import "./lgvTools.scss";

const LgvTools = (props) => {
	const {
		className,
		latch,
		changeLatchAction,
		deskInteractionMode,
		changeDeskInteractionModeAction,
		setPositionDataAction,
		lgv,
	} = props;

	const onUndo = () => {
		lgv.current.undo();
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const onRedo = () => {
		lgv.current.redo();
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const onLatchClick = ({ target: { checked } }) => {
		lgv.current.setLatchMovedItem(checked);
		changeLatchAction(checked);
	};

	const onAddOrCutClick = ({ target: { value } }) => {
		lgv.current.setDeskInteractMode(value);
		changeDeskInteractionModeAction(value);
	};

	const onAddItemClick = (event) => {
		// addComplete callback present so not updating the redux store here
		lgv.current.addItem();
	};

	return (
		<div className={`${className} lgv-tools`}>
			<FormGroup row>
				<FormControlLabel
					control={
						<IconButton size="small" onClick={onUndo}>
							<UndoIcon />
						</IconButton>
					}
					label="Undo"
				/>
				<div className="seperator" />
				<FormControlLabel
					control={
						<IconButton size="small" onClick={onRedo}>
							<RedoIcon />
						</IconButton>
					}
					label="Redo"
				/>
				<div className="seperator" />
				<FormControlLabel
					control={
						<Checkbox size="small" checked={latch} onClick={onLatchClick} />
					}
					label="Latch on move/resize"
				/>
				<div className="seperator" />
				<RadioGroup
					className="add-cut-group"
					name="addOrCut"
					row
					onChange={onAddOrCutClick}
					value={deskInteractionMode}
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
	overflow: hidden;

	span {
		font-size: 12px !important;
	}
	.MuiFormControlLabel-root {
		margin: 0;
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
		padding-left: 0;
	}
	.MuiSvgIcon-root {
		vertical-align: middle;
	}
	.MuiFormGroup-root.add-cut-group {
		> label:first-child {
			margin-right: 10px;
		}
	}

	@media only screen and (max-width: 980px) and (min-width: 1px) and (orientation: portrait),
		only screen and (max-width: 979px) and (min-width: 1px) and (orientation: landscape) {
		display: none;
	}
`;

export default compose(
	withLGV,
	connect(
		(state) => ({
			latch: getLatch(state),
			deskInteractionMode: getDeskInteractionMode(state),
		}),
		{
			changeLatchAction,
			changeDeskInteractionModeAction,
			setPositionDataAction,
		}
	)
)(StyledLgvTools);
