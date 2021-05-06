import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
	getOrderNowDialogState,
	setOrderNowDialogAction,
} from "src/common/components/complex/orderNow/ducks";

import "./footer.scss";
const Footer = ({ className, orderNow, setOrderNowDialogAction }) => {
	const onClickOrderNow = () => {
		setOrderNowDialogAction(true);
	};

	return (
		<>
			<footer className={`${className} footer`}>
				<p>
					LimberGridView, a powerful JavaScript Library using Computational
					Geometry to render movable, dynamically resizable, and auto-arranging
					grids.
				</p>
				<br />
				<p>
					Copyright © 2018-2020, Subendra Kumar Sharma. All rights reserved.
				</p>
				<br />
				<p>
					LimberGridView is free software: you can redistribute it and/or modify
					it under the terms of the GNU General Public License as published by
					the Free Software Foundation, either version 3 of the License, or (at
					your option) any later version.
				</p>
				<br />
				<p>
					LimberGridView is distributed in the hope that it will be useful, but
					WITHOUT ANY WARRANTY; without even the implied warranty of
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
					LimberGridView free software (free as in freedom not the price). If
					you like to use this library on a non free software, you can get a
					proprietary license. To get a proprietary license{" "}
					<b className="order-now" onClick={onClickOrderNow}>
						Pre-Order now.
					</b>
				</p>
			</footer>
		</>
	);
};

const StyledFooter = styled(Footer)`
	.order-now {
		cursor: pointer;
	}
`;

export default connect(
	(state) => ({ orderNow: getOrderNowDialogState(state) }),
	{
		setOrderNowDialogAction,
	}
)(StyledFooter);
