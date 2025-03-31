import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
					<div>
						If you have any queries, then feel free to send a{" "}
						<u>
							<b className={"open-send-query"} onClick={onClickOpenModal}>
								message
							</b>
						</u>
						.
					</div>
					<br />
					<br />
					<Accordion defaultExpanded={true}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Is there a free version?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								No, there is no free version. Potential customers can try out a
								old and unstable version before making a purchase. This version
								is not production ready and is riddled with bugs which are fixed
								in new releases. You can install it from npm store. Documentaion
								is also provided for this version. It's APIs are also not up to
								date with the latest stable version. You can try the latest
								version via this website.
								<br />
								<br />
								Docs:{"  "}
								<br />
								<Link to="/LimberGridView/docs/v1_0_0-beta_14">
									v1.0.0-beta.14
								</Link>
								<br />
								<br />
								Install:{"  "}
								<Typography variant="body2">
									npm install @sharma-subendra-kr/limber-grid-view
								</Typography>
							</Typography>
						</AccordionDetails>
					</Accordion>
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
