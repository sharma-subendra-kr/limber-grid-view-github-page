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
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import styled from "styled-components";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import {
	getSendQueryDialogState,
	setSendQueryDialogAction,
} from "src/common/components/complex/sendQuery/ducks";
import SendQuery from "src/common/components/complex/sendQuery/sendQuery";

// import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Pricing = ({
	className,
	sendQueryDialogState,
	setSendQueryDialogAction,
}) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			{sendQueryDialogState && <SendQuery onClose={() => {}} />}
			<PageContainer>
				{location.pathname.indexOf("pricing") !== -1 && (
					<>
						<Typography variant="h4">Pricing</Typography>
						<br />
					</>
				)}
				<Box m={0} p={0} className={className}>
					<Grid container alignItems="center" direction="column" spacing={3}>
						{location.pathname.indexOf("pricing") !== -1 && (
							<>
								<Grid item>
									<p>
										Payment must be made to a specific bank in India in Indian
										Rupees. All prices are exclusive of taxes.
									</p>
								</Grid>
								<Grid
									container
									item
									alignItems="center"
									justifyContent="center"
									spacing={3}
								>
									<Grid
										item
										xl={3}
										lg={3}
										md={3}
										sm={12}
										xs={12}
										className="fees-card"
									>
										<Card>
											<CardContent>
												<Grid container alignItems="center" direction="column">
													<Typography variant="h4">Three Platform</Typography>
													<Typography variant="h4">License</Typography>
													<br />
													{/*<Typography variant="h5">
														&#8377; 50,000/yr
													</Typography>*/}
													<Typography variant="h5">
														{/*<Link to="/LimberGridView/contactMe">
															Contact Me
														</Link>*/}
														<ContactMe
															setSendQueryDialogAction={
																setSendQueryDialogAction
															}
														/>
													</Typography>
													<br />
													<Typography variant="body2">
														For one FQDN and one each application on iOS and
														android.
													</Typography>
													<br />
													{/*<HelpOutlineIcon className="license-help-icon" />*/}
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid
										item
										xl={3}
										lg={3}
										md={3}
										sm={12}
										xs={12}
										className="fees-card"
									>
										<Card>
											<CardContent>
												<Grid container alignItems="center" direction="column">
													<Typography variant="h4">Single platform</Typography>
													<Typography variant="h4">License</Typography>
													<br />
													{/*<Typography variant="h5">
														&#8377; 25,000/yr
													</Typography>*/}
													<Typography variant="h5">
														{/*<Link to="/LimberGridView/contactMe">
															Contact Me
														</Link>*/}
														<ContactMe
															setSendQueryDialogAction={
																setSendQueryDialogAction
															}
														/>
													</Typography>
													<br />
													<Typography variant="body2">
														For one application on any one platforms like
														Ubuntu, Windows, MacOS, etc.
													</Typography>
													<br />
													{/*<HelpOutlineIcon className="license-help-icon" />*/}
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid
										item
										xl={3}
										lg={3}
										md={3}
										sm={12}
										xs={12}
										className="fees-card"
									>
										<Card>
											<CardContent>
												<Grid container alignItems="center" direction="column">
													<Typography variant="h4">Developer</Typography>
													<Typography variant="h4">License</Typography>
													<br />
													{/*<Typography variant="h5">
														&#8377; 25,000/yr
													</Typography>*/}
													<Typography variant="h5">
														{/*<Link to="/LimberGridView/contactMe">
															Contact Me
														</Link>*/}
														<ContactMe
															setSendQueryDialogAction={
																setSendQueryDialogAction
															}
														/>
													</Typography>
													<br />
													<Typography variant="body2">
														For vendors and contractors building software for
														clients. Cliends need to buy separate platform
														License.
													</Typography>
													<br />
													{/*<HelpOutlineIcon className="license-help-icon" />*/}
												</Grid>
											</CardContent>
										</Card>
									</Grid>
								</Grid>
							</>
						)}
						<Grid item>
							<Typography variant="h4">Support Services</Typography>
						</Grid>
						<Grid item>
							<TableContainer component={Paper}>
								<Table aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell>
												<Typography variant="h6">
													Integration Support*
												</Typography>
											</TableCell>
											<TableCell>
												<Typography variant="h6">Price</Typography>
											</TableCell>
											<TableCell>
												<Typography variant="h6">Availability</Typography>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>Work From Home</TableCell>
											<TableCell>INR 50,000/week, 5 working days</TableCell>
											<TableCell style={{ color: "green", fontWeight: "bold" }}>
												Available
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Bangalore</TableCell>
											<TableCell>INR 60,000/week, 5 working days</TableCell>
											<TableCell style={{ color: "green", fontWeight: "bold" }}>
												Available
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Other cities in India</TableCell>
											<TableCell>
												INR 60,000/week, 5 working days
												<br />
												<br />
												(Flights, 3 star hotel, travelling, food, etc,
												<br /> expenses to be covered by the buyer)
											</TableCell>
											<TableCell style={{ color: "green", fontWeight: "bold" }}>
												Available
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Other countries</TableCell>
											<TableCell>
												Contact for pricing
												<br />
												<br />
												(Subject to willingnes to travel)
											</TableCell>
											<TableCell style={{ color: "red", fontWeight: "bold" }}>
												Unavailable
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<br />
							<br />
							<br />
							<Grid item>
								<TableContainer component={Paper}>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>
													<Typography variant="h6">Email Support</Typography>
												</TableCell>
												<TableCell>
													<Typography variant="h6">Price</Typography>
												</TableCell>
												<TableCell>
													<Typography variant="h6">Availability</Typography>
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell>Response within 48hrs</TableCell>
												<TableCell>INR 5,000/mo</TableCell>
												<TableCell style={{ color: "red", fontWeight: "bold" }}>
													Unavailable
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Response within 24hrs</TableCell>
												<TableCell>INR 10,000/mo</TableCell>
												<TableCell style={{ color: "red", fontWeight: "bold" }}>
													Unavailable
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Response within 12hrs</TableCell>
												<TableCell>INR 20,000/mo</TableCell>
												<TableCell style={{ color: "red", fontWeight: "bold" }}>
													Unavailable
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Response within 6hrs</TableCell>
												<TableCell>INR 30,000/mo</TableCell>
												<TableCell style={{ color: "red", fontWeight: "bold" }}>
													Unavailable
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
							<br />
							<br />
							<br />
							<Grid item>
								<TableContainer component={Paper}>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>
													<Typography variant="h6">
														Complimentary Email Support
													</Typography>
												</TableCell>
												<TableCell>
													<Typography variant="h6">Availability</Typography>
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell>
													Response within 24hrs
													<br />
													<br />
													(This is not a dedicated service and is just a gesture
													of goodwill.
													<br />
													This doesn't guarantee any timely response.)
												</TableCell>
												<TableCell style={{ color: "red", fontWeight: "bold" }}>
													Unavailable
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
							<br />
							<br />
							<br />
							<Grid item>
								<TableContainer component={Paper}>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>
													<Typography variant="h6">
														Bug reporting, fixes & updates
													</Typography>
												</TableCell>
												<TableCell>
													<Typography variant="h6">Price</Typography>
												</TableCell>
												<TableCell>
													<Typography variant="h6">Availability</Typography>
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell>
													Fixes within 2 months and regular updates
													<br />
													<br />
													(Some bugs are harder to trace and fix, so more time
													is required.
													<br />
													Small bugs are usually fixed immediately.)
												</TableCell>
												<TableCell
													style={{ color: "green", fontWeight: "bold" }}
												>
													Always Free
												</TableCell>
												<TableCell
													style={{ color: "green", fontWeight: "bold" }}
												>
													Always Available
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
							<br />
							<Typography variant="caption">
								* Integration might not complete in 5 working days depending
								upon your codebase. Buyers might be able to extend the service
								time at a cost of INR 12,000/day within India up to 5 working
								days.
								<br />
								Working days are Monday, Tuesday, Wednesday, Thursday and
								Friday.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</PageContainer>
		</>
	);
};

const StyledPricing = styled(Pricing)`
	.fees-card {
		> .MuiCard-root {
			min-height: 264px;
			> .MuiCardContent-root {
				min-height: 264px;
			}
		}
		h4,
		p {
			text-align: center;
		}

		.license-help-icon {
		}
	}
	.open-send-query {
		color: blue;
		cursor: pointer;
		user-select: none;
	}
`;

const ContactMe = ({ setSendQueryDialogAction }) => {
	const onClickOpenModal = () => {
		setSendQueryDialogAction(true);
	};

	return (
		<u>
			<b className={"open-send-query"} onClick={onClickOpenModal}>
				Contact me for pricing
			</b>
		</u>
	);
};

export default connect(
	(state) => ({
		sendQueryDialogState: getSendQueryDialogState(state),
	}),
	{ setSendQueryDialogAction }
)(StyledPricing);
