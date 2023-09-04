import React, { useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

import Modal from "./Modal";

const headCells = [
	{
		id: "year",
		numeric: true,
		label: "Year",
	},
	{
		id: "event",
		numeric: true,
		label: "Event",
	},
	{
		id: "mainPerson",
		numeric: true,
		label: "Main Person",
	},
];

const data = [
	{
		id: 1,
		date: "March 12, 1997",
		year: "1997",
		event: null,
		main_person: null,
		embedId: "hzSSQ7_9enI",
	},
	{
		id: 2,
		date: "April 30, 1994",
		year: "1994",
		event: null,
		main_person: null,
		embedId: "MdkGe8wyd5c",
	},
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox"></TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default function VideoBar(rows) {
	data.map((row) => {
		console.log("ROW!!!", row.id);
	});

	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("year");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [embedId, setEmbedId] = useState("");
	const [date, setDate] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleClick = (event, date, embedId) => {
		event.preventDefault();
		handleOpen();
		setEmbedId(embedId);
		setDate(date);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
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
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{data
								.sort(getComparator(order, orderBy))
								.slice()
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((video) => {
									return (
										<TableRow
											key={video.id}
											onClick={(event) =>
												handleClick(event, video.date, video.embedId)
											}
										>
											<td width="25%">{video.date}</td>
											<td width="25%">{video.year}</td>
											<td width="25%">{video.event ?? "n/a"}</td>
											<td width="25%">{video.main_person ?? "n/a"}</td>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length ?? 0}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}
