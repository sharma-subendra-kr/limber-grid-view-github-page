import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
	const onCloseDialog = () => {
		setHowToUseDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	return <Dialog open={howToUseDialogState} onClose={onCloseDialog}></Dialog>;
};

export default connect(
	(state) => ({
		howToUseDialogState: getHowToUseDialogState(state),
	}),
	{ setHowToUseDialogAction }
)(HowToUseModal);
