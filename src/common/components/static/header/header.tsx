import React from "react";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";

import {
	getDrawerState,
	toggleDrawerStateAction,
} from "src/common/components/static/drawer/ducks";

import "./header.scss";
const Header = ({ className, drawerState, toggleDrawerStateAction }) => {
	const onToggleDrawer = () => {
		toggleDrawerStateAction();
	};

	return (
		<AppBar className={className} position="static">
			<Toolbar variant="dense">
				<IconButton edge="start" color="white" onClick={onToggleDrawer}>
					<MenuIcon />
				</IconButton>
				<Grid container>
					<Grid item>
						<Typography variant="h4">limber.in</Typography>
					</Grid>
					<Grid item>
						<a
							className="star-on-github"
							href="https://github.com/sharma-subendra-kr/LimberGridView"
							target="blank"
						>
							<span>Star on github!</span>
							<GitHubIcon />
						</a>
					</Grid>
					<Grid item container>
						<a
							className="view-example-code"
							href="https://github.com/sharma-subendra-kr/limber-grid-view-github-page"
							target="blank"
						>
							<Grid item direction="column">
								<p>
									View example <CodeIcon /> plugged in using React
								</p>
							</Grid>
						</a>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

const StyledHeader = styled(Header)`
	// background-color: #28282a !important;
	// background-color: #115293 !important;

	.MuiSvgIcon-root {
		color: white;
	}
	.MuiTypography-root {
		cursor: pointer;
	}
	.MuiGrid-root {
		.MuiGrid-item:first-child {
			justify-content: flex-start;
		}
		.MuiGrid-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				color: white;
				svg {
					font-size: 32px;
				}
			}
			.star-on-github {
				span {
					font-size: 24px;
					margin-right: 10px;
					vertical-align: top;
				}
				svg {
					vertical-align: middle;
				}
			}
			.view-example-code {
				svg {
					vertical-align: middle;
				}
			}
		}
		.MuiGrid-item:last-child {
			justify-content: flex-end;
		}
	}
`;

export default connect(
	(state) => ({
		drawerState: getDrawerState(state),
	}),
	{ toggleDrawerStateAction }
)(StyledHeader);
