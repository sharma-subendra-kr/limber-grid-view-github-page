import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const RefundPolicy = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">Refund Policy</Typography>
					<br />
					<br />
					You can get a 30% refund on the cost price(excluding tax) within 6
					months.
					<br />
					<br />
					There must be a valid reason for me to process your refund. For me to
					process your refund, your cause of dissatisfaction must satisfy all
					the criteria listed below:
					<br />
					<br />
					* there is a bug in LimberGridView due to which it crashes or is
					unusable by the front end user
					<br />
					<br />
					* the bug or unstable behavior is reproducible
					<br />
					<br />
					If all the criteria listed above satisfy, then I'll be given two
					months to fix the bug. If the bug is still not resolved after two
					months then you will receive a 30% refund on your cost price(excluding
					tax).
					<br />
					<br />
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(RefundPolicy);
