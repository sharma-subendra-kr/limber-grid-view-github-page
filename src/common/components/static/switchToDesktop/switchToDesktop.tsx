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
	const onDontShowClick = ({ target: { checked } }) => {
		if (checked) {
			localStorage.setItem("switchToDesktop", "switchToDesktop");
		} else {
			localStorage.removeItem("switchToDesktop");
		}
	};

	const onCloseDialog = () => {
		setSwitchToDesktopDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const defaultChecked = !!localStorage.getItem("switchToDesktop");

	return (
		<Dialog
			className={className}
			open={switchToDesktopDialogState}
			onClose={onCloseDialog}
			scroll="body"
			maxWidth="md"
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
					Alright!
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const StyledSwitchToDesktopModal = styled(SwitchToDesktopModal)`
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
		switchToDesktopDialogState: getswitchToDesktopDialogState(state),
	}),
	{
		setSwitchToDesktopDialogAction,
	}
)(StyledSwitchToDesktopModal);
