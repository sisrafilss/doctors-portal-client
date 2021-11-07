import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/bg.png";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const contactFormBg = {
	background: `url(${bg})`,
	backgroundColor: "rgba(45, 58, 74, 0.9)",
	backgroundBlendMode: "darken, luminosity",
	marginTop: "150px",
};

const ContactForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Ok!");
	};

	return (
		<div style={contactFormBg}>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Typography sx={{ mb: 2 }} style={{ color: "#00C9DD" }} variant="h6">
					CONTACT US
				</Typography>
				<Typography
					sx={{ my: 4 }}
					variant="h4"
					style={{
						color: "rgba(255, 255, 255, 1",
						fontWeight: "500",
					}}
				>
					Alwasy Connect With Us
				</Typography>
				<Box>
					<form onSubmit={handleSubmit}>
						<TextField
							id="outlined-size-small"
							placeholder="Email Address*"
							// size="small"
							sx={{
								width: "100%",
								mb: 4,
								border: 0,
								outline: 0,
								borderRadius: 1,
								background: "#fff",
							}}
						/>
						<TextField
							id="outlined-size-small"
							placeholder="Subject*"
							// size="small"
							sx={{
								width: "100%",
								mb: 4,
								border: 0,
								outline: 0,
								borderRadius: 1,
								background: "#fff",
							}}
						/>

						<TextareaAutosize
							aria-label="minimum height"
							minRows={10}
							placeholder="Your Message*"
							style={{
								width: "97%",
								mb: 4,
								background: "#fff",
								row: 10,
								padding: 15,
								border: 0,
								outline: 0,
								borderRadius: 3,
								font: "inherit",
								letterSpacing: "inherit",
								color: "currentColor",
							}}
						/>
						<Button
							type="submit"
							variant="contained"
							style={{
								backgroundColor: "#00C9DD",
								marginTop: "15px",
								padding: "7px 40px",
							}}
						>
							SUBMIT
						</Button>
					</form>
				</Box>
			</Container>
		</div>
	);
};

export default ContactForm;
