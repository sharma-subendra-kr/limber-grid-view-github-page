import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

import Footer from "src/common/components/static/footer/footer";
import Header from "src/common/components/static/header/header";
import Drawer from "src/common/components/static/drawer/drawer";
import PageContainer from "src/common/components/static/pageContainer/pageContainer";
import SendQuery from "src/common/components/complex/sendQuery/sendQuery";
import {
	getSendQueryDialogState,
	setSendQueryDialogAction,
} from "src/common/components/complex/sendQuery/ducks";

const FAQ = ({ className, sendQueryDialogState, setSendQueryDialogAction }) => {
	const onClickOpenModal = () => {
		setSendQueryDialogAction(true);
	};

	const onCloseSendQuery = () => {};

	return (
		<div className={className}>
			<Header />
			<Drawer />
			<Footer />
			{sendQueryDialogState && <SendQuery onClose={onCloseSendQuery} />}
			<PageContainer>
				<Paper>
					<Typography variant="h4">FAQ</Typography>
					<br />
					<br />
					Coming soon...
					<br />
					<br />
					If you have any queries, then feel free to send a{" "}
					<u>
						<b className={"open-send-query"} onClick={onClickOpenModal}>
							message
						</b>
					</u>
					.
				</Paper>
			</PageContainer>
		</div>
	);
};

const StyledFAQ = styled(FAQ)`
	.open-send-query {
		color: blue;
		cursor: pointer;
	}
`;

export default connect(
	(state) => ({
		sendQueryDialogState: getSendQueryDialogState(state),
	}),
	{ setSendQueryDialogAction }
)(StyledFAQ);
