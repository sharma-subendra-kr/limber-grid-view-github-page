import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import DemoDialog from "src/common/components/static/demoDialog/demoDialog";
import {
	getDemoDialogState,
	toggleDemoDialogAction,
	setDemoDialogAction,
} from "src/common/components/static/demoDialog/ducks";

const HowItWorks = ({ demoDialog, setDemoDialogAction }) => {
	useEffect(() => {
		if (!localStorage.getItem("demoDialog")) {
			setDemoDialogAction(true);
		}
	}, []);

	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>Arsenal</Paper>
				{demoDialog && <DemoDialog />}
			</PageContainer>
		</>
	);
};

export default connect(
	(state) => ({
		demoDialog: getDemoDialogState(state),
	}),
	{ setDemoDialogAction }
)(HowItWorks);
