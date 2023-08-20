import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { setOrderNowDialogAction } from "src/common/components/complex/orderNow/ducks";
import {
	getDrawerState,
	toggleDrawerStateAction,
} from "src/common/components/static/drawer/ducks";

import "./header.scss";

const codeLink =
	"https://github.com/sharma-subendra-kr/limber-grid-view-github-page/blob/master/src/pages/home/common/components/lgvCustomizedView/lgvCustomizedView.tsx";

const HeaderLinks = ({ setOrderNowDialogAction }) => {
	return (
		<>
			<Typography className="header-links">
				<b>
					<Link to="/LimberGridView/howToUse">How To Use</Link>
				</b>
			</Typography>

			<Typography className="header-links">
				<b>
					<Link to="/LimberGridView/docs">Docs</Link>
				</b>
			</Typography>

			<Typography
				className="header-links"
				onClick={() => setOrderNowDialogAction(true)}
			>
				<b>Pre-Order Now</b>
			</Typography>

			<Typography className="header-links">
				<b>
					<Link to="/LimberGridView/pricing">Pricing</Link>
				</b>
			</Typography>
		</>
	);
};

const HeaderLinksMobile = ({ setOrderNowDialogAction }) => {
	return (
		<List>
			<ListItem>
				<Typography className="header-links">
					<b>
						<Link to="/LimberGridView/howToUse">How To Use</Link>
					</b>
				</Typography>
			</ListItem>
			<ListItem>
				<Typography className="header-links">
					<b>
						<Link to="/LimberGridView/docs">Docs</Link>
					</b>
				</Typography>
			</ListItem>
			<ListItem>
				<Typography
					className="header-links"
					onClick={() => setOrderNowDialogAction(true)}
				>
					<b>Pre-Order Now</b>
				</Typography>
			</ListItem>
			<ListItem>
				<Typography className="header-links">
					<b>
						<Link to="/LimberGridView/pricing">Pricing</Link>
					</b>
				</Typography>
			</ListItem>
			<ListItem>
				<a className="view-example-code" href={codeLink} target="blank">
					<p>
						View example <CodeIcon /> plugged in using React
					</p>
				</a>
			</ListItem>
		</List>
	);
};

const Header = ({
	className,
	drawerState,
	toggleDrawerStateAction,
	setOrderNowDialogAction,
	push,
}) => {
	const [expand, setExpand] = useState(false);

	const onToggleDrawer = () => {
		toggleDrawerStateAction();
	};

	const onClickExpand = () => {
		setExpand((state) => !state);
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
						<HeaderLinks setOrderNowDialogAction={setOrderNowDialogAction} />
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
						<a className="view-example-code" href={codeLink} target="blank">
							<Grid item direction="column">
								<p>
									View example <CodeIcon /> plugged in using React
								</p>
							</Grid>
						</a>
					</Grid>
					<Grid item>
						<ExpandMoreIcon
							onClick={onClickExpand}
							style={expand ? { transform: "rotate(180deg)" } : {}}
						/>
					</Grid>
				</Grid>
			</Toolbar>
			{expand && (
				<Grid container className="mobile-links">
					<Box p={2}>
						<HeaderLinksMobile
							setOrderNowDialogAction={setOrderNowDialogAction}
						/>
					</Box>
				</Grid>
			)}
		</AppBar>
	);
};

const StyledHeader = styled(Header)`
	// background-color: #28282a !important;
	// background-color: #115293 !important;

	height: 48px;
	overflow: visible;

	//
	.header-content {
		overflow: hidden;
	}

	.MuiSvgIcon-root {
		color: white;
	}

	.MuiTypography-root.site-name {
		font-family: "Comic Sans MS";
		cursor: pointer;
		margin-right: 8px;
	}

	.MuiTypography-root.header-links {
		text-decoration: underline;
		cursor: pointer;
		margin-right: 8px;
		text-align: left;
	}
	//

	.MuiGrid-root.header-content {
		.MuiGrid-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			a {
				color: white;
			}
			svg {
				font-size: 32px;
			}
		}

		.MuiGrid-item:first-child {
			justify-content: flex-start;
		}
		.MuiGrid-item:nth-child(2) {
			min-width: 220px;
			max-width: 220px;

			.star-on-github {
				text-decoration: none;
				text-align: center;
				span {
					font-size: 24px;
					margin-right: 10px;
					vertical-align: middle;
					text-decoration: underline;
					font-family: "Comic Sans MS";
				}
				svg {
					vertical-align: middle;
				}
			}
		}
		.MuiGrid-item:nth-child(3) {
			justify-content: flex-end;

			.view-example-code {
				svg {
					vertical-align: middle;
				}
			}
		}
		.MuiGrid-item:nth-child(4) {
			display: none;
			svg {
				transition-property: transform;
				transition-timing-function: linear;
				transition-duration: 0.25s;
			}
		}
	}

	.mobile-links {
		display: none;
		a {
			color: white;
		}
	}

	@media only screen and (max-width: 1180px) and (min-width: 1px) and (orientation: portrait),
		only screen and (max-width: 1180px) and (min-width: 1px) and (orientation: landscape) {
		.MuiGrid-root.header-content {
			.MuiGrid-item:first-child {
				p {
					display: none;
				}
			}
			.MuiGrid-item:nth-child(2) {
				min-width: 150px;
				max-width: 150px;
				justify-content: flex-start;
				.star-on-github {
					span {
						font-size: 1.25rem;
						margin-right: 5px;
					}
					svg {
						font-size: 22px;
					}
				}
			}
			.MuiGrid-item:nth-child(3) {
				display: none;
			}
			.MuiGrid-item:nth-child(4) {
				display: flex;
				justify-content: flex-end;
			}
		}

		.mobile-links {
			display: block;
			z-index: 1100;
			background-color: #1769aa;

			.view-example-code {
				svg {
					font-size: 32px;
					vertical-align: middle;
				}
			}
		}
	}
`;

export default connect(
	(state) => ({
		drawerState: getDrawerState(state),
	}),
	{ toggleDrawerStateAction, setOrderNowDialogAction, push }
)(StyledHeader);
