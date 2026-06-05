"use client";

import { useAuth } from "@/context/AuthContext";
import { Role } from "@/context/AuthContext";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/login");
      } else if (allowedRoles && role && !allowedRoles.includes(role)) {
        router.push("/not-authorized");
      }
    }
  }, [user, role, loading, allowedRoles, router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-900 border"><p>Loading...</p></div>;
  }

  if (!user) return null;
  if (allowedRoles && role && !allowedRoles.includes(role)) return null;

  return <>{children}</>;
}
