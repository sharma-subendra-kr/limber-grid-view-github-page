import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const OrderNowModal = () => {
	return <Dialog open={true} onClose={}></Dialog>;
};

export default connect((state) => ({}), {})(OrderNowModal);
