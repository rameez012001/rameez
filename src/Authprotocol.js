import { useEffect, useState } from "react";
import { createContext } from "react";
import { backendURL } from "./Components/assets/data/data";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const checkAuth = async () => {
        try {
            const res = await fetch(`${backendURL}/auth-verify`, {
                method: "GET",
                credentials: "include",
            });
            setIsAuthenticated(res.ok);
        } catch (err) {
            setIsAuthenticated(false);
        }
    }

    const login = async (credentials) => {
        try {
            const res = await fetch(`${backendURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
                credentials: "include",
            });
            if (res.ok) {
                await checkAuth();
            }
            return res;
        } catch (err) {
            setIsAuthenticated(false);
        }
    };

    const logout = async () => {
        try {
            await fetch(`${backendURL}/logout`, {
                method: "POST",
                credentials: "include",
            });
            setIsAuthenticated(false);
            await checkAuth();
        }
        catch (err) {
            console.error(err);
            setIsAuthenticated(false);
        }
    }
    useEffect(() => {
        checkAuth();
    }, [])
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };