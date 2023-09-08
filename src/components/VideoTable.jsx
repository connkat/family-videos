import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Modal from "./Modal";

export default function VideoTable({ data }) {
	const [embedId, setEmbedId] = useState("");
	const [date, setDate] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleClick = (event, date, embedId) => {
		event.preventDefault();
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
			<Paper sx={{ width: "100%", mb: 2 }}>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby="tableTitle"
						size={"medium"}
					>
						{/* <TableHead>
							<TableCell>Date</TableCell>
							<TableCell>Year</TableCell>
							<TableCell>Event</TableCell>
							<TableCell>Main Person</TableCell>
						</TableHead> */}

						<TableBody>
							{data.map((video) => {
								return (
									<TableRow
										key={video.id}
										onClick={(event) =>
											handleClick(event, video.date, video.embedId)
										}
									>
										<td width="25%">{video.date}</td>
										<td width="25%">{video.year}</td>
										<td width="25%">{video.occasion ?? "n/a"}</td>
										<td width="25%">{video.mainPerson ?? "n/a"}</td>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
}
