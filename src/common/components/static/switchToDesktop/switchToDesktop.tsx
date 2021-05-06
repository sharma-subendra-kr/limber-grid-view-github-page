import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
	getswitchToDesktopDialogState,
	toggleswitchToDesktopDialogAction,
	setSwitchToDesktopDialogAction,
} from "./ducks";

const SwitchToDesktopModal = ({
	switchToDesktopDialogState,
	onClose,
	setSwitchToDesktopDialogAction,
}) => {
	const onCloseDialog = () => {
		setSwitchToDesktopDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	return (
		<Dialog open={switchToDesktopDialogState} onClose={onCloseDialog}></Dialog>
	);
};

export default connect(
	(state) => ({
		switchToDesktopDialogState: getswitchToDesktopDialogState(state),
	}),
	{
		setSwitchToDesktopDialogAction,
	}
)(SwitchToDesktopModal);
