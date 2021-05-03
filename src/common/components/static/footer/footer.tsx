import React from "react";

import "./footer.scss";
const Footer = (props) => {
	return (
		<footer className="footer">
			<p>
				LimberGridView, a powerful JavaScript Libary that gives you movable,
				resizable(any size) and auto-arranging grids.
			</p>
			<br />
			<p>Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved.</p>
			<br />
			<p>
				LimberGridView is free software: you can redistribute it and/or modify
				it under the terms of the GNU General Public License as published by the
				Free Software Foundation, either version 3 of the License, or (at your
				option) any later version.
			</p>
			<br />
			<p>
				LimberGridView is distributed in the hope that it will be useful, but
				WITHOUT ANY WARRANTY; without even the implied warranty of
				MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
				Public License for more details.
			</p>
			<br />
			<p>
				You should have received a copy of the GNU General Public License along
				with LimberGridView. If not, see{" "}
				<a href="https://www.gnu.org/licenses/">
					{"<https://www.gnu.org/licenses/>"}.
				</a>
			</p>
			<br />
			<p>
				LimberGridView free software (Free as in freedom not the price). If you
				like to use this library on a non free software, you can get a
				proprietary license. To get a proprietary license contact{" "}
				<b>reach.subendra.kr@gmx.com.</b>
			</p>
		</footer>
	);
};

export default Footer;
