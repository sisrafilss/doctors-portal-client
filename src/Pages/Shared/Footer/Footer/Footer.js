import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import FooterServices from "../FooterServices/FooterServices";
import OralHealth from "../OralHealth/OralHealth";
import OurAddress from "../OurAddress/OurAddress";
import UsefulLinks from "../UserfulLinks/UsefulLinks";

const Footer = () => {
	return (
		<Box sx={{ pt: 8, pb: 2 }}>
			<Container>
				<Grid container spacing={2}>
					<UsefulLinks />
					<FooterServices />
					<OralHealth />
					<OurAddress />
				</Grid>
				<Typography
					style={{
						textDecoration: "none",
						color: "gray",
						fontSize: "14px",
					}}
					sx={{ mb: 1, mt: 3 }}
					variant="caption"
					display="block"
					gutterBottom
				>
					@ Copyright 2020 All Rights Reserved
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
