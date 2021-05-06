import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
	getDemoDialogState,
	toggleDemoDialogAction,
	setDemoDialogAction,
} from "./ducks";

const DemoDialogModal = ({ demoDialogState, onClose, setDemoDialogAction }) => {
	const onCloseDialog = () => {
		setDemoDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	return <Dialog open={demoDialogState} onClose={onCloseDialog}></Dialog>;
};

export default connect(
	(state) => ({
		demoDialogState: getDemoDialogState(state),
	}),
	{ setDemoDialogAction }
)(DemoDialogModal);
