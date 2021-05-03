import React, { useEffect } from "react";
import { connect } from "react-redux";

import LgvCustomizedView from "../lgvCustomizedView/lgvCustomizedView";
import LgvDefaultView from "../lgvDefaultView/lgvDefaultView";

// const options = {
//   el: undefined,
//   editable: true,
//   gridData: {},
//   callbacks: {
//     renderContent: renderContent,
//     renderComplete: renderComplete,
//     resizeComplete: resizeComplete,
//     moveComplete: moveComplete,
//     addComplete: addComplete,
//     removeComplete: removeComplete,
//   },
//   positionData: [
//     {
//       x: 430,
//       y: 630,
//       width: 200,
//       height: 250,
//     },
//   ],
// };

const LgvWrapper = (props) => {
	return (
		<div className="lgv-container">
			{view === "customized" ? (
				<LgvCustomizedView options={options} />
			) : (
				<LgvDefaultView />
			)}
		</div>
	);
};

export default LgvWrapper;
