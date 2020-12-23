import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./CSS/App.css";
import "./CSS/Utilities.css";
import Careers from "./Pages/Careers";
import Home from "./Pages/Home";
import { ReviewsProvider } from "./State/ReviewsContext";

library.add(faChevronLeft, faChevronRight);

function App() {
	return (
		<ReviewsProvider>
			<div className="App">
				<Home />
				<Careers />
			</div>
		</ReviewsProvider>
	);
}

export default App;
