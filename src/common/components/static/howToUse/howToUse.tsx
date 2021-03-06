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
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import HowToUseContent from "./howToUseContent";
import { ORIGIN, VIDEO_CDN_ORIGIN } from "src/configs/origin";

import {
	getHowToUseDialogState,
	toggleHowToUseDialogAction,
	setHowToUseDialogAction,
} from "./ducks";

const HowToUseModal = ({
	className,
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
		<Dialog
			className={className}
			open={howToUseDialogState}
			onClose={onCloseDialog}
			scroll="body"
			maxWidth="md"
		>
			<div className="title-wrapper">
				<DialogTitle>Tips on using LimberGridView! </DialogTitle>
				<Button onClick={onCloseDialog} color="primary">
					I'm done!
				</Button>
			</div>
			<DialogContent>
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
				<DialogContentText>
					<HowToUseContent />
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCloseDialog} color="primary">
					I'm done!
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const StyledHowToUseModal = styled(HowToUseModal)`
	.title-wrapper {
		display: flex;
		.MuiButton-root {
			margin-left: auto;
			margin-right: 24px;
		}
	}

	.MuiDialogContentText-root {
		font-size: 1.3rem;
	}

	@media only screen and (max-width: 1023px) and (min-width: 1px) {
		.MuiDialogTitle-root {
			.MuiTypography-root {
				font-size: 50px;
			}
		}
		.MuiDialogContent-root {
			.MuiDialogContentText-root {
				font-size: 40px;
			}
			.MuiIconButton-root {
				.MuiSvgIcon-root {
					font-size: 40px;
				}
			}
			.MuiTypography-root {
				font-size: 40px;
			}
		}

		.MuiButtonBase-root {
			span {
				font-size: 40px;
			}
		}
	}
`;

export default connect(
	(state) => ({
		howToUseDialogState: getHowToUseDialogState(state),
	}),
	{ setHowToUseDialogAction }
)(StyledHowToUseModal);
