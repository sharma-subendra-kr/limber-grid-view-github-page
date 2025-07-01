import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
import WebIcon from "@material-ui/icons/Web";
import DescriptionIcon from "@material-ui/icons/Description";

import OrderNow from "src/common/components/complex/orderNow/orderNow";
import HowToUse from "src/common/components/static/howToUse/howToUse";

import {
	getOrderNowDialogState,
	setOrderNowDialogAction,
} from "src/common/components/complex/orderNow/ducks";
import {
	getHowToUseDialogState,
	setHowToUseDialogAction,
} from "src/common/components/static/howToUse/ducks";
import { getDrawerState, toggleDrawerStateAction } from "./ducks";

const demoList = [
	{ icon: HomeIcon, title: "Home", url: "" },
	{ icon: TouchAppIcon, title: "How To Use", url: "howToUse" },
	// { icon: ToysIcon, title: "How It Works", url: "howItWorks" },
];
const technicalList = [
	{
		icon: DescriptionIcon,
		title: "Docs v1.0.0-beta.14",
		url: "docs/v1_0_0-beta_14",
	},
	{ icon: DescriptionIcon, title: "Docs Latest", url: "docs/latest" },
	{ icon: LiveHelpIcon, title: "Dev Support", url: "devSupport" },
	{
		icon: TimerIcon,
		title: "About Time Complexity",
		url: "aboutTimeComplexity",
	},
	{ icon: PanToolIcon, title: "Limitations", url: "limitations" },
	{ icon: WebIcon, title: "Browser Support", url: "browserSupport" },
];
const salesList = [
	{ icon: ShoppingCartIcon, title: "Order Now", url: "buy" },
	{ icon: AttachMoneyIcon, title: "Pricing", url: "pricing" },
	{ icon: HelpOutlineIcon, title: "FAQ & Contact me", url: "faq" },
	{
		icon: InfoIcon,
		title: "Info On Commercial License",
		url: "infoOnCommercialLicense",
	},
	{ icon: ThreeSixtyIcon, title: "Refund Policy", url: "refundPolicy" },
	{ icon: AppsIcon, title: "All Products", url: "allProducts" },
];
const othersList = [{ icon: SecurityIcon, title: "Privacy", url: "privacy" }];

const popUps = { "Order Now": true, "How To Use": true };

const ListItemWrapper = ({ item, onClickListItem }) => {
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
		</>
	);
};

const ListItemLink = ({ item }) => {
	return (
		<Link to={item.url}>
			<ListItem key={item.title}>
				<ListItemIcon>
					<item.icon />
				</ListItemIcon>
				<ListItemText>{item.title}</ListItemText>
			</ListItem>
		</Link>
	);
};

const CustomDrawer = ({
	className,
	drawerState,
	howToUse,
	orderNow,
	toggleDrawerStateAction,
	setOrderNowDialogAction,
	setHowToUseDialogAction,
	onOrderNowClose: _onOrderNowClose,
	push,
}) => {
	const toggleDrawer = () => {
		toggleDrawerStateAction();
	};

	const onOrderNowClose = () => {
		if (_onOrderNowClose) {
			_onOrderNowClose();
		}
	};

	const onClickListItem = (title, url) => {
		if (title === "Order Now") {
			setOrderNowDialogAction(true);
		} else if (title === "How To Use") {
			setHowToUseDialogAction(true);
		} else {
			push("/LimberGridView/" + url);
		}
		toggleDrawerStateAction();
	};

	return (
		<>
			<Drawer className={className} open={drawerState} onClose={toggleDrawer}>
				<List>
					<ListItem>
						<Grid container direction="row">
							<Grid container item direction="column" className="lgv-info">
								<Grid item>
									<Typography
										variant="h5"
										onClick={() => {
											toggleDrawerStateAction();
											push("/LimberGridView/");
										}}
									>
										LimberGridView
									</Typography>
								</Grid>
								<Grid item>
									<span className="version-info">Latest v1.0.0-beta.16</span>
								</Grid>
							</Grid>
							<Grid item>
								<Button
									startIcon={<DescriptionIcon />}
									size="small"
									onClick={() => {
										toggleDrawerStateAction();
										push("/LimberGridView/docs/latest");
									}}
								>
									Read the docs
								</Button>
							</Grid>
						</Grid>
					</ListItem>
					<Divider />
					<Typography variant="button" className="list-divider">
						Demo
					</Typography>
					<Divider />
					{demoList.map((item) => {
						return (
							<ListItemWrapper
								key={item.title}
								item={item}
								onClickListItem={onClickListItem}
							/>
						);
					})}
					<Divider />
					<Typography variant="button" className="list-divider">
						Technical
					</Typography>
					<Divider />
					{technicalList.map((item) => {
						return (
							<ListItemWrapper
								key={item.title}
								item={item}
								onClickListItem={onClickListItem}
							/>
						);
					})}
					{/*<Divider />
					<Typography variant="button" className="list-divider">
						Sales
					</Typography>
					<Divider />
					{salesList.map((item) => {
						return (
							<ListItemWrapper
								key={item.title}
								item={item}
								onClickListItem={onClickListItem}
							/>
						);
					})}*/}
					<Divider />
					<Typography variant="button" className="list-divider">
						Others
					</Typography>
					<Divider />
					{othersList.map((item) => {
						return (
							<ListItemWrapper
								key={item.title}
								item={item}
								onClickListItem={onClickListItem}
							/>
						);
					})}
				</List>
			</Drawer>
			{orderNow && <OrderNow onClose={onOrderNowClose} />}
			{howToUse && <HowToUse />}
		</>
	);
};

const StyledCustomDrawer = styled(CustomDrawer)`
	.lgv-info {
		flex: 1;
	}
	.version-info {
		font-size: 9px;
	}

	.list-divider {
		margin-left: 16px;
	}

	.MuiList-root {
		width: 295px;
		.MuiListItem-root {
			cursor: pointer;
		}
		.MuiGrid-root {
			.MuiButtonBase-root {
				margin-left: 5px;
				span {
					font-size: 9px;
				}
			}
		}
	}
`;

export default connect(
	(state) => ({
		drawerState: getDrawerState(state),
		howToUse: getHowToUseDialogState(state),
		orderNow: getOrderNowDialogState(state),
	}),
	{
		toggleDrawerStateAction,
		setOrderNowDialogAction,
		setHowToUseDialogAction,
		push,
	}
)(StyledCustomDrawer);
