import { useState } from "react";
import TextField from "./TextField";
import Dropdown from "./Dropdown";

import "./filterbar.css";

function FilterBar() {
  const [searchField, setSearchField] = useState("search");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { searchField };
      const res = await fetch("http://localhost:4000/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setSearchField("");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="filterbar">
      <form>
        <TextField id="field" label="search"  />
        <Dropdown label="year" />
        <p>month</p>
        <p>holiday</p>
        <p>family Member</p>
        <p>others</p>
        <button type="submit" onClick={onSubmitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FilterBar;
