import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import {
	getOrderNowDialogState,
	setOrderNowDialogAction,
} from "src/common/components/complex/orderNow/ducks";

import "./footer.scss";
const Footer = ({ className, orderNow, setOrderNowDialogAction }) => {
	const [expand, setExpand] = useState(false);

	const onClickOrderNow = () => {
		setOrderNowDialogAction(true);
	};

	const onClickFooterFab = () => {
		setExpand((state) => !state);
	};

	return (
		<>
			<footer className={`${className} footer ${expand && "footer-expanded"} `}>
				<div className="license-info">
					<p>
						LimberGridView, a powerful JavaScript Library using Computational
						Geometry to render movable, dynamically resizable, and
						auto-arranging grids.
					</p>
					<br />
					<p>
						Copyright © 2018-2021, Subendra Kumar Sharma. All rights reserved.
					</p>
					<br />
					<p>
						LimberGridView is free software: you can redistribute it and/or
						modify it under the terms of the GNU General Public License as
						published by the Free Software Foundation, either version 3 of the
						License, or (at your option) any later version.
					</p>
					<br />
					<p>
						LimberGridView is distributed in the hope that it will be useful,
						but WITHOUT ANY WARRANTY; without even the implied warranty of
						MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
						General Public License for more details.
					</p>
					<br />
					<p>
						You should have received a copy of the GNU General Public License
						along with LimberGridView. If not, see{" "}
						<a href="https://www.gnu.org/licenses/">
							{"<https://www.gnu.org/licenses/>"}.
						</a>
					</p>
					<br />
					<p>
						LimberGridView is free software (free as in freedom not the price).
						If you like to use this library on a non free software, you can get
						a proprietary license. To get a proprietary license{" "}
						<b className="order-now" onClick={onClickOrderNow}>
							Order now.
						</b>
					</p>
				</div>
				<div className="site-map-container">
					<Link to="/LimberGridView/siteMap">
						<div>Site Map</div>
					</Link>
				</div>
				<Fab
					size="small"
					color="secondary"
					aria-label="expand"
					onClick={onClickFooterFab}
					className={`footer-fab ${expand && "expanded"}`}
				>
					<DoubleArrowIcon />
				</Fab>
			</footer>
		</>
	);
};

const StyledFooter = styled(Footer)`
	display: flex;

	.license-info {
		flex-grow: 1;
		@media only screen and (max-width: 980px) and (min-width: 1px) and (orientation: portrait) {
			flex-basis: fit-content;
			padding: 0 3px;
		}
	}

	.site-map-container {
		width: 70px;

		a {
			div {
			}
		}
	}

	.order-now {
		cursor: pointer;
	}

	.MuiFab-root {
		height: 20px;
		width: 20px;
		min-height: 20px;
		z-index: 1000;
		align-self: flex-start;
		svg {
			transform: rotate(-90deg);
		}
	}

	.MuiFab-root.expanded {
		align-self: flex-end;
		svg {
			transform: rotate(90deg);
		}
	}
`;

export default connect(
	(state) => ({ orderNow: getOrderNowDialogState(state) }),
	{
		setOrderNowDialogAction,
	}
)(StyledFooter);
