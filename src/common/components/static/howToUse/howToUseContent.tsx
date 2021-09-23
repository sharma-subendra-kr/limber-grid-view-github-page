import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

import HowToUseVideoWrapper from "./howToUseVideoWrapper";
import { ORIGIN, VIDEO_CDN_ORIGIN } from "src/configs/origin";

const HowToUseContent = ({ className }) => {
	return (
		<div className={className}>
			<Box px={3}>
				<p>
					<b>Captain, Haddock:</b> Blue blistering barnacles !!! What is this
					LimberGridView ???
				</p>
				<br />
				<p>
					<b>Tintin:</b> Oh! Captain. You must have seen my new dashboard! Quite
					intriguing, isn't it, Captain?
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Thundering typhoons! Does it look intriguing
					to you ??? I can't even use it !!!
				</p>
				<br />
				<p>
					<b>Tintin:</b> There !... There !... Don't worry, Captain! I'll walk
					you through it.
				</p>
			</Box>
			<HowToUseVideoWrapper video="resize_1.mp4" />
			<Box px={3}>
				<p>
					<b>Tintin:</b> Captain. You can resize any item from the bottom-right
					or the bottom-left corner. When you hover over an item, the guides
					will become visible.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> I see Landlubber !!!
				</p>
				<br />
				<p>
					<b>Tintin:</b> Now, Captain. When you click-hold or touch-hold and
					drag, you can resize any item to any size. But the height can't be
					greater than the viewport height. Also, the dimensions can't be tiny.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Hmmm ?...
				</p>
				<br />
				<p>
					<b>Tintin:</b> Notice the latch feature is on. When you try to resize
					any item, LimberGridView will try to latch on to the top-right,
					bottom-right, or bottom-left position of the nearest other items.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Cro-Magnon !!!
				</p>
			</Box>
			<HowToUseVideoWrapper video="move_1.mp4" />
			<Box px={3}>
				<p>
					<b>Tintin:</b> Captain. Click-hold or tap-hold the top of any item
					when you like to move it.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Musical morons !!!
				</p>
				<br />
				<p>
					<b>Tintin:</b> Captain. The latch feature also works when you move an
					item. LimberGridView will try to match the top-left, top-right, or
					bottom-left position of the nearest other items.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Nitwitted ninepins !!!... !... !...
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Fake sea dogs !!! Why is this nonsensical box
					appearing like Sea-lice !!!
				</p>
			</Box>
			<HowToUseVideoWrapper video="move_toggle_box_1.mp4" />
			<Box px={3}>
				<p>
					<b>Tintin:</b> Captain. Oh, that Captain. It's to toggle between two
					options, whether you like to place your selection where the item
					you're overlapping exists or latch on your selected item to the
					nearest other items. Just move your mouse or your finger over the box
					to toggle, and when done, release your mouse button or finger.
				</p>
			</Box>
			<HowToUseVideoWrapper video="no_latch_move_1.mp4" />
			<Box px={3}>
				<p>
					<b>Captain, Haddock:</b> Hmmm ?... What does this do ???
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Traitors !!! Freshwater pirate !!!
					Bloodsuckers !!! Thieves !!!
				</p>
				<br />
				<p>
					<b>Tintin:</b> What's the matter, Captain?
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> I can't latch this Sea gherkin to this
					Sealion !!!
				</p>
				<br />
				<p>
					<b>Tintin:</b> Look at the toolbar Captain, you have disabled the
					latch feature. Captain, use the latch feature 90% percent of the time.
					It will arrange your items properly. Sometimes it will not give you
					your desired result but, it works 85% of the time.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Ten thousand thundering typhoons !!!
				</p>
			</Box>
			<HowToUseVideoWrapper video="swap_1.mp4" />
			<Box px={3}>
				<p>
					<b>Tintin:</b> Captain, you can also swap items. Just try to place
					your selected item, on top of the other item you want to flip
					positions.
				</p>
			</Box>
			<HowToUseVideoWrapper video="multi_swap_1.mp4" />
			<Box px={3}>
				<p>
					<b>Tintin:</b> You can also swap multiple items. Just make sure they
					fit into spaces. Even if they don't match, LimberGridView will shrink
					the items it's trying to arrange by up to 10%.
				</p>
			</Box>
			<HowToUseVideoWrapper video="resize_and_swap_1.mp4" />
			<Box px={3}>
				<p>
					<b>Captain, Haddock:</b> Baboons !!! What about these two items, they
					are not similar in size ???
				</p>
				<br />
				<p>
					<b>Tintin:</b> In that case, Captain, try to reduce the sizes of the
					items you want to swap. LimberGridView will flip their positions. Then
					you can resize them.
				</p>
			</Box>
			<HowToUseVideoWrapper video="push_left_right_1.mp4" />
			<Box px={3}>
				<p>
					<b>Tintin:</b> Captain, you can even push other items to the right,
					left, or bottom when you try to resize an item.
				</p>
			</Box>
			<HowToUseVideoWrapper video="add_all_1.mp4" />
			<Box px={3}>
				<p>
					<b>Captain, Haddock:</b> What if I want to add items?
				</p>
				<br />
				<p>
					<b>Tintin:</b> Select the add option from the toolbar and drag your
					mouse or finger over the screen to draw an item, Captain.
				</p>
			</Box>
			<HowToUseVideoWrapper video="cut_space_1.mp4" />
			<Box px={3}>
				<p>
					<b>Captain, Haddock:</b> Hmmm !...
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Billions of bilious blue blistering barnacles
					!!! How do I get rid of this space ???
				</p>
				<br />
				<p>
					<b>Tintin:</b> Like how you added an item, Captain, select the cut
					space tool and drag your mouse or finger.
				</p>
				<br />
				<p>
					<b>Tintin:</b> You can learn to use LimberGridView by clicking on "How
					to use" on the header or the sidebar. Or you can follow the link{" "}
					<a target="_blank" href="https://limber.in/LimberGridView/howToUse">
						https://limber.in/LimberGridView/howToUse
					</a>
					.
				</p>
				<br />
				<p>
					<b>Captain, Haddock:</b> Parasites !!! I'll walk the plank before I
					ever use this again !!!
				</p>
			</Box>
		</div>
	);
};

const StyledHowToUseContent = styled(HowToUseContent)`
	* {
		font-family: "Comic Sans MS";
		color: black;
	}
	a {
		word-break: break-all;
	}
	@media only screen and (max-width: 1023px) and (min-width: 1px) {
	}
`;

export default StyledHowToUseContent;
