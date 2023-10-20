import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import Header from "./components/Header";
import VideoTable from "./components/VideoTable";
import { FilterBar } from "./components/FilterBar";

import data from "./data";

import "./App.css";

function App() {
	const [guess, setGuess] = useState("");
	const [isVerified, setIsVerified] = useState(false);
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

	function checkPassword(e) {
		e.preventDefault();
		if (guess === process.env.REACT_APP_SITE_PASSWORD) {
			setIsVerified(true);

			Cookies.set("session", true, {
				expires: 1,
			});
		} else {
			alert("Sorry, that's not it");
		}
	}

	return (
		<div>
			<Header isVerified={isVerified} session={session} />
			{isVerified || session ? (
				<>
					<FilterBar
						filterValues={filterValues}
						setFilterValues={setFilterValues}
					/>
					<VideoTable rows={filteredData} />
				</>
			) : (
				<div className="password-protector">
					<form>
						<p>What's the secret password?</p>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => {
								setGuess(e.target.value.toLowerCase());
							}}
						/>
						<button onClick={(e) => checkPassword(e)}>submit</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default App;
