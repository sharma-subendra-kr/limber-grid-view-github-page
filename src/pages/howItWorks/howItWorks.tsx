import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import SwitchToDesktop from "src/common/components/static/switchToDesktop/switchToDesktop";
import DemoDialog from "src/common/components/static/demoDialog/demoDialog";
import {
	getDemoDialogState,
	toggleDemoDialogAction,
	setDemoDialogAction,
} from "src/common/components/static/demoDialog/ducks";
import {
	getswitchToDesktopDialogState,
	toggleswitchToDesktopDialogAction,
	setSwitchToDesktopDialogAction,
} from "src/common/components/static/switchToDesktop/ducks";

const HowItWorks = ({
	demoDialog,
	switchToDesktop,
	setDemoDialogAction,
	setSwitchToDesktopDialogAction,
}) => {
	useEffect(() => {
		if (!localStorage.getItem("switchToDesktop")) {
			setSwitchToDesktopDialogAction(true);
		} else if (!localStorage.getItem("demoDialog")) {
			setDemoDialogAction(true);
		}
	}, []);

	const onCloseSwitchToDesktop = () => {
		if (!localStorage.getItem("demoDialog")) {
			setDemoDialogAction(true);
		}
	};

	return (
		<>
			<Header />
			<Drawer />
			{switchToDesktop && <SwitchToDesktop onClose={onCloseSwitchToDesktop} />}
			{demoDialog && <DemoDialog />}
			<PageContainer>
				<Paper>Arsenal</Paper>
			</PageContainer>
			<Footer />
		</>
	);
};

export default connect(
	(state) => ({
		demoDialog: getDemoDialogState(state),
		switchToDesktop: getswitchToDesktopDialogState(state),
	}),
	{ setDemoDialogAction, setSwitchToDesktopDialogAction }
)(HowItWorks);
