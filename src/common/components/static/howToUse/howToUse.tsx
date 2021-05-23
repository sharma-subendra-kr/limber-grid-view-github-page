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

import styled from "styled-components";

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
			maxWidth="xl"
		>
			<DialogTitle>Tips on using LimberGridView!</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<video width="825" height="432" autoPlay loop>
						<source src="/assets/final.mp4" type="video/mp4" />
					</video>
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
		</Dialog>
	);
};

const StyledHowToUseModal = styled(HowToUseModal)`
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
