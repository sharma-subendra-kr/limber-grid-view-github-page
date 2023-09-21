import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const InfoOnCommercialLicense = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">Info On Commercial License</Typography>
					<br />
					<br />
					You can buy a 1 year license. Your license is automatically renewed
					after you pay the updated license fees (this will change according to
					market inflation, I do not to increase for random reasons).
					<br />
					<br />
					This license applies to a single Fully Qualified Domain Name(FQDN) i.e
					a single IP address for websites that are loaded via web browsers and
					a single iOS and android application.
					<br />
					<br />
					Example:
					<br /> example.com is allowed.
					<br /> sth.example.com is NOT allowed.
					<br />
					<br />
					Using LimberGridView on some other FQDN or IP address through iframe
					or by any other means is strictly prohibited. You can use it for only
					the FQDN you purchased for i.e. only one IP address.
					<br />
					<br />
					Loading LimberGridView on some other application is strictly
					prohibited by any means (e.g. via web view in android).
					<br />
					<br />
					If some third party would like to load LimberGridView from your
					application then the party who wants to load LimberGridView from your
					application should also buy a license.
					<br />
					<br />
					If one of your other applications would like to load LimberGridView
					from your application then you must buy a license for your other
					application also.
					<br />
					<br />
					Any dev support or other kinds of support is not mentioned and
					guaranteed with the license.
					<br />
					<br />
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(InfoOnCommercialLicense);
