import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TestimonialSingle = ({people}) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Paper sx={{ p: 4, textAlign: "justify" }} elevation={3}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam
          quia magni voluptate accusantium iusto vero rerum praesentium rem,
          dicta, autem, consectetur vitae? Distinctio magnam dignissimos illo
          non doloremque necessitatibus?
        </Typography>
        <Stack sx={{ my: 4 }} direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={people} />
          <Box>
            <Typography style={{ color: "#00C9DD", fontSize: 16 }} variant="h6">
              Winston Herry
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              California
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default TestimonialSingle;
