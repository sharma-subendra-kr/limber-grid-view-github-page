import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

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

	useEffect(() => {
		if (
			introBuy.current === "incomplete" &&
			!orderNow &&
			props.location.pathname.indexOf("buy") === 16
		) {
			setSwitchToDesktopDialogAction(true);
		}
		introBuy.current = "complete";
	}, [orderNow]);

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
			<Drawer />
			{switchToDesktop && <SwitchToDesktop onClose={onCloseSwitchToDesktop} />}
			<div className="page-home">
				<div className="tools-container">
					<div>
						<button className="button" onClick={onClickCustomizedView}>
							Customized View
						</button>
						<button className="button" onClick={onClickDefaultViewView}>
							Default View
						</button>
					</div>
					<div className="lgv-tools-container">
						<LgvTools
							onResizeMethodChange={onResizeMethodChange}
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
