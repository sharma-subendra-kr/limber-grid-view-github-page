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
	getDemoDialogState,
	toggleDemoDialogAction,
	setDemoDialogAction,
} from "./ducks";

const DemoDialogModal = ({
	className,
	demoDialogState,
	onClose,
	setDemoDialogAction,
}) => {
	const onCloseDialog = () => {
		setDemoDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	return (
		<Dialog
			className={className}
			open={demoDialogState}
			onClose={onCloseDialog}
		>
			<DialogTitle>How it all works!</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Howdy! a fellow human being! This demo was made possible thanks to the
					LimberGridView debug tool. Since it's hard to debug a bunch of
					rectangles, an in-house debug tool was necessary. It turns out that
					the debug tool was perfect to visualize the underlying algorithm.
					<br />
					<br />
					You can move or resize an item to trigger the visualization of the
					algorithm. Remember to release the mouse button as the demo for the
					move and resize events are disabled here.
					<br />
					<br /> For the best results, move item 10 over to item 5.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCloseDialog} color="primary">
					Okie-Dokie!
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const StyledDemoDialogModal = styled(DemoDialogModal)`
	.MuiDialogContentText-root {
		font-size: 1.3rem;
	}
`;

export default connect(
	(state) => ({
		demoDialogState: getDemoDialogState(state),
	}),
	{ setDemoDialogAction }
)(StyledDemoDialogModal);
