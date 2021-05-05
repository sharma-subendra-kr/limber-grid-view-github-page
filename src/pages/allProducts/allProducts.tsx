import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Alert from "@material-ui/lab/Alert";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";

const AllProducts = (props) => {
	return (
		<>
			<Header />
			<Drawer />
			<Footer />
		</>
	);
};

export default connect((state) => ({}), {})(AllProducts);
