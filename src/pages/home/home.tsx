import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
import LgvMoreTools from "src/common/components/complex/lgvMoreTools/lgvMoreTools";
import LgvCustomizedView from "./common/components/lgvCustomizedView/lgvCustomizedView";
import LgvDefaultView from "./common/components/lgvDefaultView/lgvDefaultView";
import SwitchToDesktop from "src/common/components/static/switchToDesktop/switchToDesktop";

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

import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import { pd } from "src/pages/home/common/static/lgvData";
import "./home.scss";

const Home = (props) => {
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
	const [isToolsExpanded, setIsToolsExpanded] = useState(false);

	useEffect(() => {
		setPositionDataAction(pd);
		if (props.location.pathname.indexOf("buy") === 16) {
			setOrderNowDialogAction(true);
		} else if (!localStorage.getItem("switchToDesktop")) {
			setSwitchToDesktopDialogAction(true);
		} else if (
			!localStorage.getItem("howToUse") ||
			props.location.pathname.indexOf("howToUse") >= 0
		) {
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

	const onViewChange = (event) => {
		changeViewAction(event.target.value);
	};

	const onCloseSwitchToDesktop = () => {
		if (
			!localStorage.getItem("howToUse") ||
			props.location.pathname.indexOf("howToUse") >= 0
		) {
			setHowToUseDialogAction(true);
		}
	};

	const onClickExpandTools = (event) => {
		setIsToolsExpanded((state) => !state);
	};

	return (
		<>
			<Header />
			<Drawer onOrderNowClose={onOrderNowClose} />
			{switchToDesktop && <SwitchToDesktop onClose={onCloseSwitchToDesktop} />}
			<div className="page-home">
				<div className="tools-container">
					<div className={`tools-wrapper ${isToolsExpanded ? "expanded" : ""}`}>
						<div>
							<Select
								value={view}
								onChange={onViewChange}
								className="select-view"
							>
								<MenuItem value="customized">Customized</MenuItem>
								<MenuItem value="default">Default</MenuItem>
							</Select>
						</div>
						<div className="lgv-tools-container">
							<LgvTools />
							{isToolsExpanded && <LgvMoreTools />}
						</div>
						<Fab
							size="small"
							color="secondary"
							aria-label="expand"
							onClick={onClickExpandTools}
							className={isToolsExpanded && "expanded"}
						>
							<DoubleArrowIcon />
						</Fab>
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
)(Home);
