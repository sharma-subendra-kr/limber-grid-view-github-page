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
					You can buy a 1 or 2 or a 5-year license depending on your needs.
					<br />
					<br />
					This license applies to a single domain and a single application. You
					are allowed to use it on subdomains also.
					<br />
					<br />
					Example:
					<br /> example.com is allowed.
					<br /> sth.example.com is also allowed.
					<br />
					<br />
					Example:
					<br /> On the Play store, your application name is "Example". Then you
					are allowed to use LimberGridView on an application named Example on
					iOS App Store.
					<br />
					<br />
					Using LimberGridView on some other domain through iframe or by any
					other means is strictly prohibited. You can use it for only the domain
					you purchased for.
					<br />
					<br />
					Loading LimberGridView on some other application is strictly
					prohibited by any means.
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
