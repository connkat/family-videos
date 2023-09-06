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
			<input
				type="number"
				placeholder="Year"
				value={filterValues.year}
				onChange={(value) => {
					handleChange("code", value);
				}}
			/>

			<select
				name="event"
				id="event"
				placeholder="Event"
				onChange={(value) => {
					handleChange("code", value);
				}}
				value={filterValues.event}
				defaultValue={null}
			>
				<option value={null}>Event</option>
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
			</select>

			<input
				type="text"
				placeholder="Main Person"
				value={filterValues.mainPerson}
				onChange={(value) => {
					handleChange("code", value);
				}}
			/>
			<button onSubmit={handleSubmit}>Search</button>
		</form>
	);
}
