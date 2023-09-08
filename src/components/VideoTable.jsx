import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import Modal from "./Modal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontSize: "3vh",
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

const useStyles = makeStyles((theme) => ({
	container: {
		margin: "auto",
		width: "70%",
	},
	header: {
		fontSize: "3",
		backgroundColor: "red",
	},
}));
export default function VideoTable({ rows }) {
	const classes = useStyles();

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

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
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
				<div className={classes.container}>
					<Paper elevation={3} square={false} sx={{ mb: 2 }}>
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
									{(rowsPerPage > 0
										? rows.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
										  )
										: rows
									).map((row) => (
										<StyledTableRow
											key={row.id}
											onClick={(event) =>
												handleClick(event, row.date, row.embedId)
											}
										>
											<StyledTableCell style={{ width: 30 }} align="left">
												{row.year}
											</StyledTableCell>
											<StyledTableCell style={{ width: 30 }} align="left">
												{row.occasion}
											</StyledTableCell>
											<StyledTableCell style={{ width: 30 }} align="left">
												{row.mainPerson}
											</StyledTableCell>
										</StyledTableRow>
									))}
									{emptyRows > 0 && (
										<TableRow style={{ height: 53 * emptyRows }}>
											<StyledTableCell colSpan={6} />
										</TableRow>
									)}
								</TableBody>
								{rows.length === 0 && (
									<TableRow style={{ textAlign: "center" }}>
										<StyledTableCell>No Videos found</StyledTableCell>
									</TableRow>
								)}
								<TableFooter>
									<TableRow>
										<TablePagination
											rowsPerPageOptions={[
												5,
												10,
												25,
												{ label: "All", value: -1 },
											]}
											colSpan={3}
											count={rows.length}
											rowsPerPage={rowsPerPage}
											page={page}
											SelectProps={{
												inputProps: {
													"aria-label": "rows per page",
												},
												native: true,
											}}
											onPageChange={handleChangePage}
											onRowsPerPageChange={handleChangeRowsPerPage}
											ActionsComponent={TablePaginationActions}
										/>
									</TableRow>
								</TableFooter>
							</Table>
						</TableContainer>
					</Paper>
				</div>
			</Box>
		</>
	);
}

function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};
