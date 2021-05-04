import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./header.scss";
const Header = (props) => {
	return (
		<>
			<AppBar position="static">
				<Toolbar variant="dense"></Toolbar>
			</AppBar>
		</>
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

export default Header;
