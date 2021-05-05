import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const AboutTimeComplexity = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<PageContainer>
				<Paper>Arsenal</Paper>
			</PageContainer>
			<Footer />
		</>
	);
};

export default connect((state) => ({}), {})(AboutTimeComplexity);
