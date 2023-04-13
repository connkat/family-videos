import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import JSONDATA from "../data.json";

import Modal from "./Modal";

const SearchBar = () => {
	const [year, setYear] = useState("");
	const [open, setOpen] = useState(false);
	const [embedId, setEmbedId] = useState("");
	const [date, setDate] = useState("");
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleClick = (event, date, embedId) => {
		handleOpen();
		setEmbedId(embedId);
		setDate(date);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Modal
				open={open}
				handleClose={handleClose}
				date={date}
				embedId={embedId}
			/>
			<input
				type="text"
				placeholder="Search Year"
				onChange={(event) => {
					setYear(event.target.value);
				}}
			/>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby="tableTitle"
						size={"medium"}
					>
						<TableHead>
							<TableRow>
								<TableCell >Date</TableCell>
								<TableCell >Year</TableCell>
								<TableCell >Event</TableCell>
								<TableCell >Main Person</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{JSONDATA.filter((value) => {
								if (year === "") {
									return value;
								} else if (
									value.year.toLowerCase().includes(year.toLowerCase())
								) {
									return value;
								}
								return null;
							}).map((video, index) => {
								return (
									<TableRow
										key={video.id}
										onClick={(event) =>
											handleClick(event, video.date, video.embedId)
										}
									>
										<td>{video.date}</td>
										<td>{video.year}</td>
										<td>{video.event ?? "n/a"}</td>
										<td>{video.main_person ?? "n/a"}</td>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
};

export default SearchBar;
