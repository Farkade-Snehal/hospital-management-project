"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

export default function DoctorOnboarding() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const finishOnboarding = () => {
    // In real app, save to Firestore here
    router.push('/dashboard/doctor');
  };

  return (
    <ProtectedRoute allowedRoles={['doctor']}>
      <div className="min-h-screen bg-gray-50 dark:bg-black py-10 px-4 flex justify-center items-start">
        <div className="w-full max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Doctor Profile Setup</h1>
            <p className="text-gray-500 mt-2">Complete your profile to start accepting appointments.</p>
          </div>

          {/* Stepper */}
          <div className="flex justify-between items-center mb-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-zinc-800 -z-10 transform -translate-y-1/2 rounded-full"></div>
            <div className={`absolute top-1/2 left-0 h-1 bg-indigo-600 dark:bg-indigo-500 -z-10 transform -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            
            {[
              { id: 1, name: "Personal Profile" },
              { id: 2, name: "Clinic Details" },
              { id: 3, name: "Fees & Timing" }
            ].map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 transition-colors ${
                  step >= s.id 
                    ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-500 dark:bg-indigo-500' 
                    : 'border-gray-200 bg-white text-gray-400 dark:border-zinc-700 dark:bg-zinc-900'
                }`}>
                  {s.id}
                </div>
                <span className={`mt-2 text-xs font-semibold ${step >= s.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 p-8 pt-10">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-100 dark:border-zinc-800 pb-4">Step 1: Medical Profile</h2>
                <div className="grid grid-cols-2 gap-6">
                   <div className="col-span-2 md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Legal Name</label>
                     <input type="text" placeholder="Dr. Jane Doe" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                   <div className="col-span-2 md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Medical License Number</label>
                     <input type="text" placeholder="MD-89123-X" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                   <div className="col-span-2">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Primary Specialization</label>
                     <select className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none">
                        <option>Cardiologist</option>
                        <option>General Physician</option>
                        <option>Pediatrician</option>
                        <option>Dermatologist</option>
                     </select>
                   </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-100 dark:border-zinc-800 pb-4">Step 2: Clinic & Tele-Med Setup</h2>
                <div className="grid grid-cols-2 gap-6">
                   <div className="col-span-2">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Clinic Name</label>
                     <input type="text" placeholder="City Central Clinic" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                   <div className="col-span-2">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Clinic Address</label>
                     <textarea placeholder="123 Main St..." className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
                   </div>
                   <div className="col-span-2 flex items-center gap-3 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                      <input type="checkbox" id="telemed" className="w-5 h-5 rounded text-indigo-600" defaultChecked />
                      <label htmlFor="telemed" className="font-semibold text-indigo-900 dark:text-indigo-200">Enable Tele-medicine Video Consultations</label>
                   </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-100 dark:border-zinc-800 pb-4">Step 3: Availability & Consultation Fees</h2>
                <div className="grid grid-cols-2 gap-6">
                   <div className="col-span-2 md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Standard Consultation Fee ($)</label>
                     <input type="number" placeholder="50" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                   <div className="col-span-2 md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tele-med Fee ($)</label>
                     <input type="number" placeholder="40" className="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                   <div className="col-span-2">
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Available Days</label>
                     <div className="flex flex-wrap gap-2">
                       {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                         <div key={day} className="px-4 py-2 border border-gray-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-400 transition-colors">
                           {day}
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="mt-10 flex justify-between">
              {step > 1 ? (
                <button onClick={handleBack} className="px-6 py-3 font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">
                  &larr; Back
                </button>
              ) : <div></div>}
              {step < 3 ? (
                <button onClick={handleNext} className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-colors">
                  Continue &rarr;
                </button>
              ) : (
                <button onClick={finishOnboarding} className="px-8 py-3 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition-colors">
                  Submit Profile ✓
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
