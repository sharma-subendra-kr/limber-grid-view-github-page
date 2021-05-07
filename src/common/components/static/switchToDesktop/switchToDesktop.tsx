import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import {
	getswitchToDesktopDialogState,
	toggleswitchToDesktopDialogAction,
	setSwitchToDesktopDialogAction,
} from "./ducks";

const SwitchToDesktopModal = ({
	className,
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
		<Dialog
			className={className}
			open={switchToDesktopDialogState}
			onClose={onCloseDialog}
		>
			<DialogTitle>
				Switch to desktop or tablet for the best experience
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					LimberGridView is a desktop/tablet application. Keeping my busy
					schedule in mind, this site is not designed to work with mobile
					devices. So, please switch to desktop or tablet.
				</DialogContentText>
				<DialogActions>
					<Button onClick={onCloseDialog} color="primary">
						Alright!
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

const StyledSwitchToDesktopModal = styled(SwitchToDesktopModal)`
	.MuiDialogContentText-root {
		font-size: 1.3rem;
	}
`;

export default connect(
	(state) => ({
		switchToDesktopDialogState: getswitchToDesktopDialogState(state),
	}),
	{
		setSwitchToDesktopDialogAction,
	}
)(StyledSwitchToDesktopModal);
