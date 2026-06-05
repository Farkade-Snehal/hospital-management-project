"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

export default function GovernmentDashboard() {
  const router = useRouter();
  return (
    <ProtectedRoute allowedRoles={['government']}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Public Health Command</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">National health statistics, outbreak monitoring, and resource allocation.</p>
          </div>
          <button onClick={() => router.push('/dashboard/government/schemes')} className="px-5 py-2.5 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">
            Launch Scheme CMS Portal
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Active Epidemic Alerts', value: '3', trend: '+1 New', type: 'danger' },
            { title: 'Hospital Capacity', value: '84%', trend: 'Critical in South', type: 'warning' },
            { title: 'Vaccinations Today', value: '124.5k', trend: '+15%', type: 'success' },
            { title: 'Ambulance Deployments', value: '9,234', trend: 'Normal', type: 'info' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{stat.value}</p>
              <p className={`text-sm mt-2 font-semibold ${
                stat.type === 'danger' ? 'text-red-500' : 
                stat.type === 'warning' ? 'text-yellow-500' : 
                stat.type === 'success' ? 'text-green-500' : 'text-blue-500'
              }`}>{stat.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8 h-96 relative overflow-hidden">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Regional Outbreak Map</h2>
            <div className="absolute inset-0 top-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=20.5937,78.9629&zoom=5&size=800x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=element:geometry|color:0xf5f5f5&style=feature:water|element:geometry|color:0xc9c9c9')] bg-cover bg-center opacity-50 dark:opacity-20 filter grayscale"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="bg-white/80 dark:bg-black/80 backdrop-blur px-6 py-3 rounded-full font-semibold text-gray-700 dark:text-gray-300 shadow-xl">
                Interactive Map Module (Placeholder)
              </span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Critical Shortages</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30">
                <span className="font-semibold text-red-900 dark:text-red-200">O Negative Blood</span>
                <span className="text-red-600 font-bold">Region B</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl border border-yellow-100 dark:border-yellow-900/30">
                <span className="font-semibold text-yellow-900 dark:text-yellow-200">Ventilators</span>
                <span className="text-yellow-700 font-bold">Region D</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800/30 rounded-2xl border border-gray-100 dark:border-zinc-800">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Antiviral Kits</span>
                <span className="text-gray-500 font-bold">National</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
