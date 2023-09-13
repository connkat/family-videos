import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import VideoPlayer from "./VideoPlayer";
import { Typography } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "65%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function BasicModal(props) {
	console.log(props.date);
	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography>{props.date}</Typography>
					<VideoPlayer embedId={props.embedId} />
				</Box>
			</Modal>
		</div>
	);
}
