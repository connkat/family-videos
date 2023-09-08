import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import FilterBar from "./components/FilterBar";

import data from "./data";

import "./App.css";

function App() {
	const [guess, setGuess] = useState("");
	const [isVerified, setIsVerified] = useState(false);

	function checkPassword(loggedIn) {
		if (guess === process.env.REACT_APP_SITE_PASSWORD) {
			setIsVerified(true);

			Cookies.set("session", true, {
				expires: 1,
			});
		} else {
			alert("Sorry, that's not it");
		}
	}

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

	const session = Cookies.get("session");

	return (
		<div>
			{isVerified || session ? (
				<>
					<Header />
					<FilterBar
						filterValues={filterValues}
						setFilterValues={setFilterValues}
					/>
					<VideoTable rows={filteredData} />
				</>
			) : (
				<form>
					<input
						id="password"
						name="password"
						onChange={(e) => {
							setGuess(e.target.value);
						}}
					/>
					<button onClick={checkPassword}>open sesame</button>
				</form>
			)}
		</div>
	);
}

export default App;
