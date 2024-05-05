import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		if (username === "admin" && password === "password") {
			console.log("Login successful");
			setIsLoggedIn(true);
		} else {
			setError("Invalid username or password");
		}
	};

	if (isLoggedIn) {
		return <Navigate to="/beachboys-admin" />;
	}

	return (
		<div>
			<h1>Login</h1>
			<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button onClick={handleLogin}>Login</button>
			{error && <p>{error}</p>}
		</div>
	);
};

export default Login;
