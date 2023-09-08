// import { useState } from "react";
import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import FilterBar from "./components/FilterBar";
import { useState } from "react";

import data from "./data";

import "./App.css";

function App() {
	const [filterValues, setFilterValues] = useState({
		year: "",
		occasion: "",
		mainPerson: "",
	});

	// function videoList() {
	// 	let filtered = data;

	// 	if (filterValues.year) {
	// 		filtered = data.filter((row) => {
	// 			return row.year.includes(filterValues.year);
	// 		});
	// 	}

	// if (filterValues.mainPerson) {
	// 	filtered = data.filter((row) => {
	// 		return row.mainPerson.includes(filterValues.mainPerson);
	// 	});
	// }
	// 	return filtered;
	// }

	// console.log("data: ", filterValues);

	return (
		<div>
			<Header />
			<FilterBar
				filterValues={filterValues}
				setFilterValues={setFilterValues}
			/>
			<VideoTable data={data} />
		</div>
	);
}

export default App;
