import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faChevronLeft,
	faChevronRight,
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

library.add(faChevronLeft, faChevronRight);

function App() {
	return (
		<Router>
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
							</Switch>
						</div>
					</ReviewsProvider>
				</AboutProvider>
			</EarnProvider>
		</Router>
	);
}

export default App;
