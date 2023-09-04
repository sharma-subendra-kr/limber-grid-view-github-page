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
} from "../../../ducks";

import "./lgvDefaultView.scss";

const LgvDefaultView = (props) => {
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
	} = props;

	const [snackBarState, setSnackBarState] = useState(false);
	const el = useRef(null);
	const lgvMessage = useRef(undefined);

	useEffect(() => {
		lgv.current = new LimberGridView({
			el: el.current,
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
				renderSwipeUpContent: renderSwipeUpContent,
				renderSwipeDownContent: renderSwipeDownContent,
				renderScrollEndContent: renderScrollEndContent,
				renderPluginSwipeUp: renderPluginSwipeUp,
				renderPluginSwipeDown: renderPluginSwipeDown,
				renderPluginScrollEnd: renderPluginScrollEnd,
				removePluginMobileScrollMsgs: removePluginMobileScrollMsgs,
			},
			publicConstants: {
				autoScrollForMouse: true,
				deskInteractionMode: deskInteractionMode,
				latchMovedItem: latch,
			},
			positionData: positionData,
			margin: margin,
			marginChangeValue: marginChangeValue,
		});
	}, []);

	const onRemove = (index) => {
		lgv.current.removeItem(index);
	};

	const mountComplete = () => {
		setMarginAction(lgv.current.getCurrentMargin());
		setScaledMarginAction(lgv.current.getCurrentMargin(true));
		setMarginChangeValueAction(lgv.current.getMarginChangeValue());
	};

	const renderComplete = (index) => {
		if (index === undefined) {
		} else {
		}
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

	const cutSpaceComplete = () => {
		setPositionDataAction(lgv.current.getGridData().positionData);
	};

	const renderPlugin = (renderData, element) => {
		ReactDOM.render(renderData, element);
	};

	const removePlugin = (element) => {
		ReactDOM.unmountComponentAtNode(element);
	};

	const getArrangeTime = (a, b, c) => {
		// console.log("a,b,c", a, b, c);
	};

	const getLogMessage = (log) => {
		lgvMessage.current = log.message;
		setSnackBarState(true);
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

	const onSnackBarClose = () => {
		setSnackBarState(false);
	};

	return (
		<div className="lgv-default-view-container" ref={el}>
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
		}
	)
)(LgvDefaultView);
