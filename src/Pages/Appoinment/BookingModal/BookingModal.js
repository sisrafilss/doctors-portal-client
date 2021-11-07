import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const BookingModal = ({
	openBooking,
	handleCloseBooking,
	name,
	time,
	date,
}) => {
	const { user } = useAuth();

	const handleBooking = (e) => {
		alert("Successfully Booked!");
		handleCloseBooking();
		e.preventDefault();
	};
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={openBooking}
				onClose={handleCloseBooking}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openBooking}>
					<Box sx={style}>
						<Typography
							sx={{ mb: 1 }}
							id="transition-modal-title"
							variant="h5"
							style={{ color: "#00C9DD", textAlign: "center" }}
							component="h2"
						>
							{name}
						</Typography>
						<form onSubmit={handleBooking}>
							<TextField
								disabled
								id="outlined-size-small"
								defaultValue={time}
								size="small"
								sx={{ width: "100%", m: 1 }}
							/>
							<TextField
								id="outlined-size-small"
								defaultValue={user?.displayName}
								size="small"
								sx={{ width: "100%", m: 1 }}
							/>
							<TextField
								id="outlined-size-small"
								defaultValue={user?.email}
								size="small"
								sx={{ width: "100%", m: 1 }}
							/>
							<TextField
								id="outlined-size-small"
								placeholder="Phone Number"
								size="small"
								sx={{ width: "100%", m: 1 }}
							/>
							<TextField
								disabled
								id="outlined-size-small"
								defaultValue={date}
								size="small"
								sx={{ width: "100%", m: 1 }}
							/>
							<Button
								type="submit"
								variant="contained"
								style={{ backgroundColor: "#00C9DD", marginLeft: "2%" }}
							>
								SEND
							</Button>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default BookingModal;
