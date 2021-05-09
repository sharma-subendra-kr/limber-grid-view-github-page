import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
import LgvCustomizedView from "./common/components/lgvCustomizedView/lgvCustomizedView";
import LgvDefaultView from "./common/components/lgvDefaultView/lgvDefaultView";
import SwitchToDesktop from "src/common/components/static/switchToDesktop/switchToDesktop";

import {
	getView,
	changeViewAction,
	changeLatchAction,
	changeResizeMethodAction,
	changeDeskInteractionModeAction,
	getPositionData,
	setPositionDataAction,
} from "./ducks";
import {
	getOrderNowDialogState,
	toggleOrderNowDialogAction,
	setOrderNowDialogAction,
} from "src/common/components/complex/orderNow/ducks";
import {
	getswitchToDesktopDialogState,
	toggleswitchToDesktopDialogAction,
	setSwitchToDesktopDialogAction,
} from "src/common/components/static/switchToDesktop/ducks";
import {
	getHowToUseDialogState,
	toggleHowToUseDialogAction,
	setHowToUseDialogAction,
} from "src/common/components/static/howToUse/ducks";

import { pd } from "src/pages/home/common/static/lgvData";
import "./home.scss";

const Home = (props) => {
	const {
		view,
		positionData,
		changeViewAction,
		changeResizeMethodAction,
		changeLatchAction,
		changeDeskInteractionModeAction,
		setPositionDataAction,
		switchToDesktop,
		howToUse,
		setSwitchToDesktopDialogAction,
		setHowToUseDialogAction,
		orderNow,
		setOrderNowDialogAction,
	} = props;

	const lgvCustomizedView = useRef();
	const lgvDefaultView = useRef();
	const introBuy = useRef("incomplete");

	useEffect(() => {
		setPositionDataAction(pd);
		if (props.location.pathname.indexOf("buy") === 16) {
			setOrderNowDialogAction(true);
		} else if (!localStorage.getItem("switchToDesktop")) {
			setSwitchToDesktopDialogAction(true);
		} else if (!localStorage.getItem("howToUse")) {
			setHowToUseDialogAction(true);
		}
	}, []);

	const onOrderNowClose = () => {
		if (
			introBuy.current === "incomplete" &&
			props.location.pathname.indexOf("buy") === 16
		) {
			if (!localStorage.getItem("switchToDesktop")) {
				setSwitchToDesktopDialogAction(true);
			} else if (!localStorage.getItem("howToUse")) {
				setHowToUseDialogAction(true);
			}
		}
		introBuy.current = "complete";
	};

	const onUserUndo = () => {
		if (view === "customized") {
			lgvCustomizedView.current.undo();
		} else {
			lgvDefaultView.current.undo();
		}
	};

	const onUserRedo = () => {
		if (view === "customized") {
			lgvCustomizedView.current.redo();
		} else {
			lgvDefaultView.current.redo();
		}
	};

	const onResizeMethodChange = (resizeMethod) => {
		changeResizeMethodAction(resizeMethod);
	};

	const onLatchChange = (latch) => {
		changeLatchAction(latch);
	};

	const onDeskInteractionChange = (deskInteractionMode) => {
		changeDeskInteractionModeAction(deskInteractionMode);
	};

	const onAddItem = () => {
		if (view === "customized") {
			lgvCustomizedView.current.addItem();
		} else {
			lgvDefaultView.current.addItem();
		}
	};

	const onClickCustomizedView = () => {
		changeViewAction("customized");
	};

	const onClickDefaultViewView = () => {
		changeViewAction("default");
	};

	const onCloseSwitchToDesktop = () => {
		if (!localStorage.getItem("howToUse")) {
			setHowToUseDialogAction(true);
		}
	};

	return (
		<>
			<Header />
			<Drawer onOrderNowClose={onOrderNowClose} />
			{switchToDesktop && <SwitchToDesktop onClose={onCloseSwitchToDesktop} />}
			<div className="page-home">
				<div className="tools-container">
					<div>
						<Button
							className="button"
							size="small"
							onClick={onClickCustomizedView}
						>
							Customized View
						</Button>
						<Button
							className="button"
							size="small"
							onClick={onClickDefaultViewView}
						>
							Default View
						</Button>
					</div>
					<div className="lgv-tools-container">
						<LgvTools
							onResizeMethodChange={onResizeMethodChange}
							onUserUndo={onUserUndo}
							onUserRedo={onUserRedo}
							onLatchChange={onLatchChange}
							onDeskInteractionChange={onDeskInteractionChange}
							onAddItem={onAddItem}
						/>
					</div>
				</div>
				{positionData && (
					<div className="lgv-container">
						{view === "customized" ? (
							<LgvCustomizedView ref={lgvCustomizedView} />
						) : (
							<LgvDefaultView ref={lgvDefaultView} />
						)}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default connect(
	(state) => ({
		view: getView(state),
		positionData: getPositionData(state),
		switchToDesktop: getswitchToDesktopDialogState(state),
		howToUse: getHowToUseDialogState(state),
		orderNow: getOrderNowDialogState(state),
	}),
	{
		changeViewAction,
		changeResizeMethodAction,
		changeLatchAction,
		changeDeskInteractionModeAction,
		setPositionDataAction,
		setSwitchToDesktopDialogAction,
		setHowToUseDialogAction,
		setOrderNowDialogAction,
	}
)(Home);
