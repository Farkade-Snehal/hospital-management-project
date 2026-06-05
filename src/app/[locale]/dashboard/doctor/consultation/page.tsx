"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

export default function ConsultationRoom() {
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['doctor']}>
      <div className="h-[calc(100vh-6rem)] overflow-hidden flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Left Side: Video & Chat */}
        <div className="flex-1 flex flex-col gap-6 h-full">
          {/* Video Placeholder */}
          <div className="flex-1 bg-black rounded-3xl relative overflow-hidden shadow-xl border border-gray-800 flex items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
             
             {/* Small self window */}
             <div className="absolute top-4 right-4 w-32 h-44 bg-zinc-800 rounded-xl border-2 border-white/20 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-xs text-white/50">Your Camera</div>
             </div>

             <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-indigo-500/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/30 animate-pulse">
                   <span className="text-3xl">📹</span>
                </div>
                <h2 className="text-white font-bold text-xl tracking-wide">Connecting to Sarah Jenkins...</h2>
                <p className="text-white/60 text-sm mt-2">End-to-End Encrypted Session</p>
             </div>

             {/* Controls */}
             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <button className="p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition">🎙️</button>
                <button className="p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition">📹</button>
                <button className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition px-6 font-bold shadow-lg shadow-red-500/20">End Call</button>
             </div>
          </div>
        </div>

        {/* Right Side: Patient Records */}
        <div className="w-full md:w-96 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col h-full overflow-hidden">
           <div className="p-6 border-b border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-lg">SJ</div>
                 <div>
                   <h3 className="font-bold text-gray-900 dark:text-white">Sarah Jenkins</h3>
                   <p className="text-xs text-gray-500">28 yrs • Female • PT-1029</p>
                 </div>
              </div>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">AI Symptom Summary</h4>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                   <p className="text-sm text-indigo-900 dark:text-indigo-200">Patient reported severe migraines starting 48 hours ago. Accompanied by mild photophobia.</p>
                   <div className="mt-3 flex gap-2">
                     <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-md font-medium">Headache</span>
                     <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-md font-medium">Visual</span>
                   </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Previous Consultations</h4>
                <ul className="space-y-3">
                   <li className="p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
                     <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Routine Checkup</p>
                     <p className="text-xs text-gray-500 mt-1">Oct 12, 2025 • Dr. Smith</p>
                   </li>
                   <li className="p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
                     <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Allergy Treatment</p>
                     <p className="text-xs text-gray-500 mt-1">Aug 05, 2025 • Dr. Chen</p>
                   </li>
                </ul>
              </div>
           </div>

           <div className="p-6 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
              <button 
                onClick={() => router.push('/dashboard/doctor/prescription')}
                className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
              >
                Write E-Prescription
              </button>
           </div>
        </div>

      </div>
    </ProtectedRoute>
  );
}
