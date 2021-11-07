import {
	Alert,
	Button,
	CircularProgress,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import loginImg from "../../../images/login.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

const Register = () => {
	const [registerData, setRegisterData] = useState({});
	const { registerUser, isLoading, user, authError } = useAuth();
	const history = useHistory();

	const handleBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newFormData = { ...registerData };
		newFormData[field] = value;
		setRegisterData(newFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (registerData.password !== registerData.password2) {
			alert("Password did not Match");
			return;
		}
		registerUser(
			registerData.email,
			registerData.password,
			registerData.name,
			history
		);
	};
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid sx={{ mt: 8 }} item sm={12} md={6}>
					<Typography sx={{ mb: 6, fontSize: "20px" }} variant="body1">
						Register
					</Typography>
					{!isLoading ? (
						<Box>
							<form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
								<TextField
									sx={{ width: "75%", mb: 4 }}
									id="standard-basic"
									label="Your Name"
									variant="standard"
									name="name"
									onBlur={handleBlur}
								/>
								<TextField
									sx={{ width: "75%", mb: 4 }}
									id="standard-basic"
									label="Your Email"
									variant="standard"
									type="email"
									name="email"
									onBlur={handleBlur}
								/>
								<TextField
									sx={{ width: "75%", mb: 4 }}
									id="standard-basic"
									label="Password"
									variant="standard"
									type="password"
									name="password"
									onBlur={handleBlur}
								/>
								<TextField
									sx={{ width: "75%", mb: 4 }}
									id="standard-basic"
									label="Confirm Password"
									variant="standard"
									type="password"
									name="password2"
									onBlur={handleBlur}
								/>
								<br />
								<Button
									type="submit"
									variant="contained"
									sx={{ width: "76%", mt: 3 }}
									style={{
										backgroundColor: "#00C9DD",
										textTransform: "capitalize",
									}}
								>
									Sign In
								</Button>
							</form>
							<NavLink
								style={{ textDecoration: "none", textTransform: "capitalize" }}
								to={"/login"}
							>
								<Button style={{ textTransform: "capitalize" }} variant="text">
									Already Registered? Please Login
								</Button>
							</NavLink>
						</Box>
					) : (
						<CircularProgress />
					)}
					{user.email && (
						<Alert sx={{ mt: 1 }} severity="success">
							You have Successfully Registered and Logged In.
						</Alert>
					)}
					{authError && (
						<Alert sx={{ mt: 1 }} severity="error">
							{" "}
							{authError}{" "}
						</Alert>
					)}
				</Grid>
				<Grid item sm={12} md={6}>
					<img src={loginImg} style={{ width: "100%" }} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Register;
