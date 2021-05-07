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
	orderNowDialogState,
	onClose,
	setOrderNowDialogAction,
}) => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});

	const onCloseDialog = () => {
		setOrderNowDialogAction(false);
		if (onClose) {
			onClose();
		}
	};

	const onChange = () => {};

	return (
		<Dialog open={orderNowDialogState} onClose={onCloseDialog}>
			<DialogTitle>Pre-Order Now!</DialogTitle>
			<DialogContent>
				<DialogContentText>
					I am a stable release in mid-2022. This can be pushed further back as
					LimberGridView is going under rigorous testing. Pre-order now to get
					your purchase processed ASAP after the stable release.
					<br />
					<br />
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
					<br />
					<br />
					<TextField
						id="first-name"
						name="firstName"
						type="text"
						label="first Name"
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
					<br />
					<br />
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
					<br />
					<br />
					<TextField
						id="phone"
						name="phone"
						type="phone"
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
					<br />
					<br />
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
					<br />
					<br />
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
					<br />
					<br />
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
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCloseDialog} color="secondary">
					Close
				</Button>
				<Button onClick={onCloseDialog} color="primary">
					Pre-Order!
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default connect(
	(state) => ({
		orderNowDialogState: getOrderNowDialogState(state),
	}),
	{
		setOrderNowDialogAction,
	}
)(OrderNowModal);
