import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const BrowserSupport = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Typography variant="h4">Browser Support</Typography>
				<br />
				<br />
				<Typography variant="h5">Desktop</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Chrome</TableCell>
								<TableCell align="center">Firefox</TableCell>
								<TableCell align="center">Opera</TableCell>
								<TableCell align="center">Safari (MacOS)</TableCell>
								<TableCell align="center">Edge</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<br />
				<br />
				<Typography variant="h5">iOS</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Chrome</TableCell>
								<TableCell align="center">Firefox</TableCell>
								<TableCell align="center">Opera</TableCell>
								<TableCell align="center">Safari</TableCell>
								<TableCell align="center">Edge</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<br />
				<br />
				<Typography variant="h5">Android</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Chrome</TableCell>
								<TableCell align="center">Firefox</TableCell>
								<TableCell align="center">Opera</TableCell>
								<TableCell align="center">Edge</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">
									Currently No (contextmenu event behaves differently)
								</TableCell>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Yes</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(BrowserSupport);
