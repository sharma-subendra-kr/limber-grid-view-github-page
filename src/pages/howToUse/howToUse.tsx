import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
				<div className={className}>
					<HowToUseContent />
				</div>
			</PageContainer>
		</>
	);
};

const StyledHowToUse = styled(HowToUse)`
	display: flex;
	justify-content: center;
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
