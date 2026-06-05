"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

function VitalCard({ title, value, trend, status }: { title: string; value: string; trend: string; status: 'normal' | 'good' | 'warning' }) {
  const colors = {
    normal: "text-blue-500",
    good: "text-green-500",
    warning: "text-yellow-500"
  };
  return (
    <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-4 flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer border border-gray-100 dark:border-zinc-700/50">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
        <span className={`text-sm font-semibold ${colors[status]}`}>{trend}</span>
      </div>
    </div>
  );
}

function AIHealthCheckCTA() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 rounded-3xl p-8 shadow-2xl shadow-indigo-500/20 text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-white opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 rounded-full bg-black opacity-10 blur-xl"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
            🤖
          </span>
          <h2 className="text-2xl font-bold">AI Health Assistant</h2>
        </div>
        <p className="mb-8 opacity-90 leading-relaxed font-light mt-4 text-indigo-50">
          Describe your symptoms and our multilingual AI intelligence will provide a preliminary health assessment instantly.
        </p>
        <button onClick={() => router.push('/tools/ai-health')} className="w-full bg-white text-indigo-600 px-6 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
          Start Free Diagnosis
        </button>
      </div>
    </div>
  );
}

function Appointments() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Upcoming Appointments</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">View All</button>
      </div>
      <div className="space-y-4">
        {[
          { doc: 'Dr. Sarah Jenkins', spec: 'Cardiologist', date: 'Today, 2:00 PM', status: 'Confirmed', statusColor: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' },
          { doc: 'Dr. Michael Chen', spec: 'General Physician', date: 'Oct 24, 10:30 AM', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400' },
        ].map((apt, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/30 border border-gray-100 dark:border-zinc-800/50 hover:border-blue-500/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg group-hover:scale-110 transition-transform">
                {apt.doc.charAt(4)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{apt.doc}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{apt.spec} • {apt.date}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${apt.statusColor}`}>
              {apt.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CitizenDashboard() {
  const router = useRouter();
  return (
    <ProtectedRoute allowedRoles={['citizen']}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Patient Portal</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">Welcome back. Here is your health overview.</p>
          </div>
          <button className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-gray-900/20 dark:shadow-white/10">
            + Book Appointment
          </button>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">Health Vitals Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <VitalCard title="Heart Rate" value="72 bpm" trend="-2%" status="normal" />
                <VitalCard title="Blood Pressure" value="118/75" trend="Stable" status="good" />
                <VitalCard title="Weight" value="70 kg" trend="-1.5kg" status="good" />
                <VitalCard title="Glucose" value="95 mg/dL" trend="+5%" status="warning" />
              </div>
            </div>
            
            <Appointments />
          </div>

          <div className="space-y-8">
            <AIHealthCheckCTA />
            
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-3xl p-6 lg:p-8 border border-blue-100 dark:border-blue-900/30 flex items-start gap-4">
              <span className="text-3xl">🚑</span>
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Emergency Beacon</h3>
                <p className="text-sm text-blue-800/80 dark:text-blue-200/70 mb-3">One-tap ambulance request with real-time GPS tracking.</p>
                <button onClick={() => router.push('/tools/emergency')} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-lg shadow-red-500/30">
                  SOS Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
