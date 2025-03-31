import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

import { ORIGIN } from "src/configs/origin";

import styled from "styled-components";

import { getErrors, sanitizeInputs, getAllErrors } from "./sendQueryUtils";
import { hasErrors, getFormInput } from "src/common/utils/utils";
import {
	getSendQueryDialogState,
	toggleSendQueryDialogAction,
	setSendQueryDialogAction,
} from "./ducks";

const SendQueryModal = ({
	className,
	sendQueryDialogState,
	onClose,
	setSendQueryDialogAction,
}) => {
	const [inputs, setInputs] = useState({
		email: "",
		firstName: "",
		lastName: "",
		query: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		firstName: "",
		lastName: "",
		query: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const customerResponse = useRef(undefined);
	const [snackBarState, setSnackBarState] = useState(false);
	const [fetching, setFetching] = useState(false);

	const onCloseDialog = () => {
		setSendQueryDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const onSnackBarClose = () => {
		setSnackBarState(false);
	};

	const onClickSend = () => {
		const result = getAllErrors({ ...inputs }, { ...errors });
		if (hasErrors(result.errors)) {
			setErrors(result.errors);
			setInputs(result.inputs);
			return;
		}

		const _inputs = { ...inputs };
		sanitizeInputs(_inputs);

		setFetching(true);
		fetch(ORIGIN + "api/sendQuery/", {
			method: "POST",
			body: getFormInput(_inputs),
		})
			.then((data) => {
				return data.json().then((d) => ({
					status: data.status,
					message: d.message,
				}));
			})
			.then((data) => {
				if (data.status !== 200) {
					throw data;
				}
				customerResponse.current = data.message;
				setSubmitted(true);
				setFetching(false);
			})
			.catch((error) => {
				customerResponse.current = error.message;
				setSnackBarState(true);
				setFetching(false);
			});
	};

	const onChange = ({ target: { name, value } }) => {
		const result = getErrors(name, value, { ...inputs }, { ...errors });
		setInputs(result.inputs);
		setErrors(result.errors);
	};

	return (
		<Dialog
			className={className}
			open={sendQueryDialogState}
			onClose={onCloseDialog}
			scroll="body"
			maxWidth="md"
		>
			{!submitted && <DialogTitle>Send me a query!</DialogTitle>}
			{!submitted && (
				<DialogContent>
					<Grid container direction="column">
						<Grid item xs={12} sm={12}>
							<DialogContentText>
								Feel free to send me your queries.
							</DialogContentText>
							<a href="mailto:sales@limber.in" rel="noreferrer">
								sales@limber.in
							</a>
							<br />
							<br />
							<DialogContentText>LinkedIn:</DialogContentText>
							<a
								href="https://www.linkedin.com/in/subendra-sharma-214302150/"
								rel="noreferrer"
								target="_blank"
							>
								Subendra Sharma
							</a>
						</Grid>
					</Grid>
					{/*<Grid container direction="column">
						<Grid item xs={12} sm={12}>
							<DialogContentText>
								Feel free to send me your queries. I will contact you via email.
							</DialogContentText>
						</Grid>
						<br />
						<Grid item xs={12} sm={12}>
							<TextField
								id="email"
								name="email"
								type="email"
								label="Email"
								placeholder="Email"
								value={inputs.email}
								onChange={onChange}
								error={errors.email}
								required
								helperText={errors.email}
								fullWidth
								variant="outlined"
								size="small"
							/>
						</Grid>
						<br />
						<Grid item xs={12} sm={12}>
							<TextField
								id="first-name"
								name="firstName"
								type="text"
								label="First Name"
								placeholder="First Name"
								value={inputs.firstName}
								onChange={onChange}
								error={errors.firstName}
								required
								helperText={errors.firstName}
								fullWidth
								variant="outlined"
								size="small"
							/>
						</Grid>
						<br />
						<Grid item xs={12} sm={12}>
							<TextField
								id="last-name"
								name="lastName"
								type="text"
								label="Last Name"
								placeholder="Last Name"
								value={inputs.lastName}
								onChange={onChange}
								error={errors.lastName}
								helperText={errors.lastName}
								fullWidth
								variant="outlined"
								size="small"
							/>
						</Grid>
						<br />
						<Grid item xs={12} sm={12}>
							<TextField
								id="query"
								name="query"
								type="text"
								label="Query"
								placeholder="Query"
								value={inputs.query}
								onChange={onChange}
								error={errors.query}
								helperText={errors.query}
								multiline
								rows={10}
								fullWidth
								variant="outlined"
								size="small"
							/>
						</Grid>
					</Grid>*/}
				</DialogContent>
			)}
			{!submitted && (
				<>
					<DialogActions>
						<Button onClick={onCloseDialog} color="secondary">
							Close
						</Button>
						{fetching && <CircularProgress size={30} color="primary" />}
						{/*<Button color="primary" onClick={onClickSend} disabled={fetching}>
							Send!
						</Button>*/}
					</DialogActions>
				</>
			)}
			{submitted && <DialogTitle>Copy that!</DialogTitle>}
			{submitted && (
				<DialogContent>
					<Grid container direction="column">
						<CheckCircleOutlinedIcon />
						<br />
						<br />
						<Grid item xs={12} sm={12}>
							<DialogContentText>
								Your request is received. I'll reach out to you very soon.
								<br />
								<br />
								To know more about the pricing, click{" "}
								<Link
									onClick={() => setSendQueryDialogAction(false)}
									to="/LimberGridView/pricing"
								>
									here
								</Link>
								.
								<br />
								<br />
								<b>Ba Bye!</b>
							</DialogContentText>
						</Grid>
					</Grid>
				</DialogContent>
			)}
			{submitted && (
				<DialogActions>
					<Button onClick={onCloseDialog} color="secondary">
						Okie-Dokie!
					</Button>
				</DialogActions>
			)}
			<Snackbar
				open={snackBarState}
				autoHideDuration={6000}
				onClose={onSnackBarClose}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<MuiAlert severity="error" onClose={onSnackBarClose} variant="filled">
					{customerResponse.current}
				</MuiAlert>
			</Snackbar>
		</Dialog>
	);
};

const StyledSendQueryModal = styled(SendQueryModal)`
	.MuiDialogContent-root {
		> .MuiGrid-root {
			> svg {
				font-size: 100px;
				fill: #388e3c;
			}
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 1px) {
	}
`;

export default connect(
	(state) => ({
		sendQueryDialogState: getSendQueryDialogState(state),
	}),
	{
		setSendQueryDialogAction,
	}
)(StyledSendQueryModal);
