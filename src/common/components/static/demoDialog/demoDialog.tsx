import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
	const onDontShowClick = ({ target: { checked } }) => {
		// event.nativeEvent.target.checked
		// event.target.checked
		if (checked) {
			localStorage.setItem("demoDialog", "demoDialog");
		} else {
			localStorage.removeItem("demoDialog");
		}
	};

	const onCloseDialog = () => {
		setDemoDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const defaultChecked = !!localStorage.getItem("demoDialog");

	return (
		<Dialog
			className={className}
			open={demoDialogState}
			onClose={onCloseDialog}
			scroll="body"
			maxWidth="md"
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
					<br /> <b>For the best results, move item 17 over to item 15.</b>
					<br />
					<br />
					<b>
						This is quite unstable during the demonstration, so please refrain
						from clicking anywhere.
					</b>
				</DialogContentText>
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
	b {
		font-size: 20px;
	}

	@media only screen and (max-width: 1023px) and (min-width: 1px) {
	}
`;

export default connect(
	(state) => ({
		demoDialogState: getDemoDialogState(state),
	}),
	{ setDemoDialogAction }
)(StyledDemoDialogModal);
