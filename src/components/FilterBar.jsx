import React, { useState } from "react";

export default function FilterBar() {
	const [filterValues, setFilterValues] = useState({
		year: undefined,
		event: undefined,
		mainPerson: undefined,
	});

	function handleChange(fieldName, value) {
		setFilterValues({
			...filterValues,
			[fieldName]: value,
		});
	}

	function handleSubmit() {
		console.log("submit");
	}

	return (
		<form>
			<select
				name="year"
				id="year"
				placeholder="Year"
				onChange={(value) => {
					handleChange("year", value);
				}}
				value={filterValues.year}
				defaultValue={null}
			>
				<option value={null} disabled selected hidden>
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
				<option value="1911">1911</option>
				<option value="1992">1992</option>
				<option value="1993">1993</option>
				<option value={null}>None</option>
			</select>

			<select
				name="event"
				id="event"
				placeholder="Event"
				onChange={(value) => {
					handleChange("event", value);
				}}
				value={filterValues.event}
				defaultValue={null}
			>
				<option value={null} disabled selected hidden>
					Event
				</option>
				<option value="birthday">Birthday</option>
				<option value="christmas">Christmas</option>
				<option value="march_break">March Break</option>
				<option value="crawling">Crawling</option>
				<option value="halloween">Halloween</option>
				<option value="baseball">Baseball</option>
				<option value="kindergarten">Kindergarten Grad</option>
				<option value="news">News</option>
				<option value="steps">First Steps</option>
				<option value="msm">MSM</option>
				<option value="cameron">Cameron Lake</option>
				<option value={null}>None</option>
			</select>

			<select
				name="mainPerson"
				id="mainPerson"
				placeholder="Main Person"
				onChange={(value) => {
					handleChange("mainPerson", value);
				}}
				value={filterValues.event}
				defaultValue={null}
			>
				<option disabled selected hidden value={null}>
					Main Person
				</option>
				<option value="meaghan">Meaghan</option>
				<option value="shealgh">Shealgh</option>
				<option value="john">John</option>
				<option value="kate">Kate</option>
				<option value="nancy">Nancy</option>
				<option value={null}>None</option>
			</select>
			<button onSubmit={handleSubmit}>Search</button>
		</form>
	);
}
