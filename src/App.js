import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./CSS/App.css";
import "./CSS/Utilities.css";
// import About from "./Pages/About";
import Earn from "./Pages/Earn";
import { AboutProvider } from "./State/AboutContext";
// import Careers from "./Pages/Careers";
// import Home from "./Pages/Home";
import { ReviewsProvider } from "./State/ReviewsContext";

library.add(faChevronLeft, faChevronRight);

function App() {
	return (
		<AboutProvider>
			<ReviewsProvider>
				<div className="App">
					{/* <Home />
					<Careers />
					<About /> */}
					<Earn />
				</div>
			</ReviewsProvider>
		</AboutProvider>
	);
}

export default App;
