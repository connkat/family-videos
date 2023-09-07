import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import FilterBar from "./components/FilterBar";

import data from "./data";

import "./App.css";

function App() {
	

	function videoList() {
		return data;
	}

	return (
		<div>
			<Header />
			<FilterBar />
			<VideoTable data={videoList()} />
		</div>
	);
}

export default App;
