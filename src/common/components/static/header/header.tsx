import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";

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
const Header = ({ className, drawerState, toggleDrawerStateAction, push }) => {
	const onToggleDrawer = () => {
		toggleDrawerStateAction();
	};

	return (
		<AppBar className={className} position="static">
			<Toolbar variant="dense">
				<IconButton edge="start" color="white" onClick={onToggleDrawer}>
					<MenuIcon />
				</IconButton>
				<Grid className="header-content" container wrap="nowrap">
					<Grid item>
						<Typography
							className="site-name"
							variant="h6"
							onClick={() => {
								push("/LimberGridView");
							}}
						>
							limber.in
						</Typography>
						<Typography className="header-links">
							<Link to="/LimberGridView/howToUse">
								<b>How To Use</b>
							</Link>
						</Typography>
						<Typography className="header-links">
							<Link to="/LimberGridView/browserSupport">
								<b>Browser Support</b>
							</Link>
						</Typography>
						<Typography className="header-links">
							<Link to="/LimberGridView/buy">
								<b>Pre-Order Now</b>
							</Link>
						</Typography>
						<Typography className="header-links">
							<Link to="/LimberGridView/pricing">
								<b>Pricing</b>
							</Link>
						</Typography>
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
							href="https://github.com/sharma-subendra-kr/limber-grid-view-github-page/blob/release-1.0.0-beta.3/src/pages/home/common/components/lgvCustomizedView/lgvCustomizedView.tsx"
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

	.header-content {
		overflow: hidden;
	}

	.MuiSvgIcon-root {
		color: white;
	}
	.MuiTypography-root.site-name {
		font-family: "Comic Sans MS";
		cursor: pointer;
		margin-right: 10px;
	}

	.MuiTypography-root.header-links {
		text-decoration: underline;
		cursor: pointer;
		margin-right: 10px;
		text-align: left;
	}

	.MuiGrid-root {
		.MuiGrid-item:first-child {
			justify-content: flex-start;
		}
		.MuiGrid-item:nth-child(2) {
			min-width: 220px;
			max-width: 220px;
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
				text-decoration: none;
				span {
					font-size: 24px;
					margin-right: 10px;
					vertical-align: top;
					text-decoration: underline;
					font-family: "Comic Sans MS";
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

	@media only screen and (max-width: 1180px) {
		.MuiGrid-root {
			.MuiGrid-item:first-child {
				min-width: 450px;
				max-width: 450px;
			}
			.MuiGrid-item:last-child {
				min-width: 270px;
			}
		}
	}
`;

export default connect(
	(state) => ({
		drawerState: getDrawerState(state),
	}),
	{ toggleDrawerStateAction, push }
)(StyledHeader);
