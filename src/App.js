import { useState } from "react";
import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import FilterBar from "./components/FilterBar";

import data from "./data";

import "./App.css";

function App() {
	const [filterValues, setFilterValues] = useState({
		year: "",
		occasion: "",
		mainPerson: "",
	});

	// const [filteredData, setFilteredData] = useState([]);

	function createList(data) {
		let list = data;
		let newList = [];

		if (filterValues.year) {
			const newYear = list.filter((row) => row.year === filterValues.year);

			newList.push(...newYear);
		}
		if (filterValues.occasion) {
			let newOccasion = list.filter(
				(row) => row.occasion === filterValues.occasion
			);
			newList.push(...newOccasion);
		}
		if (filterValues.mainPerson) {
			console.log(filterValues.mainPerson);
			let newMainPerson = list.filter(
				(row) => row.mainPerson === filterValues.mainPerson
			);
			newList.push(...newMainPerson);
		}

		if (newList.length > 0) {
			return [...new Set(newList)];
		} else {
			return list;
		}
	}

	const filtered = createList(data);

	return (
		<div>
			<Header />
			<FilterBar
				filterValues={filterValues}
				setFilterValues={setFilterValues}
			/>
			<VideoTable data={filtered} />
		</div>
	);
}

export default App;
