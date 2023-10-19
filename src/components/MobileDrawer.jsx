import { useState } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { FilterMenu } from "./FilterBar";

const Root = styled("div")(({ theme }) => ({
	height: "100%",
	backgroundColor: grey[100],
}));

function SwipeableEdgeDrawer({ filterValues, setFilterValues, filterUpdated }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);

		if (filterUpdated) {
			setOpen(false);
		}
	};

	return (
		<Root>
			<CssBaseline />
			<Global
				styles={{
					".MuiDrawer-root > .MuiPaper-root": {
						height: "50%",
						overflow: "visible",
					},
				}}
			/>
			<Box sx={{ textAlign: "center", pt: 1 }}>
				<Button onClick={toggleDrawer(true)}>Filter Videos</Button>
			</Box>
			<SwipeableDrawer
				anchor="bottom"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<FilterMenu
					filterValues={filterValues}
					setFilterValues={setFilterValues}
				/>
			</SwipeableDrawer>
		</Root>
	);
}

export default SwipeableEdgeDrawer;
