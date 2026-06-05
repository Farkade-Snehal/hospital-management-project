"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function PrescriptionGenerator() {
  const [medicines, setMedicines] = useState([{ name: "", dosage: "", duration: "" }]);

  const addRow = () => {
    setMedicines([...medicines, { name: "", dosage: "", duration: "" }]);
  };

  const handleFinish = () => {
    alert("E-Prescription securely transmitted to Chemist and Patient App!");
  };

  return (
    <ProtectedRoute allowedRoles={['doctor']}>
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Issue E-Prescription</h1>
          <p className="text-gray-500">Patient: Sarah Jenkins (PT-1029)</p>
        </header>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-200 dark:border-zinc-800 p-8">
           <h2 className="text-lg font-bold mb-6 text-gray-800 dark:text-gray-200">Prescribed Medications</h2>
           
           <div className="space-y-4">
              {medicines.map((m, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 items-end bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-gray-100 dark:border-zinc-700/50">
                   <div className="flex-1 w-full">
                     <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Medicine Name</label>
                     <input type="text" placeholder="e.g., Paracetamol 500mg" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-indigo-500" />
                   </div>
                   <div className="flex-1 w-full">
                     <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Dosage & Frequency</label>
                     <input type="text" placeholder="1 tablet, twice daily" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-indigo-500" />
                   </div>
                   <div className="w-full md:w-32">
                     <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Duration</label>
                     <input type="text" placeholder="5 Days" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-indigo-500" />
                   </div>
                </div>
              ))}
           </div>

           <button onClick={addRow} className="mt-4 px-4 py-2 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40 rounded-xl transition-colors">
              + Add Another Medicine
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-200 dark:border-zinc-800 p-8">
              <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Doctor's Notes</h2>
              <textarea rows={4} placeholder="Additional instructions..." className="w-full p-4 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
           </div>
           
           <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2">QR Authorization</h3>
                <p className="text-gray-400 text-sm mb-6">Chemists can scan this cryptographically secure QR code to dispense the identical order.</p>
                <div className="w-32 h-32 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
                   {/* Fake QR Image */}
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RX-912JD92-SECURE" alt="QR" className="rounded-lg opacity-90" />
                </div>
              </div>
              <button onClick={handleFinish} className="mt-8 bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
                 Sign & Transmit E-Prescription
              </button>
           </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
