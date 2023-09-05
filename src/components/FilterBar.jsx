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
			<input
				type="text"
				placeholder="Event"
				value={filterValues.event}
				onChange={(value) => {
					handleChange("code", value);
				}}
			/>
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
