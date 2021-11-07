import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import dentalCare from "../../../images/treatment.png";

const verticalCenter = {
  minHeight: 500,
//   height: "100vh",
  display: "flex",
  alignItems: "center",
};

const ExceptionalDentalCare = () => {
  return (
    <div style={{ verticalCenter }}>
      <Container
        style={{ marginTop: "80px" }}
        sx={{
          my: 14,
          dispaly: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xm={12} sm={12} md={6}>
            <Box>
              <img src={dentalCare} width="auto" height="500" alt="" />
            </Box>
          </Grid>
          <Grid
            style={{ ...verticalCenter, textAlign: "left" }}
            item
            xm={12}
            sm={12}
            md={6}
          >
            <Box>
              <Typography
                sx={{ my: 5 }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Exceptional Dental <br /> Care, on Your Terms
              </Typography>
              <Typography sx={{ my: 5 }} variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                dolorum beatae hic eligendi blanditiis qui enim iste asperiores,
                doloribus impedit dolore dolor deserunt. Tenetur est debitis
                minima modi aperiam. Inventore culpa aliquam molestias ab,
                labore exercitationem facilis repellendus eius quasi accusamus
                ex dolorum est, recusandae quo. Facere laborum reprehenderit
                animi, ipsam cupiditate praesentium earum impedit, voluptates
                inventore, vero assumenda. Odit nihil delectus asperiores
                voluptate quas a suscipit hic, sequi non!
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#00C9DD",
                  textTransform: "capitalize",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExceptionalDentalCare;
