import "./CSS/App.css";
import "./CSS/Utilities.css";
import Careers from "./Pages/Careers";
import { ReviewsProvider } from "./State/ReviewsContext";

function App() {
	return (
		<ReviewsProvider>
			<div className="App">
				<Careers />
			</div>
		</ReviewsProvider>
	);
}

export default App;
