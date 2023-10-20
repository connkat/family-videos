import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

import MobileDrawer from "./MobileDrawer";
import "./filterbar.css";

export default function FilterBar({ filterValues, setFilterValues }) {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<form>
			{isTabletOrMobile ? (
				<div className="mobileView">
					<MobileDrawer
						filterValues={filterValues}
						setFilterValues={setFilterValues}
						// filterUpdated={filterUpdated}
					/>
				</div>
			) : (
				<FilterMenu
					filterValues={filterValues}
					setFilterValues={setFilterValues}
					// setFilterUpdated={setFilterUpdated}
				/>
			)}
		</form>
	);
}

function FilterMenu({ filterValues, setFilterValues }) {
	const [year, setYear] = useState("");
	const [mainPerson, setMainPerson] = useState("");
	const [occasion, setOccasion] = useState("");
	const [filterUpdated, setFilterUpdated] = useState(false);

	function onSubmit(event) {
		event.preventDefault();
		setFilterValues({
			year: year,
			occasion: occasion,
			mainPerson: mainPerson,
		});

		setFilterUpdated(true);

		return filterValues;
	}

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

	function deleteFilter() {
		setFilterValues({
			year: "",
			occasion: "",
			mainPerson: "",
		});

		return filterValues;
	}

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

export { FilterBar, FilterMenu };
