import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for token and fetch user profile
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .get("/api/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  const login = async (email, password) => {
    // Replace this block with real API call later
    if (email === "admin@example.com" && password === "password123") {
      const mockUser = { name: "Admin User", email };
      const mockToken = "mock-jwt-token";
      Cookies.set("token", mockToken, { expires: 7 });
      setUser(mockUser);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
