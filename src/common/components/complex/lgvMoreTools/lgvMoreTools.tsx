import React, { useState } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Chip from "@material-ui/core/Chip";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import styled from "styled-components";

import { getMargin } from "src/pages/home/ducks";

import "./lgvMoreTools.scss";

const LgvMoreTools = (props) => {
	const { className, onIncreaseMargin, onDecreaseMargin, margin } = props;

	return (
		<div className={`${className} lgv-more-tools`}>
			<Grid container>
				<Grid item>
					<label>Margin</label>
					<Fab size="small" color="secondary" onClick={onDecreaseMargin}>
						<RemoveIcon />
					</Fab>
					<Chip label={margin} disabled variant="outlined" />
					<Fab size="small" color="secondary" onClick={onIncreaseMargin}>
						<AddIcon />
					</Fab>
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

	@media only screen and (max-width: 980px) and (min-width: 1px) and (orientation: portrait),
		only screen and (max-width: 979px) and (min-width: 1px) and (orientation: landscape) {
		display: none;
	}
`;

export default connect(
	(state) => ({
		margin: getMargin(state),
	}),
	{}
)(StyledLgvMoreTools);
