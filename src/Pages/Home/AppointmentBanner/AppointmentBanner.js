import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45, 58, 74, 0.9)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: "150px",
};

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1, pt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: "-130px" }}
                        src={doctor}
                        alt=""
                    />
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "left",
                        pb: 5,
                    }}
                    item
                    xs={12}
                    md={6}
                >
                    <Box>
                        <Typography variant="h6" style={{ color: "#00C9DD" }}>
                            APPOINTMENT
                        </Typography>
                        <Typography
                            sx={{ my: 4 }}
                            variant="h4"
                            style={{
                                color: "rgba(255, 255, 255, 0.9",
                                fontWeight: "600",
                            }}
                        >
                            Make an Appointment Today
                        </Typography>
                        <Typography
                            sx={{ my: 4 }}
                            variant="h6"
                            style={{
                                color: "rgba(255, 255, 255, 0.9",
                                fontSize: "14px",
                                fontWeight: "400",
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis neque deserunt sit ipsam saepe
                            repellendus. Quod mollitia amet cum voluptatibus!
                        </Typography>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "#00C9DD" }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentBanner;
