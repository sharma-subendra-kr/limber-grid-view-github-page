import React from "react";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import styled from "styled-components";

import { store } from "../../../../../configs/config";
import { getPosition, changePositionAction } from "./ducks";

const Logger = () => {
	return (
		<Provider store={store}>
			<ConnectedLoggerCore />
		</Provider>
	);
};

export default Logger;

const LoggerCore = ({ className, position, changePositionAction }) => {
	return (
		<div className={className}>
			<div className="switch-position"></div>
			<div className="logger-content"></div>
		</div>
	);
};

const StyledLoggerCore = styled(LoggerCore)`
	position: fixed;
	height: calc(100vh - 68px);
	width: 25vw;
	top: 68px;
	right: ${(props) => (props.position === "right" ? 0 : "75%")};
	background-color: white;
	z-index: 1000;
`;

const ConnectedLoggerCore = compose(
	connect(
		(state) => ({
			position: getPosition(state),
		}),
		{ changePositionAction }
	)
)(StyledLoggerCore);
