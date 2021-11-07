import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleOpenBooking = () => setOpenBooking(true);
  const handleCloseBooking = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography sx={{ mb: 1 }} variant="h6" style={{ color: "#00C9DD" }}>
            {name}
          </Typography>
          <Typography
            sx={{ mb: 1 }}
            style={{ fontWeight: 400, fontSize: "12px" }}
            variant="h6"
          >
            {time}
          </Typography>
          <Typography
            sx={{ mb: 1 }}
            variant="caption"
            display="block"
            gutterBottom
          >
            {space} SPACES AVAILABE
          </Typography>
          <Button onClick={handleOpenBooking} variant="contained" style={{ backgroundColor: "#00C9DD" }}>
            BOOK APPOINMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        openBooking={openBooking}
        handleCloseBooking={handleCloseBooking}
        name={name}
        time={time}
        date={date}
      />
    </>
  );
};

export default Booking;
