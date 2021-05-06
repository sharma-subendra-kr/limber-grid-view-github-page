import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const AboutTimeComplexity = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">About Time Complexity</Typography>
					<br />
					<br />
					Worst-case time complexity can jump up to or more than 125-150ms
					depending on the device, whether the device is plugged in or not,
					whether the CPU utilization is high or not, etc.
					<br />
					<br />
					These calculations happen only when the user tries to move or resize
					items on the desk.
					<br />
					<br />
					The worst-case scenario occurs very rarely under dense circumstances
					and when an item is moved very far from its original place.
					<br />
					<br />
					I try to optimize the algorithm all the time when I have new ideas. I
					will provide web workers in the upcoming releases.
					<br />
					<br />
					For average/best case the time to calculate can be around 2ms to 60ms,
					depending on the situation.
					<br />
					<br />
				</Paper>
			</PageContainer>
			<Footer />
		</>
	);
};

export default connect((state) => ({}), {})(AboutTimeComplexity);
