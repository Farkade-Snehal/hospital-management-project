"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "@/i18n/routing";

export default function DashboardGateway() {
  const { role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && role) {
      if (role === 'citizen') router.replace('/dashboard/citizen');
      else if (role === 'doctor') router.replace('/dashboard/doctor');
      else if (role === 'government') router.replace('/dashboard/government');
      else if (role === 'medical-store') router.replace('/dashboard/medical-store');
    }
  }, [role, loading, router]);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500">Routing to your personalized portal...</p>
      </div>
    </div>
  );
}
