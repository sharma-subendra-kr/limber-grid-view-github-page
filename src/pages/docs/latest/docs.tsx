import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Markdown from "markdown-to-jsx";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import DocsMd from "./docs.md";
import "./docs.scss";

const TableWrapper = ({ children }) => {
	return (
		<div className={"docs-table"}>
			<table>{children}</table>
		</div>
	);
};

const Docs = (props) => {
	useEffect(() => {
		if (window.location.hash) {
			const elem = document.querySelector(
				`a[name="${window.location.hash.substring(1)}"]`
			);
			if (elem) {
				elem.scrollIntoView();
			}
		}
	}, []);

	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Box p={4}>
						<Typography variant="h4">Docs</Typography>
						<Markdown
							options={{ overrides: { table: TableWrapper } }}
							className="docs"
						>
							{DocsMd}
						</Markdown>
					</Box>
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(Docs);
