"use client";

import { useRouter } from "@/i18n/routing";

export default function NotAuthorized() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-6">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-red-100 dark:border-red-900/30 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/50 text-red-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm">
          ⚠️
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Access Denied</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          The dashboard module you are attempting to open requires a different security clearance. Your current logged-in role does not possess the credentials to view this page.
        </p>
        <div className="space-y-4">
          <button 
            onClick={() => router.push('/dashboard')}
            className="w-full py-4 bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-600 transition-transform active:scale-95"
          >
            Return to Authorized Dashboard
          </button>
          <button 
            onClick={() => router.push('/auth/login')}
            className="w-full py-4 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Sign in as Different Role
          </button>
        </div>
      </div>
    </div>
  );
}
