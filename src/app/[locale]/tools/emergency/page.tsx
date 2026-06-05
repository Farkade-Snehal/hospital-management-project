"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function EmergencyTracking() {
  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
              SOS Emergency Response
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Live view of your active emergency dispatches and ambulance tracking.</p>
          </div>
          <button className="bg-red-600 animate-pulse text-white px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            CANCEL SOS
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tracking Map Simulation */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 p-2 relative overflow-hidden h-[600px]">
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=14&size=800x600&maptype=roadmap&style=element:geometry|color:0x212121&style=element:labels.text.stroke|color:0x212121&style=element:labels.text.fill|color:0x746855&style=feature:road|element:geometry|color:0x2c2c2c&style=feature:road|element:labels.icon|visibility:off')] bg-cover bg-center">
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Simulated Ambulance Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-red-500 z-10 relative">
                    🚑
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full mt-2 ml-4 whitespace-nowrap shadow-lg">
                  ETA: 4 mins (1.2 km away)
                </div>
              </div>

              {/* User Location Marker */}
              <div className="absolute top-[60%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white dark:bg-black/80 text-blue-900 dark:text-blue-100 text-xs font-bold px-2 py-1 rounded-md mt-1 shadow-md">
                  Your Location
                </div>
              </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
              <h2 className="font-bold text-xl mb-4 border-b pb-2 dark:border-zinc-800">Dispatch Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Incident ID</p>
                  <p className="font-mono font-medium dark:text-gray-200">#EMG-99281-XT</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Assigned Unit</p>
                  <p className="font-medium dark:text-gray-200">Medic-4 (Advanced Life Support)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Paramedic Contact</p>
                  <p className="font-medium dark:text-gray-200">+1 (555) 019-2834</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-6 border border-red-100 dark:border-red-900/30">
               <h3 className="text-red-800 dark:text-red-200 font-bold mb-2">Emergency Instructions</h3>
               <ul className="list-disc pl-5 text-sm text-red-700 dark:text-red-300 space-y-2">
                 <li>Stay calm and remain where you are.</li>
                 <li>A first responder will call you shortly.</li>
                 <li>If safe, unlock the main entrance door.</li>
                 <li>Gather all relevant medical records if possible.</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
