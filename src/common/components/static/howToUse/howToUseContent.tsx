import React from "react";
import styled from "styled-components";

import HowToUseVideoWrapper from "./howToUseVideoWrapper";
import { ORIGIN, VIDEO_CDN_ORIGIN } from "src/configs/origin";

const HowToUseContent = ({ className }) => {
	return (
		<div className={className}>
			<p>
				Captain Haddock: Blue blistering barnacles!!! What is this
				LimberGridView???
			</p>
			<p>
				Tintin: Oh! Captain. You must have seen my new dashboard! Quite
				intriguing isn't it Captain?
			</p>
			<p>
				Captain Haddock: Thundering typhoons! Does it look intriguing to you???
				I can't even use it!!!
			</p>
			<p>
				Tintin: There... There... Don't worry captain! I'll walk you though.
			</p>
			<HowToUseVideoWrapper video="resize_1.mp4" />
			<p>
				Tintin: Captain. You can resize any item from the bottom-right or the
				bottom-left corner. When you hover any item, the guides will become
				visible.
			</p>
			<p>Captain Haddock: I see...</p>
			<p>
				Tintin: Now Captain. When you click hold or touch hold and drag you can
				resize any item to any sizes. But the size must not greater than the
				viewport height and it must not be very small.
			</p>
			<p>Captain Haddock: Hmmm...</p>
			<p>
				Tintin: Also Captain. Notice the latch feature is on. When you try to
				resize any item, LimberGridView will try to match the top-right,
				bottom-right or bottom-left position of the nearest item.
			</p>
			<p>Captain Haddock: Cro-Magnon!!!</p>
			<HowToUseVideoWrapper video="move_1.mp4" />
			<p>
				Tintin: Captain. Click hold or tap hold the top of any item when you
				would like to move it.
			</p>
			<p>Captain Haddock: Musical morons!!!</p>
			<p>
				Tintin: Captain. The latch feature also works when you move an item.
				LimberGridView will try to match the top-left, top-right or the
				bottom-left position of nearest item.
			</p>
			<HowToUseVideoWrapper video="move_toggle_box_1.mp4" />
			<HowToUseVideoWrapper video="no_latch_move_1.mp4" />
			<HowToUseVideoWrapper video="swap_1" />
			<HowToUseVideoWrapper video="multi_swap_1.mp4" />
			<HowToUseVideoWrapper video="push_left_right_1.mp4" />
			<HowToUseVideoWrapper video="resize_and_swap_1.mp4" />
			<HowToUseVideoWrapper video="add_all_1.mp4" />
			<HowToUseVideoWrapper video="cut_space_1.mp4" />
		</div>
	);
};

const StyledHowToUseContent = styled(HowToUseContent)`
	* {
		font-family: "Comic Sans MS";
		color: black;
	}
`;

export default StyledHowToUseContent;
