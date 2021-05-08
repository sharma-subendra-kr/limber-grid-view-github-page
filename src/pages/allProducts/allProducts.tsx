import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const AllProducts = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Typography variant="h4">All Products</Typography>
				<Grid container spacing={2}>
					<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
						<Card>
							<CardContent>
								<Typography variant="h5">LimberGridView</Typography>
								<br />
								<br />
								<Typography color="textSecondary">
									LimberGridView, a powerful JavaScript Library using
									Computational Geometry to render movable, dynamically
									resizable, and auto-arranging grids. Written in raw
									JavaScript, it can be plugged into most frameworks, plus it
									has a plugin for React applications. It gives users the most
									optimal arrangements using its highly efficient and fine-tuned
									algorithm.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
						<Card>
							<CardContent>
								<Typography variant="h5">limber_____.com</Typography>
								<br />
								<br />
								<Typography color="textSecondary">
									It is a browser-based application for one of your most common
									daily tasks and aimed to reduce the carbon footprint. It's
									aimed at everyone whether a 13-year-old kid or a 90-year-old
									nanny.
									<br />
									<br />
									It's not Free Software, but it will be free of cost to use
									with all the features except cloud support because it doesn't
									use any backend server to provide its service. Users can
									always download their data on a flash drive. It'll become Free
									Software once or if I make any money out of it. It's more
									difficult to build than LimberGridView, which was a
									two-and-a-half-year journey just to release the beta version
									with all the features.
									<br />
									<br />I don't believe in the current startup culture and which
									is to grab a bucket load of money from venture capitalists
									that you don't deserve. Venture capitalists hinder people from
									implementing their ideas. They don't understand the complexity
									of research as they only want a product out to sell. It's a 5+
									year plan before it's even shipped. I can't even guarantee
									whether it will be shipped. The name of the application is not
									disclosed because of this reason. Your purchase helps the
									development process. I don't have the patience to convince
									venture capitalists to give me money. Neither do I have any
									money to hire more people, nor do I have the tolerance to look
									at other people's code or deal with them, so I'll be building
									it on my own.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</PageContainer>
		</>
	);
};

const StyledAllProducts = styled(AllProducts)``;

export default connect((state) => ({}), {})(StyledAllProducts);
