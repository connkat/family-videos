import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import Modal from "./Modal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

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
		<>
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
							<TableHead>
								<StyledTableRow>
									<StyledTableCell>Year</StyledTableCell>
									<StyledTableCell>Event</StyledTableCell>
									<StyledTableCell>Main Person</StyledTableCell>
								</StyledTableRow>
							</TableHead>

							<TableBody>
								{data.map((video) => {
									return (
										<StyledTableRow
											key={video.id}
											onClick={(event) =>
												handleClick(event, video.date, video.embedId)
											}
										>
											<StyledTableCell width="25%">
												{video.year}
											</StyledTableCell>
											<StyledTableCell width="25%">
												{video.occasion ?? "n/a"}
											</StyledTableCell>
											<StyledTableCell width="25%">
												{video.mainPerson ?? "n/a"}
											</StyledTableCell>
										</StyledTableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Box>
			{data.length === 0 && <p>No Videos found</p>}
		</>
	);
}
