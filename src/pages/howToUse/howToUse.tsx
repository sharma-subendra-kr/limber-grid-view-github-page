import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import HowToUseContent from "src/common/components/static/howToUse/howToUseContent";

const HowToUse = ({ className }) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Grid className={className} container justifyContent="center">
					<Grid item>
						<Typography variant="h3">How to use LimberGridView!</Typography>
					</Grid>
					<Grid item>
						<HowToUseContent />
					</Grid>
				</Grid>
			</PageContainer>
		</>
	);
};

const StyledHowToUse = styled(HowToUse)`
	.MuiGrid-item:first-child {
		margin-bottom: 20px;
		h3 {
			text-align: center;
		}
	}

	> div {
		width: 960px;
		.MuiBox-root {
			background-color: white;
			border: solid 1px black;
			padding-top: 5px;
			padding-bottom: 5px;
		}
	}
`;

export default connect((state) => ({}), {})(StyledHowToUse);
