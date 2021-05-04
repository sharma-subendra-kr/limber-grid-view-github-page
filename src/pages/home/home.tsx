import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import LgvTools from "src/common/components/complex/lgvTools/lgvTools";
import LgvCustomizedView from "./common/components/lgvCustomizedView/lgvCustomizedView";
import LgvDefaultView from "./common/components/lgvDefaultView/lgvDefaultView";

import {
	getView,
	changeViewAction,
	changeLatchAction,
	changeResizeMethodAction,
	changeDeskInteractionModeAction,
	getPositionData,
	setPositionDataAction,
} from "./ducks";

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
	} = props;

	const [info, setInfo] = useState("moveInfo");

	const lgvCustomizedView = useRef();
	const lgvDefaultView = useRef();

	useEffect(() => {
		setPositionDataAction(pd);
	}, []);

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

	return (
		<>
			<Header />
			<Drawer />
			<Snackbar
				open={info === "moveInfo"}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<Alert
					severity="info"
					onClose={() => setInfo("resizeInfo")}
					variant="filled"
				>
					Long Press/Tap on text of any item to drag and move.
				</Alert>
			</Snackbar>
			<Snackbar
				open={info === "resizeInfo"}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<Alert
					severity="info"
					onClose={() => setInfo("cancelInfo")}
					variant="filled"
				>
					Resize any item by dragging the bottom right corner of any item.
				</Alert>
			</Snackbar>
			<Snackbar
				open={info === "cancelInfo"}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<Alert severity="info" onClose={() => setInfo("")} variant="filled">
					Tap anywhere or right click to cancel a move or resize operation.
				</Alert>
			</Snackbar>
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
	}),
	{
		changeViewAction,
		changeResizeMethodAction,
		changeLatchAction,
		changeDeskInteractionModeAction,
		setPositionDataAction,
	}
)(Home);
