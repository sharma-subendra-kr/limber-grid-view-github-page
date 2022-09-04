import React from "react";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import { store } from "../../../../../configs/config";
import {
	getPosition,
	getLogs,
	changePositionAction,
	logAction,
	clearLogAction,
} from "./ducks";

const Logger = () => {
	return (
		<Provider store={store}>
			<ConnectedLoggerCore />
		</Provider>
	);
};

export default Logger;

const LoggerCore = ({
	className,
	position,
	logs,
	changePositionAction,
	logAction,
	clearLogAction,
}) => {
	return (
		<div className={className}>
			<div className="switch-position">
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item>
						<Fab
							color="primary"
							size="small"
							onClick={() => changePositionAction("left")}
						>
							{"<"}
						</Fab>
					</Grid>
					<Grid item>
						<p onClick={() => clearLogAction()}>Clear</p>
					</Grid>
					<Grid item>
						<Fab
							color="primary"
							size="small"
							onClick={() => changePositionAction("right")}
						>
							{">"}
						</Fab>
					</Grid>
				</Grid>
			</div>
			<div className="logger-content">
				{logs.map((log, index) => {
					return (
						<div key={index} className="log-container">
							<p className="log-details">log: {index}</p>
							<p className="log">
								{log.map((arg, idx) => {
									return (
										<span key={idx} className="log-arg">
											{arg}{" "}
										</span>
									);
								})}
							</p>
						</div>
					);
				})}
			</div>
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
	border-left: ${(props) =>
		props.position === "right" ? "solid 1px black" : "none"};
	border-right: ${(props) =>
		props.position === "left" ? "solid 1px black" : "none"};
	.switch-position {
		padding: 3px;
		border-bottom: solid 1px black;
		height: 48px;
	}
	.logger-content {
		height: calc(100% - 48px);
		overflow: auto;
		.log-container {
			border-bottom: solid 1px #c0c0c0;
			padding: 5px;
			padding-bottom: 10px;
			.log-details {
				color: #00000088;
				font-style: italic;
				margin-bottom: 10px;
			}
			.log {
				.log-arg {
					word-break: break-all;
				}
			}
		}
	}
`;

const ConnectedLoggerCore = compose(
	connect(
		(state) => ({
			position: getPosition(state),
			logs: getLogs(state),
		}),
		{ changePositionAction, logAction, clearLogAction }
	)
)(StyledLoggerCore);
