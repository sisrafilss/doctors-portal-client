import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import Dashboard from "./Pages/DashBoard/Dashboard/Dashboard";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivatRoute from "./Pages/Login/PrivatRoute/PrivatRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<PrivatRoute path="/appoinment">
							<Appoinment />
						</PrivatRoute>
						<PrivatRoute path="/dashboard">
							<Dashboard />
						</PrivatRoute>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
