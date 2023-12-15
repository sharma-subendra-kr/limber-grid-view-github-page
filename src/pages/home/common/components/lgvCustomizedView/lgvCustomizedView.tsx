import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import LimberGridView from "@sharma-subendra-kr/limber-grid-view";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import TouchAppIcon from "@material-ui/icons/TouchApp";

import { Layout } from "./layout";
import { withLGV } from "../../../../../common/components/hoc/withLGV";

import {
	getView,
	getLatch,
	getDeskInteractionMode,
	getPositionData,
	setPositionDataAction,
	getMargin,
	getMarginChangeValue,
	setMarginAction,
	setScaledMarginAction,
	setMarginChangeValueAction,
	changeDeskInteractionModeAction,
} from "../../../ducks";

import "./lgvCustomizedView.scss";

const LgvCustomizedView = (props) => {
	const {
		latch,
		deskInteractionMode,
		positionData,
		setPositionDataAction,
		lgv,
		margin,
		marginChangeValue,
		setMarginAction,
		setScaledMarginAction,
		setMarginChangeValueAction,
		changeDeskInteractionModeAction,
	} = props;

	const [snackBarState, setSnackBarState] = useState(false);
	const el = useRef(null);
	const lgvMessage = useRef(undefined);

	useEffect(() => {
		lgv.current = new LimberGridView({
			el: el.current,
			itemMouseDownMoveCheck: itemMouseDownMoveCheck,
			callbacks: {
				mountComplete: mountComplete,
				renderComplete: renderComplete,
				renderContent: renderContent,
				resizeComplete: resizeComplete,
				moveComplete: moveComplete,
				addComplete: addComplete,
				removeComplete: removeComplete,
				cutSpaceComplete: cutSpaceComplete,
				renderPlugin: renderPlugin,
				removePlugin: removePlugin,
				getArrangeTime: getArrangeTime,
				getLogMessage: getLogMessage,
				offsetMovePseudoElement: offsetMovePseudoElement,
				renderSwipeUpContent: renderSwipeUpContent,
				renderSwipeDownContent: renderSwipeDownContent,
				renderScrollEndContent: renderScrollEndContent,
				renderPluginSwipeUp: renderPluginSwipeUp,
				renderPluginSwipeDown: renderPluginSwipeDown,
				renderPluginScrollEnd: renderPluginScrollEnd,
				removePluginMobileScrollMsgs: removePluginMobileScrollMsgs,
				resizeObserverComplete: resizeObserverComplete,
			},
			publicConstants: {
				showBottomLeftResizeGuide: true,
				autoScrollForMouse: true,
				deskInteractionMode: deskInteractionMode,
				latchMovedItem: latch,
				resizeSquareGuideLength: 30, // see ./layout.scss for required css
			},
			positionData: positionData,
			margin: margin,
			marginChangeValue: marginChangeValue,
		});
		// for debugging
		window.limberGridView = lgv.current;
	}, []);

	const itemMouseDownMoveCheck = (x, y, item, index, currentTarget) => {
		if (
			currentTarget.classList.contains("custom-layout-header-title") ||
			currentTarget.classList.contains("MuiSvgIcon-root")
		) {
			return true;
		}
		return false;
	};

	const onRemove = (index) => {
		lgv.current.removeItem(index);
	};

	const mountComplete = () => {
		setMarginAction(lgv.current.getCurrentMargin());
		setScaledMarginAction(lgv.current.getCurrentMargin(true));
		setMarginChangeValueAction(lgv.current.getMarginChangeValue());
	};

	const renderComplete = (index, element) => {};

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

	const resizeComplete = (index, width, height, arrangedIndices) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const moveComplete = (index, toX, toY, arrangedIndices) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const addComplete = (index, element) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const removeComplete = (index, element) => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const cutSpaceComplete = () => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const renderPlugin = (renderData, element, index) => {
		ReactDOM.render(renderData, element);
	};

	const removePlugin = (element, index) => {
		ReactDOM.unmountComponentAtNode(element);
	};

	const getArrangeTime = (a, b, c) => {
		// console.log("a,b,c", a, b, c);
	};

	const getLogMessage = (log) => {
		lgvMessage.current = log.message;
		setSnackBarState(true);
	};

	const offsetMovePseudoElement = function (x, y, item, X, Y) {
		// To have helper element exactly where user envoked mousedown or touchhold
		return {
			x: x - X,
			y: y - Y,
		};
		// To center helper element around cursor or touch position
		// return {
		// 	x: x - (item.x2 - item.x1) / 2,
		// 	y: y - (item.y2 - item.y1) / 2,
		// };
	};

	const renderSwipeUpContent = function () {
		return (
			<div className="swipe-guide-content">
				<ArrowUpwardIcon />
				<TouchAppIcon />
				<span>Swipe up for more!</span>
			</div>
		);
	};

	const renderSwipeDownContent = function () {
		return (
			<div className="swipe-guide-content">
				<ArrowDownwardIcon />
				<TouchAppIcon />
				<span>Swipe down for previous!</span>
			</div>
		);
	};

	const renderScrollEndContent = function () {
		return (
			<div className="swipe-guide-content">
				<span>That's all folks!</span>
			</div>
		);
	};

	const renderPluginSwipeUp = function (renderData, element) {
		ReactDOM.render(renderData, element);
	};

	const renderPluginSwipeDown = function (renderData, element) {
		ReactDOM.render(renderData, element);
	};

	const renderPluginScrollEnd = function (renderData, element) {
		ReactDOM.render(renderData, element);
	};

	const removePluginMobileScrollMsgs = function (e1, e2, e3) {
		if (e1) {
			ReactDOM.unmountComponentAtNode(e1);
		}

		if (e2) {
			ReactDOM.unmountComponentAtNode(e2);
		}

		if (e3) {
			ReactDOM.unmountComponentAtNode(e3);
		}
	};

	const resizeObserverComplete = function (isMobileView, wasMobileView) {
		if (isMobileView && !wasMobileView) {
			changeDeskInteractionModeAction("ADD");
		}
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
};

export default compose(
	withLGV,
	connect(
		(state) => ({
			view: getView(state),
			latch: getLatch(state),
			deskInteractionMode: getDeskInteractionMode(state),
			positionData: getPositionData(state),
			margin: getMargin(state),
			marginChangeValue: getMarginChangeValue(state),
		}),
		{
			setPositionDataAction,
			setMarginAction,
			setScaledMarginAction,
			setMarginChangeValueAction,
			changeDeskInteractionModeAction,
		}
	)
)(LgvCustomizedView);
