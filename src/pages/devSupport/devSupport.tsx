import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const DevSupport = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">Dev Support</Typography>
					<br />
					<br />
					You can get email dev support up to 2 months from the date of purchase
					of the license.
					<br />
					<br />
					This is not a dedicated service and is just a gesture of goodwill. The
					license doesn't state or guarantee any dev support.
					<br />
					<br />
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(DevSupport);
