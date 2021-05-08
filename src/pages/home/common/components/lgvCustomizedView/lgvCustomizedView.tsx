import React, {
	useEffect,
	useState,
	useRef,
	useImperativeHandle,
	forwardRef,
} from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import LimberGridView from "limbergridview";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { Layout } from "./layout";

import {
	getView,
	getLatch,
	getDeskInteractionMode,
	getPositionData,
	setPositionDataAction,
} from "../../../ducks";

import "./lgvCustomizedView.scss";

const LgvCustomizedView = forwardRef((props, ref) => {
	const {
		latch,
		deskInteractionMode,
		positionData,
		setPositionDataAction,
	} = props;

	const [snackBarState, setSnackBarState] = useState(false);
	const lgv = useRef(null);
	const el = useRef(null);
	const lgvMessage = useRef(undefined);

	useImperativeHandle(ref, () => ({
		addItem: () => {
			lgv.current.addItem();
		},
	}));

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
				renderPlugin: renderPlugin,
				removePlugin: removePlugin,
				getArrangeTime: getArrangeTime,
				getLogMessage: getLogMessage,
			},
			publicConstants: {
				showBottomLeftResizeGuide: true,
				autoScrollForMouse: true,
			},
			positionData: positionData,
		});
	}, []);

	useEffect(() => {
		lgv.current.setLatchMovedItem(latch);
	}, [latch]);

	useEffect(() => {
		lgv.current.setDeskInteractMode(deskInteractionMode);
	}, [deskInteractionMode]);

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
			/>
		);
	};

	const renderComplete = (index) => {};

	const resizeComplete = (index, width, height, arrangedIndices) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const moveComplete = (index, toX, toY, arrangedIndices) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const addComplete = (index) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const removeComplete = (index, element) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const renderPlugin = (renderData, element) => {
		ReactDOM.render(renderData, element);
	};

	const removePlugin = (element) => {
		ReactDOM.unmountComponentAtNode(element);
	};

	const getArrangeTime = (a, b, c) => {
		console.log("a,b,c", a, b, c);
	};

	const getLogMessage = (log) => {
		lgvMessage.current = log.message;
		setSnackBarState(true);
	};

	const onSnackBarClose = () => {
		setSnackBarState(false);
	};

	return (
		<div className="lgv-customized-view-container" ref={el}>
			<Snackbar
				open={snackBarState}
				autoHideDuration={6000}
				onClose={onSnackBarClose}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<MuiAlert severity="error" onClose={onSnackBarClose} variant="filled">
					{lgvMessage.current}
				</MuiAlert>
			</Snackbar>
		</div>
	);
});

export default connect(
	(state) => ({
		view: getView(state),
		latch: getLatch(state),
		deskInteractionMode: getDeskInteractionMode(state),
		positionData: getPositionData(state),
	}),
	{ setPositionDataAction },
	null,
	{ forwardRef: true }
)(LgvCustomizedView);
