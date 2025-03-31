import React, { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const Docs = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Redirect
						to={`/LimberGridView/docs/latest${
							window.location.hash && window.location.hash.length
								? window.location.hash
								: ""
						}`}
					/>
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(Docs);
