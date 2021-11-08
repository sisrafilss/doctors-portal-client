import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xm={12} sm={12} md={5}>
					<Calendar date={date} setDate={setDate} />
				</Grid>
				<Grid item xm={12} sm={12} md={7}>
					<Appointments date={date} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default DashboardHome;
