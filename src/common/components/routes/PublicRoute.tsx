import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAccessGranted } from "../../utils/authUtils";

export const PublicRoute = ({
	component: Component,
	redirectPath,
	path,
	reRenderOnSamePath,
	...args
}) => {
	return (
		<Route {...args} path={path}>
			{!isAccessGranted() ? (
				<Component {...args} key={reRenderOnSamePath && Date.now()} />
			) : (
				<Redirect to={redirectPath} />
			)}
		</Route>
	);
};
