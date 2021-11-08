import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
	getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState("");
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");
	const auth = getAuth();

	// Register new user using Email & Password
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setAuthError("");

				// Set user to user state
				const newUser = { email, displayName: name };
				setUser(newUser);

				// saved user to database
				saveUser(email, name, "POST");

				// Set namae to firebase
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => { })
					.catch((error) => { });
				history.replace("/");
			})
			.catch((error) => {
				setAuthError(error.message);
				setUser({});
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// Sign in user using email and password
	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
				setAuthError("");
				const destination = location?.state?.from || "/";
				history.replace(destination);
			})
			.catch((error) => {
				setAuthError(error.message);
				setUser({});
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// Sign In using Google
	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();

		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				setAuthError("");
				// save user info to database
				saveUser(user.email, user.displayName, "PUT");
				const destination = location?.state?.from || "/";
				history.replace(destination);
			})
			.catch((error) => {
				setAuthError(error.message);
				setUser({});
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// Obserbe user state (login or logout)
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setAuthError("");
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	// Checking if user role is admin or not
	useEffect(() => {
		fetch(`http://localhost:5000/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data?.admin));
	}, [user]);

	// Sign Out User
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// An error happened.
			});
	};

	// Save user to database
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch("http://localhost:5000/users", {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => { });
	};

	return {
		user,
		isLoading,
		authError,
		admin,
		token,
		registerUser,
		loginUser,
		logOut,
		setIsLoading,
		setAuthError,
		signInWithGoogle,
	};
};

export default useFirebase;
