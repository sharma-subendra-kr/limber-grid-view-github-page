import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
				<p>
					Prices are based on your company revenue. All revenues are based on
					USD. Higher the revenue, the higher the price. This is to ensure the
					development of{" "}
					<Link to="/LimberGridView/allProducts">limber_____.com</Link>. Click
					on
					<Link to="/LimberGridView/allProducts">limber_____.com</Link> to learn
					more about it.
				</p>
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
								<TableCell align="center">10,000</TableCell>
								<TableCell align="center">20,000</TableCell>
								<TableCell align="center">30,000</TableCell>
								<TableCell align="center">50,000</TableCell>
								<TableCell align="center">80,000</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">3 Year 20% Off</TableCell>
								<TableCell align="center">
									<s>30,000</s> 24,000
								</TableCell>
								<TableCell align="center">
									<s>60,000</s> 48,000
								</TableCell>
								<TableCell align="center">
									<s>90,000</s> 72,000
								</TableCell>
								<TableCell align="center">
									<s>150,000</s> 120,000
								</TableCell>
								<TableCell align="center">
									<s>240,000</s> 192,000
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">5 Year 40% Off</TableCell>
								<TableCell align="center">
									<s>50,000</s> 30,000
								</TableCell>
								<TableCell align="center">
									<s>100,000</s> 60,000
								</TableCell>
								<TableCell align="center">
									<s>150,000</s> 90,000
								</TableCell>
								<TableCell align="center">
									<s>250,000</s> 150,000
								</TableCell>
								<TableCell align="center">
									<s>400,000</s> 240,000
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
								<TableCell align="center">135</TableCell>
								<TableCell align="center">270</TableCell>
								<TableCell align="center">400</TableCell>
								<TableCell align="center">675</TableCell>
								<TableCell align="center">1,000</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">3 Year 20% Off</TableCell>
								<TableCell align="center">
									<s>405</s> 324
								</TableCell>
								<TableCell align="center">
									<s>810</s> 648
								</TableCell>
								<TableCell align="center">
									<s>1,200</s> 960
								</TableCell>
								<TableCell align="center">
									<s>2,025</s> 1,620
								</TableCell>
								<TableCell align="center">
									<s>3,000</s> 2,400
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">5 Year 40% Off</TableCell>
								<TableCell align="center">
									<s>675</s> 405
								</TableCell>
								<TableCell align="center">
									<s>1,350</s> 810
								</TableCell>
								<TableCell align="center">
									<s>2,000</s> 1,200
								</TableCell>
								<TableCell align="center">
									<s>3,375</s> 2,025
								</TableCell>
								<TableCell align="center">
									<s>5,000</s> 3,000
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(Pricing);
