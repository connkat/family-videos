import React, { useState } from "react";

import { alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Toolbar from "@mui/material/Toolbar";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

import rows from "../data.json";

import Modal from "./Modal";

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

const headCells = [
	{
		id: "date",
		numeric: false,
		disablePadding: true,
		label: "Date",
	},
	{
		id: "year",
		numeric: true,
		disablePadding: false,
		label: "Year",
	},
	{
		id: "event",
		numeric: true,
		disablePadding: false,
		label: "Event",
	},
	{
		id: "mainPerson",
		numeric: true,
		disablePadding: false,
		label: "Main Person",
	},
];

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
						align={headCell.numeric ? "right" : "left"}
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

function EnhancedTableToolbar(props) {
	const { numSelected } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		></Toolbar>
	);
}

export default function VideoBar() {
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("year");
	// eslint-disable-next-line no-unused-vars
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [embedId, setEmbedId] = useState("");
	const [date, setDate] = useState("");
	const [year, setYear] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleRequestSort = (event, property) => {
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

	const isSelected = (date) => selected.indexOf(date) !== -1;

	return (
		<Box sx={{ width: "100%" }}>
			<Modal
				open={open}
				handleClose={handleClose}
				date={date}
				embedId={embedId}
			/>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby="tableTitle"
						size={"medium"}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{rows
								.sort(getComparator(order, orderBy))
								.slice()
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.filter((value) => {
									if (year === "") {
										return value;
									} else if (
										value.year.toLowerCase().includes(year.toLowerCase())
									) {
										return value;
									}
									return null;
								})
								.map((video, index) => {
									const isItemSelected = isSelected(video.date);
									const labelId = `enhanced-table-checkbox-${index}`;

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
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}
