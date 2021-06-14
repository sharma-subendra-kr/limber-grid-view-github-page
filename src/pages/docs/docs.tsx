import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
					<Typography variant="h4">Docs</Typography>
					<br />
					<br />
					Coming soon...
					<br />
					<br />
					<p>
						For now please view the{" "}
						<a
							className="star-on-github"
							href="https://github.com/sharma-subendra-kr/LimberGridView"
							target="blank"
						>
							wiki
						</a>{" "}
						page...
					</p>
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(Docs);
