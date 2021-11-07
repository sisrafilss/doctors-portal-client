import { Grid, IconButton, Button, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import "./OurAddress.css";
import { Box } from "@mui/system";

const OurAddress = () => {
	return (
		<Grid style={{ textAlign: "left" }} item xm={12} sm={6} md={3}>
			<Typography sx={{ mb: 2 }} style={{ color: "#00C9DD" }} variant="h6">
				Our Address
			</Typography>
			<Typography
				style={{
					textDecoration: "none",
					color: "gray",
					fontSize: "14px",
				}}
				sx={{ mb: 1 }}
				variant="caption"
				display="block"
				gutterBottom
			>
				New Yark - 101010 Hudson <br />
				Yards
			</Typography>
			<Box sx={{ mt: 4 }}>
				<IconButton className="socialIcon">
					<GoogleIcon />
				</IconButton>
				<IconButton className="socialIcon">
					<TwitterIcon />
				</IconButton>
				<IconButton className="socialIcon">
					<InstagramIcon />
				</IconButton>
			</Box>
			<Box sx={{ mt: 6 }}>
				<Typography
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					sx={{ mb: 0 }}
					variant="caption"
					display="block"
					gutterBottom
				>
					Call Now
				</Typography>
				<Button
					type="submit"
					variant="contained"
					style={{
						backgroundColor: "#00C9DD",
						marginTop: "15px",
						padding: "7px 40px",
					}}
				>
					+23923892329
				</Button>
			</Box>
		</Grid>
	);
};

export default OurAddress;
