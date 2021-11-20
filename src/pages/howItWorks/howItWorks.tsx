import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import LimberGridView from "@sharma-subendra-kr/limber-grid-view";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import SwitchToDesktop from "src/common/components/static/switchToDesktop/switchToDesktop";
import DemoDialog from "src/common/components/static/demoDialog/demoDialog";
import { Layout } from "src/pages/home/common/components/lgvCustomizedView/layout";

import {
	getDemoDialogState,
	setDemoDialogAction,
} from "src/common/components/static/demoDialog/ducks";
import {
	getswitchToDesktopDialogState,
	setSwitchToDesktopDialogAction,
} from "src/common/components/static/switchToDesktop/ducks";

import { pd } from "src/pages/home/common/static/lgvData";

const HowItWorks = ({
	demoDialog,
	switchToDesktop,
	setDemoDialogAction,
	setSwitchToDesktopDialogAction,
}) => {
	const lgv = useRef(null);
	const el = useRef(null);

	useEffect(() => {
		if (!localStorage.getItem("switchToDesktop")) {
			setSwitchToDesktopDialogAction(true);
		} else if (!localStorage.getItem("demoDialog")) {
			setDemoDialogAction(true);
		}
	}, []);

	useEffect(() => {
		lgv.current = new LimberGridView({
			el: el.current,
			itemMouseDownMoveCheck: itemMouseDownMoveCheck,
			callbacks: {
				renderContent: renderContent,
				renderComplete: renderComplete,
				resizeComplete: resizeComplete,
				moveComplete: moveComplete,
				addComplete: addComplete,
				removeComplete: removeComplete,
				cutSpaceComplete: cutSpaceComplete,
				renderPlugin: renderPlugin,
				removePlugin: removePlugin,
				getArrangeTime: getArrangeTime,
				getLogMessage: getLogMessage,
			},
			publicConstants: {
				showBottomLeftResizeGuide: true,
				autoScrollForMouse: true,
			},
			positionData: pd,
		});
	}, []);

	const onCloseSwitchToDesktop = () => {
		if (!localStorage.getItem("demoDialog")) {
			setDemoDialogAction(true);
		}
	};

	const itemMouseDownMoveCheck = (x, y, item, index, currentTarget) => {
		if (currentTarget.classList.contains("custom-layout-header-title")) {
			return true;
		}
		return false;
	};

	const onRemove = (index) => {
		lgv.current.removeItem(index);
	};

	const renderContent = (index, width, height, type) => {
		return (
			<Layout
				index={index}
				width={width}
				height={height}
				isAdd={type === "isAdd"}
				onRemove={onRemove}
				useIndexForTitle={true}
			/>
		);
	};

	const renderComplete = (index) => {};

	const resizeComplete = (index, width, height, arrangedIndices) => {};

	const moveComplete = (index, toX, toY, arrangedIndices) => {};

	const addComplete = (index) => {};

	const removeComplete = (index, element) => {};

	const cutSpaceComplete = () => {};

	const renderPlugin = (renderData, element) => {
		ReactDOM.render(renderData, element);
	};

	const removePlugin = (element) => {
		ReactDOM.unmountComponentAtNode(element);
	};

	const getArrangeTime = (a, b, c) => {};

	const getLogMessage = (log) => {};

	return (
		<>
			<Header />
			<Drawer />
			{switchToDesktop && <SwitchToDesktop onClose={onCloseSwitchToDesktop} />}
			{demoDialog && <DemoDialog />}
			<div className="page-home">
				<div className="tools-container"></div>
				<div className="lgv-container">
					<div className="lgv-customized-view-container" ref={el}></div>
				</div>
			</div>
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
