export default function FilterBar({ filterValues, setFilterValues }) {
	function handleChange(event) {
		let { name, value } = event.target;
		if (name === "year") {
			setFilterValues({ ...filterValues, year: value });
		}
		if (name === "mainPerson") {
			setFilterValues({ ...filterValues, mainPerson: value });
		}
		if (name === "occasion") {
			setFilterValues({ ...filterValues, occasion: value });
		}
	}

	function onSubmit(event) {
		event.preventDefault();
		setFilterValues({
			year: filterValues.year,
			occasion: filterValues.occasion,
			mainPerson: filterValues.mainPerson,
		});
		console.log("now:", filterValues);
		return filterValues;
	}

	console.log("RErender??", filterValues);
	return (
		<form>
			<select
				name="year"
				id="year"
				value={filterValues.year}
				onChange={handleChange}
			>
				<option value="" selected disabled hidden>
					Year
				</option>
				<option value={null}>None</option>
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
			</select>

			<select
				name="occasion"
				id="occasion"
				value={filterValues.occasion}
				onChange={handleChange}
			>
				<option value="" selected disabled hidden>
					Occasion
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
				value={filterValues.mainPerson}
				onChange={handleChange}
			>
				<option value="" selected disabled hidden>
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
