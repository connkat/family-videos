import React, { useState } from "react";

export default function FilterBar() {
	// const [filter, setFilter] = useState({
	// 	year: 0000,
	// 	date: "",
	// 	event: "",
	// 	mainPerson: "",
	// });

	return (
		<form>
			<input
				type="text"
				placeholder="Search Year"
				// onChange={(event) => {
				// 	setYear(event.target.value);
				// }}
			/>
		</form>
	);
}
