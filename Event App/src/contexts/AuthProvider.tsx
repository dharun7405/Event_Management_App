import type { AuthUser } from "../types";
import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthUser | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadAuthUser = () => {
            const savedUser = localStorage.getItem("auth")
            if (savedUser) {
                try {
                    setAuth(JSON.parse(savedUser))
                } catch (error) {
                    console.error("Error parsing saved user:", error)
                    localStorage.removeItem("auth")
                }

            }
            setLoading(false);
        };

        loadAuthUser();
    }, []);

    const login = (userData: AuthUser) => {
        setAuth(userData);
        localStorage.setItem("auth", JSON.stringify(userData));
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem("auth");
    };

    if (loading) {
        return null;
    }

    const value = { auth, login, logout, isAuthenticated: !!auth, };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};