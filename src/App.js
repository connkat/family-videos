import { useState } from "react";
import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import FilterBar from "./components/FilterBar";

import data from "./data";

import "./App.css";

function App() {
	const [filterValues, setFilterValues] = useState({
		year: undefined,
		event: undefined,
		mainPerson: undefined,
	});

	function videoList() {
		let filtered = data;

		if (filterValues.year) {
			filtered = data.filter((row) => {
				return row.year.includes(filterValues.year);
			});
		}

		// if (filterValues.mainPerson) {
		// 	filtered = data.filter((row) => {
		// 		return row.mainPerson.includes(filterValues.mainPerson);
		// 	});
		// }
		return filtered;
	}

	return (
		<div>
			<Header />
			<FilterBar
				filterValues={filterValues}
				setFilterValues={setFilterValues}
			/>
			<VideoTable data={videoList()} />
		</div>
	);
}

export default App;
