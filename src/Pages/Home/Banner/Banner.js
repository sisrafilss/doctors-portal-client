import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Box } from "@mui/system";

const bannerBg = {
  backgroundImage: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
          <Box >
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              sx={{ my: 4 }}
              variant="h6"
              style={{
                color: "gray",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              neque deserunt sit ipsam saepe repellendus. Quod mollitia amet cum
              voluptatibus!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#00C9DD" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <Box >
            <img style={{ width: "350px" }} src={chair} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
