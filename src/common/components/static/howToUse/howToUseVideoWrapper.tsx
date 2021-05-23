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
		<div className={className}>
			<br />
			<video width="912" height="477" autoPlay loop muted>
				<source src={`${BASE}${video}`} type="video/mp4" />
			</video>
			<br />
		</div>
	);
};

const StyledHowToUseVideoWrapper = styled(HowToUseVideoWrapper)`
	* {
		font-family: "Comic Sans MS";
	}
`;

export default StyledHowToUseVideoWrapper;
