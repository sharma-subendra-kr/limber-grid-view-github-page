import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";

import { customHistory } from "../config";
import { PrivateRoute } from "../../common/components/routes/PrivateRoute";
import { PublicRoute } from "../../common/components/routes/PublicRoute";

import Home from "../../pages/home/home";
import AboutTimeComplexity from "../../pages/aboutTimeComplexity/aboutTimeComplexity";
import AllProducts from "../../pages/allProducts/allProducts";
import DevSupport from "../../pages/devSupport/devSupport";
import FAQ from "../../pages/faq/faq";
import Docs from "../../pages/docs/docs";
import HowItWorks from "../../pages/howItWorks/howItWorks";
import InfoOnCommercialLicense from "../../pages/infoOnCommercialLicense/infoOnCommercialLicense";
import Limitations from "../../pages/limitations/limitations";
import BrowserSupport from "../../pages/browserSupport/browserSupport";
import Pricing from "../../pages/pricing/pricing";
import Privacy from "../../pages/privacy/privacy";
import RefundPolicy from "../../pages/refundPolicy/refundPolicy";
import HowToUse from "../../pages/howToUse/howToUse";
import Development from "../../pages/development/development";

const Routes = () => {
	return (
		<Router history={customHistory}>
			<Switch>
				<PublicRoute
					exact
					path="/LimberGridView/aboutTimeComplexity"
					component={AboutTimeComplexity}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/allProducts"
					component={AllProducts}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/devSupport"
					component={DevSupport}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/faq"
					component={FAQ}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/contactMe"
					component={FAQ}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/howItWorks"
					component={HowItWorks}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/infoOnCommercialLicense"
					component={InfoOnCommercialLicense}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/limitations"
					component={Limitations}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/browserSupport"
					component={BrowserSupport}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/pricing"
					component={Pricing}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/privacy"
					component={Privacy}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					exact
					path="/LimberGridView/refundPolicy"
					component={RefundPolicy}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					path="/LimberGridView/docs"
					component={Docs}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					path="/LimberGridView/buy"
					component={Home}
					redirectPath="/LimberGridView"
					reRenderOnSamePath={true}
				/>
				<PublicRoute
					path="/LimberGridView/howToUse"
					component={HowToUse}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					path="/LimberGridView/dev"
					component={Development}
					redirectPath="/LimberGridView"
				/>
				<PublicRoute
					path="/LimberGridView"
					component={Home}
					redirectPath="/LimberGridView"
				/>
				<Redirect to="/LimberGridView" />
			</Switch>
		</Router>
	);
};

export default Routes;
