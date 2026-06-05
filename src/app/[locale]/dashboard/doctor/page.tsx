"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

export default function DoctorDashboard() {
  const router = useRouter();
  const patients = [
    { id: 'PT-1029', name: 'Sarah Jenkins', time: '09:00 AM', type: 'Tele-consult', status: 'Waiting', urgent: false },
    { id: 'PT-3281', name: 'Michael Chen', time: '10:30 AM', type: 'In-person', status: 'Confirmed', urgent: true },
    { id: 'PT-8942', name: 'Emma Watson', time: '01:00 PM', type: 'Tele-consult', status: 'Pending', urgent: false },
  ];

  return (
    <ProtectedRoute allowedRoles={['doctor']}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Physician Portal</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">Manage your schedule, patients, and tele-med sessions.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => router.push('/dashboard/doctor/onboarding')}
              className="px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-200 dark:border-indigo-800/50"
            >
              Complete Onboarding Profile
            </button>
            <button 
              onClick={() => router.push('/dashboard/doctor/consultation')}
              className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              Start Tele-Medicine
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Patient Queue */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Today's Patient Queue</h2>
              <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-full">
                {patients.length} Appointments
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-zinc-800 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    <th className="pb-3 px-2">Patient</th>
                    <th className="pb-3 px-2">Time</th>
                    <th className="pb-3 px-2">Type</th>
                    <th className="pb-3 px-2">Status</th>
                    <th className="pb-3 px-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-zinc-800/50">
                  {patients.map((p, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-zinc-800/20 transition-colors group">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300">
                            {p.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              {p.name}
                              {p.urgent && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                            </p>
                            <p className="text-xs text-gray-500">{p.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-sm text-gray-600 dark:text-gray-300">{p.time}</td>
                      <td className="py-4 px-2 text-sm text-gray-600 dark:text-gray-300">{p.type}</td>
                      <td className="py-4 px-2">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                          p.status === 'Waiting' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400' :
                          p.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-4 px-2 text-right">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
                          View details &rarr;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-900 to-black rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20">
              <h3 className="font-bold text-xl mb-4 text-white/90">Earnings Snapshot</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Today's Revenue</span>
                  <span className="font-bold text-2xl text-green-400">$450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Pending Settlements</span>
                  <span className="font-bold text-lg text-yellow-500">$120</span>
                </div>
              </div>
              <button className="w-full mt-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-sm font-semibold">View Financial Report</button>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">External Networks</h3>
               </div>
               <div className="flex flex-col gap-3">
                  <button onClick={() => router.push('/dashboard/government/schemes')} className="text-left p-4 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                     <p className="font-semibold text-gray-900 dark:text-white flex justify-between">Government Schemes <span className="text-indigo-500">→</span></p>
                     <p className="text-xs text-gray-500 mt-1">Review newly announced subsidies for your patients.</p>
                  </button>
                  <button onClick={() => router.push('/dashboard/medical-store/nearby')} className="text-left p-4 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                     <p className="font-semibold text-gray-900 dark:text-white flex justify-between">Verified Chemists <span className="text-indigo-500">→</span></p>
                     <p className="text-xs text-gray-500 mt-1">Search nearby pharmacies for medicine availability.</p>
                  </button>
               </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
               <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Urgent Notifications</h3>
               <div className="p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-xl">
                 <p className="text-sm font-semibold text-red-800 dark:text-red-200">Abnormal Labs - PT-3281</p>
                 <p className="text-xs text-red-600/80 mt-1">Glucose level significantly elevated. Requires immediate review.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
