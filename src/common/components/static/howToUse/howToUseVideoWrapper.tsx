import React from "react";

import styled from "styled-components";

import { VIDEO_CDN_ORIGIN } from "src/configs/origin";

let BASE;
const protocol = "http";
const PORT = 3001;

if (process.env.NODE_ENV === "development") {
	BASE =
		protocol +
		"://" +
		window.location.hostname +
		":" +
		PORT +
		"/assets/videos/";
} else {
	BASE = VIDEO_CDN_ORIGIN;
}

const HowToUseVideoWrapper = ({ className, video }) => {
	return (
		<div>
			<br />
			<div className={className}>
				<video width="825" height="432" autoPlay loop muted>
					<source src={`${BASE}${video}`} type="video/mp4" />
				</video>
			</div>
			<br />
		</div>
	);
};

const StyledHowToUseVideoWrapper = styled(HowToUseVideoWrapper)`
	display: flex;
	justify-content: center;
`;

export default StyledHowToUseVideoWrapper;
