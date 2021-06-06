import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const Limitations = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">Limitations</Typography>
					<br />
					<br />
					The height of any item cannot be more than the height of
					LimberGridView's viewport. This is done to manage time complexity.
					<br />
					<br />
					There is a limit to which an item can be shrinked. By default it is
					150px X 150px for a 1920px X 1080px viewport. This is done because an
					item should'nt be shrinkable to sizes like 1px X 1px and to manage
					time complexity.
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(Limitations);
