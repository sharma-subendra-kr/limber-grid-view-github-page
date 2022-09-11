import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import styled from "styled-components";

import { withLGV } from "../../hoc/withLGV";
import {
	getScaledMargin,
	getMarginChangeValue,
	setMarginChangeValueAction,
	setMarginAction,
	setScaledMarginAction,
} from "src/pages/home/ducks";

import "./lgvMoreTools.scss";

const LgvMoreTools = (props) => {
	const {
		className,
		scaledMargin,
		marginChangeValue,
		setMarginChangeValueAction,
		setMarginAction,
		setScaledMarginAction,
		lgv,
	} = props;

	const onChangeMarginChangeValue = (event) => {
		if (event.target.value >= 0) {
			lgv.current.setMarginChangeValue(Number(event.target.value));
			setMarginChangeValueAction(Number(event.target.value));
		}
	};

	const onIncreaseMargin = () => {
		lgv.current.increaseMargin();
		setMarginAction(lgv.current.getCurrentMargin());
		setScaledMarginAction(lgv.current.getCurrentMargin(true));
	};

	const onDecreaseMargin = () => {
		lgv.current.decreaseMargin();
		setMarginAction(lgv.current.getCurrentMargin());
		setScaledMarginAction(lgv.current.getCurrentMargin(true));
	};

	return (
		<div className={`${className} lgv-more-tools`}>
			<Grid container direction="column">
				<Grid container direction="row" alignItems="center" item>
					<Grid item className="lvg-more-tools-key">
						<label>Margin Change Value</label>
					</Grid>
					<Grid
						container
						justifyContent="center"
						item
						className="lvg-more-tools-value"
					>
						<TextField
							variant="outlined"
							value={marginChangeValue}
							type="number"
							size="small"
							onChange={onChangeMarginChangeValue}
						/>
					</Grid>
				</Grid>
				<br />
				<Grid container direction="row" alignItems="center" item>
					<Grid item className="lvg-more-tools-key">
						<label>Margin</label>
					</Grid>
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						item
						className="lvg-more-tools-value"
					>
						<Fab size="small" color="secondary" onClick={onDecreaseMargin}>
							<RemoveIcon />
						</Fab>
						<Chip label={scaledMargin} disabled variant="outlined" />
						<Fab size="small" color="secondary" onClick={onIncreaseMargin}>
							<AddIcon />
						</Fab>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

const StyledLgvMoreTools = styled(LgvMoreTools)`
	.MuiFab-root {
		height: 20px;
		width: 20px;
		min-height: 20px;
		margin: 0 5px;
	}

	.MuiChip-root {
		width: 80px;
	}

	.MuiTextField-root {
		width: 80px;
	}

	.lvg-more-tools-key {
		width: 150px;
	}
	.lvg-more-tools-value {
		width: 140px;
	}

	@media only screen and (max-width: 980px) and (min-width: 1px) and (orientation: portrait),
		only screen and (max-width: 979px) and (min-width: 1px) and (orientation: landscape) {
		display: none;
	}
`;

export default compose(
	withLGV,
	connect(
		(state) => ({
			scaledMargin: getScaledMargin(state),
			marginChangeValue: getMarginChangeValue(state),
		}),
		{ setMarginChangeValueAction, setMarginAction, setScaledMarginAction }
	)
)(StyledLgvMoreTools);
