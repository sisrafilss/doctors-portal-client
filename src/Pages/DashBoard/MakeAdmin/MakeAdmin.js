import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
	const [email, setEmail] = useState("");
	const [adminSuccess, setAdminSuccess] = useState(false);
	const { token } = useAuth();

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const user = { email: email };
		fetch("http://localhost:5000/users/admin", {
			method: "PUT",
			headers: {
				'authorization': `Bearer ${token}`,
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					setAdminSuccess(true);
				}
			});
	};

	return (
		<div>
			<h2>Make an Admin!</h2>
			<Box sx={{ mt: 5 }}>
				<form onSubmit={handleFormSubmit}>
					<TextField
						type="email"
						label="Email"
						variant="standard"
						name="email"
						onBlur={handleOnBlur}
					/>
					<Button
						type="submit"
						variant="contained"
						style={{ backgroundColor: "#00C9DD" }}
					>
						Make Admin
					</Button>
				</form>
				{adminSuccess && (
					<Alert sx={{ mt: 1 }} severity="success">
						Admin Added Successfully.
					</Alert>
				)}
			</Box>
		</div>
	);
};

export default MakeAdmin;
