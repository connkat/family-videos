import { useState } from "react";

export default function FilterBar({ filterValues, setFilterValues }) {
	const [year, setYear] = useState("");
	const [mainPerson, setMainPerson] = useState("");
	const [occasion, setOccasion] = useState("");

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

	return (
		<form>
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
				<option value={null}>None</option>
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
				<option value="birthday">Birthday</option>
				<option value="christmas">Christmas</option>
				<option value="marchBreak">March Break</option>
				<option value="crawling">Crawling</option>
				<option value="halloween">Halloween</option>
				<option value="baseball">Baseball</option>
				<option value="kindergartenGrad">Kindergarten Grad</option>
				<option value="news">News</option>
				<option value="firstSteps">First Steps</option>
				<option value="msm">MSM</option>
				<option value="cameronLake">Cameron Lake</option>
				<option value={null}>None</option>
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
				<option value="meaghan">Meaghan</option>
				<option value="shealgh">Shealgh</option>
				<option value="john">John</option>
				<option value="kate">Kate</option>
				<option value="nancy">Nancy</option>
				<option value={null}>None</option>
			</select>
			<button onClick={onSubmit}>Search</button>
		</form>
	);
}
