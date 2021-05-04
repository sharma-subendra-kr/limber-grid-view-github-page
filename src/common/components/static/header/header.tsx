import React from "react";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

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
				<Typography variant="h4">limber.in</Typography>
			</Toolbar>
		</AppBar>
	);

	// return (
	// 	<header className="header">
	// 		<div className="header-banner">
	// 			<p>Limber.in</p>
	// 			<p>LimberGridView 1.0.0-beta.2 is finally here!</p>
	// 		</div>
	// 		<a
	// 			className="star-on-github"
	// 			href="https://github.com/sharma-subendra-kr/LimberGridView"
	// 			target="blank"
	// 		>
	// 			<span>Star on github!</span>
	// 			<FontAwesomeIcon icon={faGithub} />
	// 		</a>
	// 		<a
	// 			className="view-example-code"
	// 			href="https://github.com/sharma-subendra-kr/limber-grid-view-github-page"
	// 			target="blank"
	// 		>
	// 			<span>View example code plugged in using React</span>
	// 		</a>
	// 	</header>
	// );
};

const StyledHeader = styled(Header)`
	.MuiSvgIcon-root {
		color: white;
	}
	.MuiTypography-root {
		cursor: pointer;
	}
`;

export default connect(
	(state) => ({
		drawerState: getDrawerState(state),
	}),
	{ toggleDrawerStateAction }
)(StyledHeader);
