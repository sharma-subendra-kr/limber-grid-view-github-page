import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import {
	getHowToUseDialogState,
	toggleHowToUseDialogAction,
	setHowToUseDialogAction,
} from "./ducks";

const HowToUseModal = ({
	howToUseDialogState,
	onClose,
	setHowToUseDialogAction,
}) => {
	const onDontShowClick = ({ target: { checked } }) => {
		if (checked) {
			localStorage.setItem("howToUse", "howToUse");
		} else {
			localStorage.removeItem("howToUse");
		}
	};

	const onCloseDialog = () => {
		setHowToUseDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const defaultChecked = !!localStorage.getItem("howToUse");

	return (
		<Dialog open={howToUseDialogState} onClose={onCloseDialog}>
			<DialogTitle>Tips on using LimberGridView!</DialogTitle>
			<DialogContent>
				<DialogContentText></DialogContentText>
				<FormControlLabel
					control={
						<Checkbox
							defaultChecked={defaultChecked}
							size="small"
							onClick={onDontShowClick}
						/>
					}
					label="Don't show this message again"
				/>
			</DialogContent>
		</Dialog>
	);
};

export default connect(
	(state) => ({
		howToUseDialogState: getHowToUseDialogState(state),
	}),
	{ setHowToUseDialogAction }
)(HowToUseModal);
