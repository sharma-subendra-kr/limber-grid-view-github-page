import React, { useState } from "react";
import { connect } from "react-redux";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TimerIcon from "@material-ui/icons/Timer";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InfoIcon from "@material-ui/icons/Info";
import SecurityIcon from "@material-ui/icons/Security";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PanToolIcon from "@material-ui/icons/PanTool";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import ToysIcon from "@material-ui/icons/Toys";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { getDrawerState, toggleDrawerStateAction } from "./ducks";

const CustomDrawer = ({ className, drawerState, toggleDrawerStateAction }) => {
	const toggleDrawer = () => {
		toggleDrawerStateAction();
	};

	return (
		<Drawer className={className} open={drawerState} onClose={toggleDrawer}>
			<List>
				<ListItem>
					<Typography variant="h5">LimberGridView</Typography>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText>Home</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText>Pre-Order Now</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<TouchAppIcon />
					</ListItemIcon>
					<ListItemText>How To Use</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<ToysIcon />
					</ListItemIcon>
					<ListItemText>How It works</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<TimerIcon />
					</ListItemIcon>
					<ListItemText>About Time Complexity</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<PanToolIcon />
					</ListItemIcon>
					<ListItemText>Limitations</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<AttachMoneyIcon />
					</ListItemIcon>
					<ListItemText>Pricing</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<ThreeSixtyIcon />
					</ListItemIcon>
					<ListItemText>Refund Policy</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText>Info On Commercial License</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<SecurityIcon />
					</ListItemIcon>
					<ListItemText>Privacy</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<LiveHelpIcon />
					</ListItemIcon>
					<ListItemText>Dev Support</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<HelpOutlineIcon />
					</ListItemIcon>
					<ListItemText>FAQ</ListItemText>
				</ListItem>
			</List>
		</Drawer>
	);
};

const StyledCustomDrawer = styled(CustomDrawer)`
	.MuiList-root {
		width: 270px;
		.MuiListItem-root {
			cursor: pointer;
		}
	}
`;

export default connect(
	(state) => ({
		drawerState: getDrawerState(state),
	}),
	{
		toggleDrawerStateAction,
	}
)(StyledCustomDrawer);
