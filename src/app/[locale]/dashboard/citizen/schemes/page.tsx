"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

export default function CitizenSchemes() {
  const router = useRouter();
  
  return (
    <ProtectedRoute allowedRoles={['citizen']}>
       <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in duration-500">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Federal Healthcare Subsidies</h1>
            <p className="text-lg text-gray-500 mx-auto max-w-2xl">Discover and apply for verified government health initiatives transparently directly through your authenticated profile.</p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Scheme Card */}
             <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-gray-100 dark:border-zinc-800 overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="h-32 bg-gradient-to-r from-teal-500 to-emerald-600 p-6 flex items-end">
                   <h2 className="text-2xl font-bold text-white shadow-sm">PM-JAY Scheme</h2>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Provides health cover up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.</p>
                   
                   <div className="mt-auto">
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Required Documents</h3>
                     <ul className="text-sm font-medium text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                        <li className="flex gap-2">✓ Aadhar Card Auth</li>
                        <li className="flex gap-2">✓ Verified Income Index</li>
                     </ul>
                     <button className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-gray-800 transition-colors">
                        Auto-Apply via Identity
                     </button>
                   </div>
                </div>
             </div>

             <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-gray-100 dark:border-zinc-800 overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 flex items-end">
                   <h2 className="text-2xl font-bold text-white shadow-sm">Maternity Subsidy</h2>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Financial tracking and subsidy deployment directly to expected mothers for nutrition and delivery.</p>
                   
                   <div className="mt-auto">
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Required Documents</h3>
                     <ul className="text-sm font-medium text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                        <li className="flex gap-2 text-red-500">✗ Hospital Registration (Missing)</li>
                     </ul>
                     <button disabled className="w-full py-3 bg-gray-200 dark:bg-zinc-800 text-gray-500 font-bold rounded-xl cursor-not-allowed">
                        Prerequisites Missing
                     </button>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </ProtectedRoute>
  );
}
