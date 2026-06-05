"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useState } from "react";

export default function NearbyStores() {
  const [locationStatus, setLocationStatus] = useState("Locating...");

  setTimeout(() => setLocationStatus("Live Tracking Enabled"), 2000);

  return (
    <ProtectedRoute allowedRoles={['citizen', 'doctor']}>
       <div className="space-y-8 h-[calc(100vh-6rem)] flex flex-col pt-6 pb-2 px-4 md:px-0 animate-in fade-in duration-500">
          <header className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Geo-Spatial Chemist Radar</h1>
              <p className="text-lg text-gray-500 font-light flex items-center gap-2">
                 <span className={`w-3 h-3 rounded-full ${locationStatus === "Locating..." ? "bg-yellow-500 animate-pulse" : "bg-green-500"}`}></span> 
                 {locationStatus}
              </p>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-sm">
                  Search by Medicine
               </button>
            </div>
          </header>

          <div className="flex-1 flex flex-col md:flex-row gap-6 h-full overflow-hidden">
             
             {/* Map Area */}
             <div className="flex-[2] bg-gray-200 dark:bg-zinc-800 rounded-3xl relative overflow-hidden shadow-xl border border-gray-300 dark:border-zinc-700">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
                
                {/* Simulated Markers */}
                <div className="absolute top-1/4 left-1/3 flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform">
                   <div className="bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg mb-1 hidden group-hover:block whitespace-nowrap">City Central Pharmacy (Open)</div>
                   <div className="w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                </div>

                <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform">
                   <div className="bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg mb-1 hidden group-hover:block whitespace-nowrap">MediCorp Store (1.2mi)</div>
                   <div className="w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-lg shadow-emerald-500/50"></div>
                </div>

                {/* User Location */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                   <div className="w-24 h-24 bg-blue-500/20 rounded-full animate-ping absolute"></div>
                   <div className="w-4 h-4 bg-blue-600 border-2 border-white rounded-full relative z-10 shadow-lg shadow-blue-500/50"></div>
                </div>
             </div>

             {/* Stores List */}
             <div className="flex-1 w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6 flex flex-col overflow-y-auto">
                <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">Nearby Enrollments</h2>
                <div className="space-y-4">
                   <div className="p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:border-emerald-200 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white">City Central Pharmacy</h3>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">0.4 miles</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">124 Main Street, Downtown</p>
                      <div className="flex gap-2">
                         <button className="flex-1 py-2 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">Call: +1 234-567</button>
                         <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white text-sm font-bold rounded-lg border border-transparent">Directions</button>
                      </div>
                   </div>

                   <div className="p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:border-emerald-200 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white">MediCorp Store</h3>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">1.2 miles</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">99 West Avenue, Silicon Hills</p>
                      <div className="flex gap-2">
                         <button className="flex-1 py-2 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">Call: +1 888-000</button>
                         <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white text-sm font-bold rounded-lg border border-transparent">Directions</button>
                      </div>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </ProtectedRoute>
  );
}
