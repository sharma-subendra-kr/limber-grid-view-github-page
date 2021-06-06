import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PageContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

const StyledPageContainer = styled(PageContainer)`
	height: calc(100% - 50px - 20px);
	overflow: auto;
	padding: 16px;
	> div {
		padding: 16px;
	}
`;

export default StyledPageContainer;
