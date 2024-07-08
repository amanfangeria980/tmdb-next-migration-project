"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCredentials } from "../../context/UserContext";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
    const { setUser, setEmailId, setIsLoggedIn } = useCredentials();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, email, password };

        // Check if user data is already present in localStorage
        const storedUserData =
            (typeof window !== "undefined" && localStorage.getItem("user")) ||
            null;
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            if (parsedUserData.email === email) {
                setError("User with this email already exists");
                return;
            }
        }
        // update the context
        setUser(username);
        setEmailId(email);
        setIsLoggedIn(true);

        // Save user data to localStorage
        typeof window !== "undefined" &&
            localStorage.setItem("user", JSON.stringify(userData));
        // You may want to redirect to another page after successful signup
        // navigate("/login");
        router.push("/");
    };

    const handleLogin = () => {
        router.push("/login");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded shadow-md max-w-md w-full mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
                {error && (
                    <div className="text-red-500 text-sm mb-2">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Sign Up
                </button>
                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full bg-gray-500 text-white p-2 rounded mt-4 hover:bg-gray-600 transition duration-300 ease-in-out"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
