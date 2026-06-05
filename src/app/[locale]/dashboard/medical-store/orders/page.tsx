"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useState } from "react";

export default function VerificationEngine() {
  const [scanned, setScanned] = useState(false);

  return (
    <ProtectedRoute allowedRoles={['medical-store']}>
       <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto py-8">
          <header className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Prescription Fulfillment</h1>
              <p className="text-lg text-gray-500 font-light">Verify cryptographic E-Prescriptions securely from Doctors and log dispensations.</p>
            </div>
          </header>

          <div className="grid lg:grid-cols-2 gap-8">
             
             {/* QR Scanner Module */}
             <div className="bg-black rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] shadow-2xl relative overflow-hidden border border-zinc-800">
                {!scanned ? (
                   <>
                     <div className="w-16 h-16 border-4 border-emerald-500 rounded-xl mb-6 animate-pulse"></div>
                     <h2 className="text-white text-xl font-bold mb-2">Awaiting QR Scan</h2>
                     <p className="text-gray-400 text-sm text-center mb-8">Position the patient's E-Prescription QR code in view of the camera.</p>
                     <button onClick={() => setScanned(true)} className="px-6 py-3 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-200 transition-colors">
                        Simulate Successful Scan
                     </button>
                   </>
                ) : (
                   <div className="text-center animate-in zoom-in duration-300">
                      <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg shadow-emerald-500/50">✓</div>
                      <h2 className="text-white text-2xl font-bold mb-2">Authorized Prescription</h2>
                      <p className="text-emerald-400 font-mono text-sm leading-relaxed mb-6 bg-emerald-900/30 p-2 rounded-lg border border-emerald-500/30">ID: RX-912JD92-SECURE<br/>Dr. Jane Doe (Cardiology)</p>
                      <button onClick={() => setScanned(false)} className="px-6 py-2 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition-colors">
                        Scan Another
                      </button>
                   </div>
                )}
             </div>

             {/* Dispensation Logs & Tracker */}
             <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
                   <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Prescription Details (Auto-filled via QR)</h2>
                   {scanned ? (
                     <div className="space-y-4 animate-in slide-in-from-right duration-500">
                        <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-700">
                           <span className="font-semibold text-gray-900 dark:text-white">Paracetamol 500mg</span>
                           <span className="text-sm font-bold text-gray-500 bg-white dark:bg-zinc-900 px-3 py-1 rounded-full shadow-sm">1 tablet, twice daily (5 Days)</span>
                        </div>
                        <button className="w-full py-3 mt-4 bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors tracking-wide">
                          Log Dispensation as Completed
                        </button>
                     </div>
                   ) : (
                     <div className="p-8 text-center text-gray-400 border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl">
                        Scan a QR code to view prescription details securely.
                     </div>
                   )}
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                   <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-gray-800 dark:text-gray-100">B2B Inventory Requests</h3>
                      <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold px-2 py-1 rounded-full">New Alerts</span>
                   </div>
                   <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30 flex gap-4">
                      <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-xl shadow-sm">👨‍⚕️</div>
                      <div>
                         <p className="text-sm font-bold text-gray-900 dark:text-white">Dr. Jane Doe</p>
                         <p className="text-xs text-indigo-800 dark:text-indigo-300 mt-1">"Please restock Amoxicillin 250mg. We anticipate a surge in prescriptions this week."</p>
                      </div>
                   </div>
                </div>

             </div>

          </div>
       </div>
    </ProtectedRoute>
  );
}
