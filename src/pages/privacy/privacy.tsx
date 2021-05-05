import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const Privacy = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">Privacy</Typography>
					<br />
					<br />
					I don't use any cookies.
					<br />
					<br />
					When you try to buy a license to use LimberGridView, you'll have to
					provide your info like first name, last name, email, phone number,
					company you work for, company revenue. This data is collected to
					process your purchase and is not and will not be shared with anyone. I
					use this data to map to your request history and purchase history.
					This is needed to have a clear history of all customer requests and
					purchases. Again this data is not shared with anyone and will not be
					shared with anyone.
					<br />
					<br />
					You can find the source code for the back end that powers this site
					limber.in and sharma-subendra-kr.github.com via this link.
					<br />
					<br />
					I have no interest in harvesting your data or selling your data which
					diverts my attention and valuable time away from building
					limber_____.com.
					<br />
					<br />
					I store some of your inputs when you click on things like "don't show
					me this again" in local storage. This is not shared with anyone. Head
					over to this link to know more about local storage.
					<br />
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(Privacy);
