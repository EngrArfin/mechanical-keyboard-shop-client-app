// src/hooks/useAuth.tsx
import { useContext } from "react";
import { AuthContext } from "../pages/SecurityPage/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
