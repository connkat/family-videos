import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

import "./filterbar.css";

export default function FilterBar({ filterValues, setFilterValues }) {
	const [year, setYear] = useState("");
	const [mainPerson, setMainPerson] = useState("");
	const [occasion, setOccasion] = useState("");
	// const [filterOpen, setFilterOpen] = useState(false);

	function handleChange(event) {
		let { name, value } = event.target;
		if (name === "year") {
			setYear(value);
		}
		if (name === "mainPerson") {
			setMainPerson(value);
		}
		if (name === "occasion") {
			setOccasion(value);
		}
	}

	function onSubmit(event) {
		event.preventDefault();
		setFilterValues({
			year: year,
			occasion: occasion,
			mainPerson: mainPerson,
		});

		return filterValues;
	}

	function deleteFilter() {
		setFilterValues({
			year: "",
			occasion: "",
			mainPerson: "",
		});

		return filterValues;
	}

	// function showMobileFilterBar(filterOpen) {
	// 	filterOpen ? setFilterOpen(false) : setFilterOpen(true);

	// 	return filterOpen;
	// }

	// useEffect(() => {
	// 	const setResponsiveness = () => {
	// 		return window.innerWidth < 600
	// 			? setFilterOpen((prevState) => ({ ...prevState, mobileView: true }))
	// 			: setFilterOpen((prevState) => ({ ...prevState, mobileView: false }));
	// 	};

	// 	setResponsiveness();

	// 	window.addEventListener("resize", () => setResponsiveness());

	// 	return () => {
	// 		window.removeEventListener("resize", () => setResponsiveness());
	// 	};
	// }, []);

	return (
		<form>
			<div className="filterBar">
				<div className="filterSelection">
					<select name="year" id="year" value={year} onChange={handleChange}>
						<option value="" defaultValue disabled hidden>
							Year
						</option>
						<option value="1983">1983</option>
						<option value="1984">1984</option>
						<option value="1985">1985</option>
						<option value="1986">1986</option>
						<option value="1987">1987</option>
						<option value="1988">1988</option>
						<option value="1989">1989</option>
						<option value="1990">1990</option>
						<option value="1991">1991</option>
						<option value="1992">1992</option>
						<option value="1993">1993</option>
						<option value={""}>None</option>
					</select>

					<select
						name="occasion"
						id="occasion"
						value={occasion}
						onChange={handleChange}
					>
						<option value="" defaultValue disabled hidden>
							Occasion
						</option>
						<option value="Birthday">Birthday</option>
						<option value="Christmas">Christmas</option>
						<option value="March Break">March Break</option>
						<option value="Halloween">Halloween</option>
						<option value="baseball">Baseball</option>
						<option value="Kindergarten Grad">Kindergarten Grad</option>
						<option value="News">News</option>
						<option value="First Steps">First Steps</option>
						<option value="MSM">MSM</option>
						<option value="Cameron Lake">Cameron Lake</option>
						<option value={""}>None</option>
					</select>

					<select
						name="mainPerson"
						id="mainPerson"
						value={mainPerson}
						onChange={handleChange}
					>
						<option value="" defaultValue disabled hidden>
							Main Person
						</option>
						<option value="Meaghan">Meaghan</option>
						<option value="Shelagh">Shealgh</option>
						<option value="John">John</option>
						<option value="Kate">Kate</option>
						<option value="Nancy">Nancy</option>
						<option value={""}>None</option>
					</select>
					<Tooltip title="Filter Results">
						<button onClick={onSubmit}>
							<SearchIcon />
						</button>
					</Tooltip>
					<Tooltip title="Clear Filter">
						<button onClick={deleteFilter}>
							<DeleteIcon />
						</button>
					</Tooltip>
				</div>
			</div>
		</form>
	);
}
