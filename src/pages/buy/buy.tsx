import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import OrderNow from "src/common/components/complex/orderNow/orderNow";
import { setOrderNowDialogAction } from "src/common/components/complex/orderNow/ducks";

const Buy = ({ className, setOrderNowDialogAction }) => {
	useEffect(() => {
		setOrderNowDialogAction(true);
	}, []);

	return (
		<>
			<Header />
			<Drawer />
			<Footer />
			<PageContainer>
				<OrderNow />
			</PageContainer>
		</>
	);
};

const StyledBuy = styled(Buy)``;

export default connect((state) => ({}), { setOrderNowDialogAction })(StyledBuy);
