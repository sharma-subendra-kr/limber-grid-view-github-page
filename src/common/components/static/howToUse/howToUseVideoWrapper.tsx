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
				<video autoPlay loop muted playsInline>
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
	video {
		width: 100%;
		height: auto;
	}
`;

export default StyledHowToUseVideoWrapper;
