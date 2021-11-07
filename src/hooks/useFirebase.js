import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState("");
	const auth = getAuth();

	// Register new user using Email & Password
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
				setAuthError("");
				// Set namae to firebase
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
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

	// Obserbe user login or logout
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setAuthError("");
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

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

	return {
		user,
		isLoading,
		authError,
		registerUser,
		loginUser,
		logOut,
		setIsLoading,
		setAuthError,
		signInWithGoogle,
	};
};

export default useFirebase;
