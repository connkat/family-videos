import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import FilterBar from "./components/FilterBar";

import data from "./data";

import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<FilterBar />
			<VideoTable rows={data} />
		</div>
	);
}

export default App;
