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
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { loginUser, authError, isLoading, signInWithGoogle } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newFormData = { ...loginData };
		newFormData[field] = value;
		setLoginData(newFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, location, history);
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle(location, history);
	};

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid sx={{ mt: 8 }} item sm={12} md={6}>
					<Typography sx={{ mb: 6, fontSize: "20px" }} variant="body1">
						Login
					</Typography>
					{!isLoading ? (
						<Box>
							<form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
								<TextField
									sx={{ width: "75%", mb: 4 }}
									id="standard-basic"
									label="Your Email"
									variant="standard"
									name="email"
									onChange={handleChange}
								/>
								<TextField
									sx={{ width: "75%", mb: 4 }}
									id="standard-basic"
									label="Password"
									variant="standard"
									type="password"
									name="password"
									onChange={handleChange}
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
							<NavLink style={{ textDecoration: "none" }} to={"/register"}>
								<Button style={{ textTransform: "capitalize" }} variant="text">
									New User? Please Register
								</Button>
							</NavLink>
						</Box>
					) : (
						<CircularProgress />
					)}
					<p>------------------- or -----------------</p>
					<Button
						variant="contained"
						sx={{ width: "76%", mt: 1 }}
						style={{
							backgroundColor: "#00C9DD",
							textTransform: "capitalize",
						}}
						onClick={handleGoogleSignIn}
					>
						Google Sign In
					</Button>

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

export default Login;
