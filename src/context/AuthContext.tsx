"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export type Role = "citizen" | "doctor" | "government" | "medical-store";

interface AuthContextType {
  user: any | null;
  role: Role | null;
  loading: boolean;
  loginMock: (role: Role) => void;
  logoutMock: () => void;
}

const AuthContext = createContext<AuthContextType>({ user: null, role: null, loading: true, loginMock: ()=>{}, logoutMock: ()=>{} });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  // 🛠️ Development Offline Bypass Functionality
  const loginMock = (r: Role) => {
    localStorage.setItem('mock_user', 'true');
    localStorage.setItem('userRole', r);
    setUser({ email: "demo@mock.ai", uid: "mock-123" });
    setRole(r);
  };

  const logoutMock = () => {
    localStorage.removeItem('mock_user');
    localStorage.removeItem('userRole');
    setUser(null);
    setRole(null);
  };

  useEffect(() => {
    // If running in development offline mode
    if (typeof window !== "undefined" && localStorage.getItem('mock_user') === 'true') {
      setUser({ email: "demo@mock.ai", uid: "mock-123" });
      setRole((localStorage.getItem('userRole') as Role) || 'citizen');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Fetch role from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const fetchedRole = userDoc.data().role as Role;
            setRole(fetchedRole);
            localStorage.setItem('userRole', fetchedRole);
          } else {
            const cachedRole = localStorage.getItem('userRole') as Role;
            setRole(cachedRole || "citizen"); 
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          const cachedRole = localStorage.getItem('userRole') as Role;
          setRole(cachedRole || "citizen");
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading, loginMock, logoutMock }}>
        {children}
    </AuthContext.Provider>
  );
};
