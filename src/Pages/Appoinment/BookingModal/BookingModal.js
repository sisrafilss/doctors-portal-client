import React, { useState } from "react";
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
	setBookingSuccess,
}) => {
	const { user } = useAuth();
	const initialInfo = {
		patientName: user?.displayName,
		email: user?.email,
		phone: "",
	};
	const [bookingInfo, setBookingInfo] = useState(initialInfo);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newInfo = { ...bookingInfo };
		newInfo[field] = value;
		setBookingInfo(newInfo);
	};

	const handleBooking = (e) => {
		// collect data
		const appointment = {
			...bookingInfo,
			time,
			serviceName: name,
			date: date.toLocaleDateString(),
		};

		// send to server
		fetch("http://localhost:5000/appointments", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(appointment),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					setBookingSuccess(true);
					handleCloseBooking();
				}
			});

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
								sx={{ width: "100%", m: 1 }}
								size="small"
								id="outlined-size-small"
								defaultValue={user?.displayName}
								name="patientName"
								onBlur={handleOnBlur}
							/>
							<TextField
								sx={{ width: "100%", m: 1 }}
								id="outlined-size-small"
								size="small"
								defaultValue={user?.email}
								name="email"
								onBlur={handleOnBlur}
							/>
							<TextField
								sx={{ width: "100%", m: 1 }}
								size="small"
								id="outlined-size-small"
								placeholder="Phone Number"
								name="phone"
								onBlur={handleOnBlur}
							/>
							<TextField
								disabled
								id="outlined-size-small"
								defaultValue={date.toDateString()}
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
