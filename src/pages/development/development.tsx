import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import Button from "@material-ui/core/Button";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
import LgvCustomizedView from "./common/components/lgvCustomizedView/lgvCustomizedView";
import LgvDefaultView from "./common/components/lgvDefaultView/lgvDefaultView";
import SwitchToDesktop from "src/common/components/static/switchToDesktop/switchToDesktop";
import Logger from "./common/components/logger/logger";

import { withLGV } from "../../common/components/hoc/withLGV";
import {
	getView,
	changeViewAction,
	getPositionData,
	setPositionDataAction,
} from "./ducks";
import {
	getOrderNowDialogState,
	setOrderNowDialogAction,
} from "src/common/components/complex/orderNow/ducks";
import {
	getswitchToDesktopDialogState,
	setSwitchToDesktopDialogAction,
} from "src/common/components/static/switchToDesktop/ducks";
import {
	getHowToUseDialogState,
	setHowToUseDialogAction,
} from "src/common/components/static/howToUse/ducks";

import { pd } from "src/pages/home/common/static/lgvData";
import "./development.scss";

const Development = (props) => {
	const {
		view,
		positionData,
		changeViewAction,
		setPositionDataAction,
		switchToDesktop,
		setSwitchToDesktopDialogAction,
		setHowToUseDialogAction,
		setOrderNowDialogAction,
		lgv,
	} = props;

	const introBuy = useRef("incomplete");

	useEffect(() => {
		setPositionDataAction(pd);
		if (props.location.pathname.indexOf("buy") === 16) {
			// setOrderNowDialogAction(true);
		} else if (!localStorage.getItem("switchToDesktop")) {
			// setSwitchToDesktopDialogAction(true);
		} else if (
			!localStorage.getItem("howToUse") ||
			props.location.pathname.indexOf("howToUse") >= 0
		) {
			// setHowToUseDialogAction(true);
		}

		ReactDOM.render(<Logger />, document.getElementById("development-console"));
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
		lgv.current.undo();
	};

	const onUserRedo = () => {
		lgv.current.redo();
	};

	const onAddItem = () => {
		lgv.current.addItem();
	};

	const onClickCustomizedView = () => {
		changeViewAction("customized");
	};

	const onClickDefaultViewView = () => {
		changeViewAction("default");
	};

	const onCloseSwitchToDesktop = () => {
		if (
			!localStorage.getItem("howToUse") ||
			props.location.pathname.indexOf("howToUse") >= 0
		) {
			setHowToUseDialogAction(true);
		}
	};

	return (
		<>
			<Header />
			<Drawer onOrderNowClose={onOrderNowClose} />
			{switchToDesktop && <SwitchToDesktop onClose={onCloseSwitchToDesktop} />}
			<div className="page-development">
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
							onUserUndo={onUserUndo}
							onUserRedo={onUserRedo}
							onAddItem={onAddItem}
						/>
					</div>
				</div>
				{positionData && (
					<div className="lgv-container">
						{view === "customized" ? <LgvCustomizedView /> : <LgvDefaultView />}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default compose(
	withLGV,
	connect(
		(state) => ({
			view: getView(state),
			positionData: getPositionData(state),
			switchToDesktop: getswitchToDesktopDialogState(state),
			howToUse: getHowToUseDialogState(state),
			orderNow: getOrderNowDialogState(state),
		}),
		{
			changeViewAction,
			setPositionDataAction,
			setSwitchToDesktopDialogAction,
			setHowToUseDialogAction,
			setOrderNowDialogAction,
		}
	)
)(Development);
