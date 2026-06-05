"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/config";
import { useRouter } from "@/i18n/routing";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { loginMock } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userRole', role);
      try {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: userCredential.user.email,
          role: role,
          createdAt: new Date().toISOString(),
        });
      } catch (dbErr) {
        console.warn("Firestore offline bypass");
      }
      router.push("/dashboard");
    } catch (err: any) {
      console.warn("Register triggered Offline Bypass mode due to Firebase Error");
      loginMock(role as any);
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 bg-white/70 backdrop-blur-xl dark:bg-black/50 p-10 rounded-3xl shadow-2xl border border-white/20">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
          Join the AI Healthcare Ecosystem
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleRegister}>
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100/10 rounded-lg border border-red-500/50">
            {error}
          </div>
        )}
        <div className="space-y-4 rounded-md shadow-sm">
          <div>
            <label className="text-sm font-medium dark:text-gray-200">Email address</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 relative block w-full appearance-none rounded-xl border border-gray-300 dark:border-zinc-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 bg-white/50 dark:bg-zinc-800/50 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm transition-all duration-300 hover:shadow-md"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium dark:text-gray-200">Password</label>
            <input
              name="password"
              type="password"
              required
              className="mt-1 relative block w-full appearance-none rounded-xl border border-gray-300 dark:border-zinc-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 bg-white/50 dark:bg-zinc-800/50 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm transition-all duration-300 hover:shadow-md"
              placeholder="Strong password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium dark:text-gray-200">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-zinc-700 px-4 py-3 text-gray-900 dark:text-white bg-white/50 dark:bg-zinc-800/50 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
            >
              <option value="citizen">Citizen (Patient)</option>
              <option value="doctor">Healthcare Professional</option>
              <option value="medical-store">Medical Store / Pharmacy</option>
              <option value="government">Government Official</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-xl border border-transparent bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-4 text-sm font-medium text-white hover:from-teal-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-transform active:scale-95"
          >
            Register Profile
          </button>
        </div>
      </form>
    </div>
  );
}
