"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCredentials } from "../../context/UserContext";
const LoginForm = () => {
    const router = useRouter();
    const [creds, setCreds] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { setUser, setEmailId, setIsLoggedIn } = useCredentials();
    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            if (parsedUserData.password === password) {
                setUser(parsedUserData.username);
                setEmailId(parsedUserData.email);
                setIsLoggedIn(true);
                router.replace("/");
            } else {
                setError("Invalid email/username or password");
            }
        } else {
            setError("User data not found. Please sign up first.");
        }
        setCreds("");
        setPassword("");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded shadow-md max-w-md w-full mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-4 text-center">Login</h2>
                {error && (
                    <div className="text-red-500 text-sm mb-2">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-1">
                        Email or Username
                    </label>
                    <input
                        type="text"
                        value={creds}
                        onChange={(e) => setCreds(e.target.value)}
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
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
                >
                    Login
                </button>
                <button
                    type="button"
                    onClick={() => router.push("/signup")}
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
