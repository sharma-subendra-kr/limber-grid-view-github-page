import React from "react";

const LGVContext = React.createContext();

export const lgv = { current: undefined };

export const LGVProvider = ({ lgv, children }) => {
	return <LGVContext.Provider value={lgv}>{children}</LGVContext.Provider>;
};

export const withLGV = (WrappedComponent) => {
	return function Component(props) {
		return (
			<LGVContext.Consumer>
				{(lgv) => <WrappedComponent lgv={lgv} {...props} />}
			</LGVContext.Consumer>
		);
	};
};
