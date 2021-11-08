import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import TestimonialSingle from "../TestimonialSingle/TestimonialSingle";

const Testimonial = () => {
	return (
		<div>
			<Container sx={{ my: 14 }}>
				<Box sx={{ textAlign: "left" }}>
					<Typography sx={{ mb: 2 }} style={{ color: "#00C9DD" }} variant="h6">
						TESTIMONIAL
					</Typography>
					<Typography variant="h3">
						What's Our Patient <br /> Says
					</Typography>
				</Box>
				<Grid sx={{ mt: 2 }} container spacing={2}>
					<TestimonialSingle people={people1} />
					<TestimonialSingle people={people2} />
					<TestimonialSingle people={people3} />
				</Grid>
			</Container>
		</div>
	);
};

export default Testimonial;
