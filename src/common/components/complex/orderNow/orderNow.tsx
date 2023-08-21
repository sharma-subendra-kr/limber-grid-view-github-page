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

import {
	getErrors,
	sanitizeInputs,
	getCompanyRevenue,
	getAllErrors,
} from "./orderNowUtils";
import { hasErrors, getFormInput } from "src/common/utils/utils";
import {
	getOrderNowDialogState,
	toggleOrderNowDialogAction,
	setOrderNowDialogAction,
} from "./ducks";

const companyRevenueOptions = [
	{ title: "Less than 1m", value: "lt 1m" },
	{ title: "Greater than 1m & less than 10m", value: "gt 1m & lt 10m" },
	{ title: "Greater than 10m & less than 100m", value: "gt 10m & lt 100m" },
	{ title: "Greater than 100m & less than 500m", value: "gt 100m & lt 500m" },
	{ title: "Greater than 500m", value: "gt 500m" },
];

const OrderNowModal = ({
	className,
	orderNowDialogState,
	onClose,
	setOrderNowDialogAction,
}) => {
	const [inputs, setInputs] = useState({
		email: "",
		firstName: "",
		lastName: "",
		phone: "",
		company: "",
		position: "",
		companyRevenue: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		firstName: "",
		lastName: "",
		phone: "",
		company: "",
		position: "",
		companyRevenue: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const customerResponse = useRef(undefined);
	const [snackBarState, setSnackBarState] = useState(false);
	const [fetching, setFetching] = useState(false);

	const onCloseDialog = () => {
		setOrderNowDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const onSnackBarClose = () => {
		setSnackBarState(false);
	};

	const onClickOrder = () => {
		const result = getAllErrors({ ...inputs }, { ...errors });
		if (hasErrors(result.errors)) {
			setErrors(result.errors);
			setInputs(result.inputs);
			return;
		}

		const _inputs = { ...inputs };
		sanitizeInputs(_inputs);
		_inputs.companyRevenue = getCompanyRevenue(_inputs.companyRevenue);

		setFetching(true);
		fetch(ORIGIN + "api/register/", {
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
				customerResponse.current = JSON.parse(data.message);
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
			open={orderNowDialogState}
			onClose={onCloseDialog}
			scroll="body"
			maxWidth="md"
		>
			{!submitted && <DialogTitle>Order Now!</DialogTitle>}
			{!submitted && (
				<DialogContent>
					<Grid container direction="row" justify="center">
						<DialogContentText>
							A stable release is planned soon. LimberGridView is going under
							rigorous testing. Order now to get a beta release.
						</DialogContentText>
						<br />
						<Grid item lg={8} md={8} xs={8} sm={8} className="order-field">
							<TextField
								id="email"
								name="email"
								type="email"
								label="Email *"
								placeholder="Email *"
								value={inputs.email}
								onChange={onChange}
								error={errors.email}
								helperText={errors.email}
								variant="outlined"
								size="small"
								fullWidth
							/>
						</Grid>
						<br />
						<Grid item xs={8} sm={8} className="order-field">
							<TextField
								id="first-name"
								name="firstName"
								type="text"
								label="First Name *"
								placeholder="First Name *"
								value={inputs.firstName}
								onChange={onChange}
								error={errors.firstName}
								helperText={errors.firstName}
								variant="outlined"
								size="small"
								fullWidth
							/>
						</Grid>
						<br />
						<Grid item xs={8} sm={8} className="order-field">
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
								variant="outlined"
								size="small"
								fullWidth
							/>
						</Grid>
						<br />
						<Grid item xs={8} sm={8} className="order-field">
							<TextField
								id="phone"
								name="phone"
								type="tel"
								label="Phone"
								placeholder="Phone"
								value={inputs.phone}
								onChange={onChange}
								error={errors.phone}
								helperText={errors.phone}
								variant="outlined"
								size="small"
								fullWidth
							/>
						</Grid>
						<br />
						<Grid item xs={8} sm={8} className="order-field">
							<TextField
								id="company"
								name="company"
								type="text"
								label="Company"
								placeholder="Company"
								value={inputs.company}
								onChange={onChange}
								error={errors.company}
								helperText={errors.company}
								variant="outlined"
								size="small"
								fullWidth
							/>
						</Grid>
						<br />
						<Grid item xs={8} sm={8} className="order-field">
							<TextField
								id="position"
								name="position"
								type="text"
								label="Position"
								placeholder="Position"
								value={inputs.position}
								onChange={onChange}
								error={errors.position}
								helperText={errors.position}
								variant="outlined"
								size="small"
								fullWidth
							/>
						</Grid>
						<br />
						<Grid item xs={8} sm={8} className="order-field">
							<TextField
								id="company-revenue"
								name="companyRevenue"
								type="text"
								label="Company Revenue"
								placeholder="Company Revenue"
								value={inputs.companyRevenue}
								onChange={onChange}
								error={errors.companyRevenue}
								helperText={errors.companyRevenue}
								select
								variant="outlined"
								size="small"
								fullWidth
							>
								{companyRevenueOptions.map((item) => {
									return (
										<MenuItem key={item.value} value={item.value}>
											{item.title}
										</MenuItem>
									);
								})}
							</TextField>
						</Grid>
					</Grid>
				</DialogContent>
			)}
			{!submitted && (
				<>
					<DialogActions>
						<Button onClick={onCloseDialog} color="secondary">
							Close
						</Button>
						{fetching && <CircularProgress size={30} color="primary" />}
						<Button color="primary" onClick={onClickOrder} disabled={fetching}>
							Pre-Order!
						</Button>
					</DialogActions>
				</>
			)}
			{submitted && <DialogTitle>Roger!</DialogTitle>}
			{submitted && (
				<DialogContent>
					<Grid container direction="column" alignItems="center">
						<CheckCircleOutlinedIcon />
						<br />
						<br />
						<Grid item xs={12} sm={12}>
							<DialogContentText>
								Your request is received. If you have filled in your phone
								number, I'll ring you on any day between 7 pm to 11 pm. If you
								have typed in your email only, then I'll reach out to you very
								soon.
								<br />
								<br />
								To know more about the pricing, click{" "}
								<Link
									onClick={() => setOrderNowDialogAction(false)}
									to="/LimberGridView/pricing"
								>
									here
								</Link>
								.
								<br />
								<br />
								Your customer id is{" "}
								<b>
									{customerResponse?.current?.id}/
									{customerResponse?.current?.uuid}
								</b>
								. Please keep it handy for future reference. <br />
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
					{customerResponse?.current}
				</MuiAlert>
			</Snackbar>
		</Dialog>
	);
};

const StyledOrderNowModal = styled(OrderNowModal)`
	.MuiDialogContent-root {
		> .MuiGrid-root {
			> svg {
				font-size: 100px;
				fill: #388e3c;
			}
			.order-field {
				margin-bottom: 20px;
			}
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 1px) {
	}
`;

export default connect(
	(state) => ({
		orderNowDialogState: getOrderNowDialogState(state),
	}),
	{
		setOrderNowDialogAction,
	}
)(StyledOrderNowModal);
