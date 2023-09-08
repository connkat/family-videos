import { useState, useEffect } from "react";
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

	const [filteredData, setFilteredData] = useState([]);
	useEffect(() => {
		setFilteredData(
			data.filter((row) => {
				return (
					(!filterValues.year || filterValues.year === row.year) &&
					(!filterValues.occasion || filterValues.occasion === row.occasion) &&
					(!filterValues.mainPerson ||
						filterValues.mainPerson === row.mainPerson)
				);
			})
		);
	}, [filterValues]);

	return (
		<div>
			<Header />
			<FilterBar
				filterValues={filterValues}
				setFilterValues={setFilterValues}
			/>
			<VideoTable data={filteredData} />
		</div>
	);
}

export default App;
