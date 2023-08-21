import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";

const SiteMap = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<Paper>
					<Typography variant="h4">Site Map</Typography>
					<br />
					<br />
					<Typography variant="h6">Demo</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView">Try LimberGridView</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/howToUse">How to use</Link>
					</Typography>
					<br />
					<Typography variant="h6">Technical</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/docs">Read the docs</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/devSupport">Developer Support</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/aboutTimeComplexity">
							About time complexity
						</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/limitations">Limitations</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/browserSupport">Browser Support</Link>
					</Typography>
					<br />
					<Typography variant="h6">Sales</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/buy">Get proprietary License</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/pricing">Pricing</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/faq">FAQ</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/contactMe">Contact</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/infoOnCommercialLicense">
							Info on commercial license
						</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/refundPolicy">Refund Policy</Link>
					</Typography>
					<br />
					<Typography variant="body2">
						<Link to="/LimberGridView/allProducts">All Products</Link>
					</Typography>
					<br />
					<Typography variant="h6">Others</Typography>
					<Typography variant="body2">
						<Link to="/LimberGridView/privacy">Privacy</Link>
					</Typography>
					<br />
				</Paper>
			</PageContainer>
		</>
	);
};

export default connect((state) => ({}), {})(SiteMap);
