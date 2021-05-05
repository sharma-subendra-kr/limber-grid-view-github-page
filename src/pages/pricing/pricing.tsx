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

const Pricing = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Typography variant="h4">Pricing</Typography>
				<br />
				<br />
				<Typography variant="h5">INR</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Peroid</TableCell>
								<TableCell align="center">Revenue lt 1m</TableCell>
								<TableCell align="center">Revenue gt 1m & lt 10m</TableCell>
								<TableCell align="center">Revenue gt 10m & lt 100m</TableCell>
								<TableCell align="center">Revenue gt 100m & lt 500m</TableCell>
								<TableCell align="center">Revenue gt 500m</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center">1 Year</TableCell>
								<TableCell align="center">10000</TableCell>
								<TableCell align="center">20000</TableCell>
								<TableCell align="center">30000</TableCell>
								<TableCell align="center">50000</TableCell>
								<TableCell align="center">80000</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">3 Year 20% Off</TableCell>
								<TableCell align="center">
									<s>30000</s> 24000
								</TableCell>
								<TableCell align="center">
									<s>60000</s> 48000
								</TableCell>
								<TableCell align="center">
									<s>90000</s> 72000
								</TableCell>
								<TableCell align="center">
									<s>150000</s> 120000
								</TableCell>
								<TableCell align="center">
									<s>240000</s> 192000
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">5 Year 40% Off</TableCell>
								<TableCell align="center">
									<s>50000</s> 30000
								</TableCell>
								<TableCell align="center">
									<s>100000</s> 60000
								</TableCell>
								<TableCell align="center">
									<s>150000</s> 90000
								</TableCell>
								<TableCell align="center">
									<s>250000</s> 150000
								</TableCell>
								<TableCell align="center">
									<s>400000</s> 240000
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<br />
				<br />
				<Typography variant="h5">USD</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Chrome</TableCell>
								<TableCell align="center">Firefox</TableCell>
								<TableCell align="center">Opera</TableCell>
								<TableCell align="center">Safari</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center">Yes</TableCell>
								<TableCell align="center">Currently No</TableCell>
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

export default connect((state) => ({}), {})(Pricing);
