import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

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

import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

import styled from "styled-components";

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
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const onCloseDialog = () => {
		setOrderNowDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const onChange = () => {};

	return (
		<Dialog
			className={className}
			open={orderNowDialogState}
			onClose={onCloseDialog}
			scroll="body"
		>
			{!submitted && <DialogTitle>Pre-Order Now!</DialogTitle>}
			{!submitted && (
				<DialogContent>
					<Grid container direction="column">
						<DialogContentText>
							<Grid item xs={12} sm={12}>
								A stable release is planned in mid-2022. This can be pushed
								further back as LimberGridView is going under rigorous testing.
								Pre-order now to get your purchase processed ASAP after the
								stable release.
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
									id="phone"
									name="phone"
									type="tel"
									label="Phone"
									placeholder="Phone"
									value={inputs.phone}
									onChange={onChange}
									error={errors.phone}
									helperText={errors.phone}
									fullWidth
									variant="outlined"
									size="small"
								/>
							</Grid>
							<br />
							<Grid item xs={12} sm={12}>
								<TextField
									id="company"
									name="Company"
									type="text"
									label="Company"
									placeholder="Company"
									value={inputs.company}
									onChange={onChange}
									error={errors.company}
									helperText={errors.company}
									fullWidth
									variant="outlined"
									size="small"
								/>
							</Grid>
							<br />
							<Grid item xs={12} sm={12}>
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
									fullWidth
									variant="outlined"
									size="small"
								/>
							</Grid>
							<br />
							<Grid item xs={12} sm={12}>
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
									fullWidth
									variant="outlined"
									size="small"
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
						</DialogContentText>
					</Grid>
				</DialogContent>
			)}
			{!submitted && (
				<DialogActions>
					<Button onClick={onCloseDialog} color="secondary">
						Close
					</Button>
					<Button onClick={onCloseDialog} color="primary">
						Pre-Order!
					</Button>
				</DialogActions>
			)}
			{submitted && <DialogTitle>Roger!</DialogTitle>}
			{submitted && (
				<DialogContent>
					<Grid container direction="column">
						<CheckCircleOutlinedIcon />
						<br />
						<br />
						<DialogContentText>
							<Grid item xs={12} sm={12}>
								Your request is received. If you have filled in your phone
								number, I'll ring you on any day between 7 pm to 11 pm. If you
								have typed in your email only, then I'll reach out to you very
								soon.
								<br />
								<br />
								<b>Ba Bye!</b>
							</Grid>
						</DialogContentText>
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
		</Dialog>
	);
};

const StyledOrderNowModal = styled(OrderNowModal)`
	.MuiDialogContent-root {
		> .MuiGrid-root {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			> svg {
				font-size: 100px;
				fill: #388e3c;
			}
		}
	}
	@media only screen and (max-width: 1023px) and (min-width: 1px) {
		.MuiDialogTitle-root {
			.MuiTypography-root {
				font-size: 50px;
			}
		}
		.MuiTypography-root {
			.MuiGrid-item {
				font-size: 30px;
			}
		}
		.MuiDialogContentText-root {
			font-size: 25px;
			.MuiGrid-item {
				* {
					font-size: 30px;
				}
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
		orderNowDialogState: getOrderNowDialogState(state),
	}),
	{
		setOrderNowDialogAction,
	}
)(StyledOrderNowModal);
