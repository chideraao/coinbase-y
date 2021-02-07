import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faChevronDown,
	faChevronLeft,
	faChevronRight,
	faCircleNotch,
	faInfoCircle,
	faSearch,
	faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./CSS/App.css";
import "./CSS/Utilities.css";
import About from "./Pages/About";
import Earn from "./Pages/Earn";
import { AboutProvider } from "./State/AboutContext";
import { EarnProvider } from "./State/EarnContext";
import Careers from "./Pages/Careers";
import Home from "./Pages/Home";
import { ReviewsProvider } from "./State/ReviewsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Press from "./Pages/Press";
import Learn from "./Pages/Learn";
import Prices from "./Pages/Prices";
import { GlobalProvider } from "./State/GlobalContext";
import { PricesProvider } from "./State/PricesContext";
import PriceItems from "./Pages/PriceItems";
import { PriceItemsProvider } from "./State/PriceItemsContext";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(
	faChevronLeft,
	faChevronRight,
	faCircleNotch,
	faSearch,
	faChevronDown,
	faStar,
	far,
	faInfoCircle
);

function App() {
	return (
		<Router>
			<GlobalProvider>
				<PricesProvider>
					<PriceItemsProvider>
						<EarnProvider>
							<AboutProvider>
								<ReviewsProvider>
									<div className="App">
										<Switch>
											<Route path="/" component={Home} exact />
											<Route path="/about" component={About} />
											<Route path="/careers" component={Careers} />
											<Route path="/earn" component={Earn} />
											<Route path="/press" component={Press} />
											<Route path="/learn" component={Learn} />
											<Route path="/prices" component={Prices} exact />
											<Route path="/prices/priceitems" component={PriceItems} />
										</Switch>
									</div>
								</ReviewsProvider>
							</AboutProvider>
						</EarnProvider>
					</PriceItemsProvider>
				</PricesProvider>
			</GlobalProvider>
		</Router>
	);
}

export default App;
