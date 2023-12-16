import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

import HowToUseVideoWrapper from "./howToUseVideoWrapper";
import { ORIGIN, VIDEO_CDN_ORIGIN } from "src/configs/origin";

const HowToUseContent = ({ className }) => {
	return (
		<div className={className}>
			<HowToUseVideoWrapper video="resize_1.mp4" />
			<Box px={3}>
				<p>
					You can resize any item from the bottom-right or the bottom-left
					corner. When you hover over an item, the guides will become visible.
				</p>
				<br />
				<p>
					When you click-hold or touch-hold and drag, you can resize any item to
					any size. But the height can't be greater than the viewport height.
					Also, the dimensions can't be tiny.
				</p>
				<br />
				<p>
					Notice the latch feature is on. When you try to resize any item,
					LimberGridView will try to latch the bottom-right corner to the
					bottom-left and top-right corners or left and top edge. This behavior
					is similar when you try to resize from the bottom-left corner.
				</p>
			</Box>
			<HowToUseVideoWrapper video="move_2.mp4" />
			<Box px={3}>
				<p>
					Click-hold or tap-hold the top of any item when you like to move it.
				</p>
				<br />
				<p>
					The latch feature also works when you try to move an item.
					LimberGridView will try to match all four corners to the most likely
					corners. For example, it will try to latch the top-left corner to the
					adjacent top-right and bottom-left corner or right and bottom edge.
				</p>
				<br />
				<p>Why is this dotted box appearing?</p>
			</Box>
			<HowToUseVideoWrapper video="overlap_1.mp4" />
			<Box px={3}>
				<p>
					It's to tell you that LimberGridView is trying to place your item
					where the top-left corner of the overlapped card is present. It will
					become visible only when the top-left corner of your selected item is
					overlapping any other card. For all different corners, this won't
					work.
				</p>
			</Box>
			<HowToUseVideoWrapper video="no_latch_move_1.mp4" />
			<Box px={3}>
				<p>Can't latch items?</p>
				<br />
				<p>
					Look at the toolbar, you might have disabled the latch feature. Use
					the latch feature 90% percent of the time. It will arrange your items
					properly. Sometimes it will not give you your desired result but, it
					works 85% of the time.
				</p>
			</Box>
			<HowToUseVideoWrapper video="swap_1.mp4" />
			<Box px={3}>
				<p>
					You can also swap items. Just try to place your selected item, on top
					of the other item you want to flip positions.
				</p>
			</Box>
			<HowToUseVideoWrapper video="multi_swap_1.mp4" />
			<Box px={3}>
				<p>
					You can also swap multiple items. Just make sure they fit into spaces.
					Even if they don't match, LimberGridView will shrink the items it's
					trying to arrange by up to 10%.
				</p>
			</Box>
			<HowToUseVideoWrapper video="resize_and_swap_1.mp4" />
			<Box px={3}>
				<p>What about these two items, they are not similar in size ???</p>
				<br />
				<p>
					In that case, try to reduce the sizes of the items you want to swap.
					LimberGridView will flip their positions. Then you can resize them.
				</p>
			</Box>
			<HowToUseVideoWrapper video="push_left_right_1.mp4" />
			<Box px={3}>
				<p>
					You can even push other items to the right, left, or bottom when you
					try to resize an item.
				</p>
			</Box>
			<HowToUseVideoWrapper video="add_all_1.mp4" />
			<Box px={3}>
				<p>What if I want to add items?</p>
				<br />
				<p>
					Select the add option from the toolbar and drag your mouse or finger
					over the screen to draw an item.
				</p>
			</Box>
			<HowToUseVideoWrapper video="cut_space_1.mp4" />
			<Box px={3}>
				<p>How do I get rid of this space ???</p>
				<br />
				<p>
					Like how you added an item, select the cut space tool and drag your
					mouse or finger.
				</p>
			</Box>
			<HowToUseVideoWrapper video="multi_select_1.mp4" />
			<Box px={3}>
				<p>This is slow! I want to do things fast!</p>
				<br />
				<p>
					You can use the multi-select tool to group multiple items by dragging
					over items you want to select. Then you can resize or move all the
					selected items at once. The groups behave as a single item. You can
					make up to two groups.
				</p>
				<br />
				<p>
					You can learn to use LimberGridView by clicking on "How to use" on the
					header or the sidebar. Or you can follow the link{" "}
					<a target="_blank" href="https://limber.in/LimberGridView/howToUse">
						https://limber.in/LimberGridView/howToUse
					</a>
					.
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
