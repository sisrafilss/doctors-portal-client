import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FooterServices = () => {
	return (
		<Grid style={{ textAlign: "left" }} item xm={12} sm={6} md={3}>
			<Typography sx={{ mb: 2 }} style={{ color: "#00C9DD" }} variant="h6">
				Services
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Emergency Dental Care
				</Link>
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Check Up
				</Link>
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Treatment of Personal Diseases
				</Link>
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Tooth Extraction
				</Link>
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Check Up
				</Link>
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Check Up
				</Link>
			</Typography>
			<Typography sx={{ mb: 1 }} variant="caption" display="block" gutterBottom>
				<Link
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					to="#"
				>
					Check Up
				</Link>
			</Typography>
		</Grid>
	);
};

export default FooterServices;
