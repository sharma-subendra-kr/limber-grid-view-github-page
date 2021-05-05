import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

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
import AppsIcon from "@material-ui/icons/Apps";

import { getDrawerState, toggleDrawerStateAction } from "./ducks";

const list = [
	{ icon: HomeIcon, title: "Home", url: "" },
	{ icon: ShoppingCartIcon, title: "Pre-Order Now", url: "" },
	{ icon: TouchAppIcon, title: "How To Use", url: "" },
	{ icon: ToysIcon, title: "How It Works", url: "howItWorks" },
	{
		icon: TimerIcon,
		title: "About Time Complexity",
		url: "aboutTimeComplexity",
	},
	{ icon: PanToolIcon, title: "Limitations", url: "limitations" },
	{ icon: AttachMoneyIcon, title: "Pricing", url: "pricing" },
	{ icon: ThreeSixtyIcon, title: "Refund Policy", url: "refundPolicy" },
	{
		icon: InfoIcon,
		title: "Info On Commercial License",
		url: "infoOnCommercialLicense",
	},
	{ icon: SecurityIcon, title: "Privacy", url: "privacy" },
	{ icon: LiveHelpIcon, title: "Dev Support", url: "devSupport" },
	{ icon: HelpOutlineIcon, title: "FAQ", url: "faq" },
	{ icon: AppsIcon, title: "All Products", url: "allProducts" },
];

const CustomDrawer = ({
	className,
	drawerState,
	toggleDrawerStateAction,
	push,
}) => {
	const toggleDrawer = () => {
		toggleDrawerStateAction();
	};

	const onClickListItem = (title, url) => {
		if (title !== "Pre-Order Now" && title !== "How To Use") {
			push("/LimberGridView/" + url);
		}
		toggleDrawerStateAction();
	};

	return (
		<Drawer className={className} open={drawerState} onClose={toggleDrawer}>
			<List>
				<ListItem>
					<Typography variant="h5">LimberGridView</Typography>
				</ListItem>
				<Divider />
				{list.map((item) => {
					return (
						<>
							<ListItem
								key={item.title}
								onClick={() => onClickListItem(item.title, item.url)}
							>
								<ListItemIcon>
									<item.icon />
								</ListItemIcon>
								<ListItemText>{item.title}</ListItemText>
							</ListItem>
							{item.title === "Home" ||
							item.title === "How It Works" ||
							item.title === "How It Works" ||
							item.title === "Info On Commercial License" ? (
								<Divider />
							) : null}
						</>
					);
				})}
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
		push,
	}
)(StyledCustomDrawer);