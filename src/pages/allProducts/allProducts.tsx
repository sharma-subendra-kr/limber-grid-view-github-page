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
									It's not Free Software.
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
