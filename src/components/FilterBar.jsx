export default function FilterBar({ filterValues, setFilterValues }) {
	function handleChange(fieldName, value) {
		setFilterValues({
			...filterValues,
			[fieldName]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		return filterValues;
	}

	console.log("HI", filterValues);

	return (
		<form>
			<select
				name="year"
				id="year"
				defaultValue={filterValues.year ?? "Year"}
				onChange={(event) => {
					handleChange("year", event.target.value);
				}}
			>
				<option value={null} disabled hidden>
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
				<option value="1991">1911</option>
				<option value="1992">1992</option>
				<option value="1993">1993</option>
				<option value={null}>None</option>
			</select>

			<select
				name="event"
				id="event"
				defaultValue={filterValues.event ?? "Event"}
				onChange={(event) => {
					handleChange("event", event.target.value);
				}}
			>
				<option value={null} disabled hidden>
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
				defaultValue={filterValues.mainPerson ?? "Main Person"}
				onChange={(event) => {
					handleChange("mainPerson", event.target.value);
				}}
			>
				<option disabled hidden value={null}>
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
