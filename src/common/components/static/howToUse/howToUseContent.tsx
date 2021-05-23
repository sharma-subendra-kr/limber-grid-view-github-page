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
			<p>Captain Haddock: Nitwitted ninepins!!! ... ... ...</p>
			<p>
				Captain Haddock: Fake sea-dogs!!! Why is this nonsensical box appearing
				like Sea-lice!!!
			</p>
			<HowToUseVideoWrapper video="move_toggle_box_1.mp4" />
			<p>
				Tintin: Captain. Oh that Captain. It's to toogle whether you want to
				place your item on the item you hovered over or to latch your item to
				the the nearest item. Just move your mouse or your finger over the box
				to toggle, and when your done, release your mouse button or release your
				finger from the screen.
			</p>
			<HowToUseVideoWrapper video="no_latch_move_1.mp4" />
			<p>
				Captain Haddock: Traitors!!! Freshwater pirate!!! Bloodsuckers!!!
				Thieves!!!
			</p>
			<p>Tintin: What's the matter Captain.</p>
			<p>
				Captain Haddock: I can't latch this Sea lion!!! to this Sea gherkin!!!
			</p>
			<p>
				Tintin: Look at the toolbar Captain, you have disabled the latch
				feature. Captain use the latch feature 90% percent of the time. This
				will arrange your items properly. Sometimes it will not give you your
				desired result but it works 85% of the time.
			</p>
			<p>Captain Haddock: Ten thousand thundering typhoons!!!</p>
			<HowToUseVideoWrapper video="swap_1" />
			<p>
				Tintin: Captain you can also swap items. Just try to place your item on
				top of the item you want to swap to.
			</p>
			<HowToUseVideoWrapper video="multi_swap_1.mp4" />
			<p>
				Tintin: You can also swap multiple items. Just make sure they fit into
				spaces. Even if they don't seem to fit, LimberGridView will shrink the
				items that it's trying to auto arrange up to 10%.
			</p>
			<HowToUseVideoWrapper video="resize_and_swap_1.mp4" />
			<p>
				Captain Haddock: Baboons!!! What about these two items, they are not
				similar in sizes???
			</p>
			<p>
				Tintin: In that case Captain try to reduce the sizes of the items you
				want to swap. LimberGridView will swap their positions then you can
				resize them.
			</p>
			<HowToUseVideoWrapper video="push_left_right_1.mp4" />
			<p>
				Tintin: Captain you can even push items to the right or left when you
				try to resize.
			</p>
			<HowToUseVideoWrapper video="add_all_1.mp4" />
			<p>Captain Haddock: What if I want to add items?</p>
			<p>
				Tintin: Select the add option from toolbar and just drag your mouse or
				finger over the screen to draw an item Captain.
			</p>
			<HowToUseVideoWrapper video="cut_space_1.mp4" />
			<p>Captain Haddock: Hmmm...</p>
			<p>
				Captain Haddock: Billions of bilious blue blistering barnacles!!! How do
				I get rid of this empty space???
			</p>
			<p>
				Tintin: Just like how you added an item captain, select the cut space
				tool and drag your mouse or your finger.
			</p>
			<p>
				Captain Haddock: Parasites!!! I'll walk the plank before I ever use this
				again!!!
			</p>
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
