"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useState } from "react";

export default function WellnessModule() {
  const [activeTab, setActiveTab] = useState("maternity");

  const tabs = [
    { id: "maternity", icon: "🤰", label: "Maternal Health" },
    { id: "baby", icon: "👶", label: "Baby Nutrition & Care" },
    { id: "womens-hygiene", icon: "🌸", label: "Women's Hygiene & Awareness" },
    { id: "general", icon: "📺", label: "Health Awareness Videos" }
  ];

  return (
    <ProtectedRoute allowedRoles={['citizen']}>
      <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in duration-500 pb-20">
        
        <header className="mb-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
           <div>
             <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Wellness & Education Hub</h1>
             <p className="text-lg text-gray-500 dark:text-gray-400">Master your health journey with customized tracking, expert diets, and awareness modules.</p>
           </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-4 hide-scrollbar">
           {tabs.map((t) => (
              <button 
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === t.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105' : 'bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}
              >
                <span className="text-2xl">{t.icon}</span>
                {t.label}
              </button>
           ))}
        </div>

        {/* Content Renderers */}
        <div className="min-h-[500px]">
           {activeTab === 'maternity' && (
             <div className="grid lg:grid-cols-3 gap-8 animate-in slide-in-from-right duration-500">
                <div className="lg:col-span-2 space-y-6">
                   <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white shadow-lg">
                      <h2 className="text-2xl font-bold mb-2">Timeline Trimester Tracking</h2>
                      <p className="text-pink-100 mb-6 font-light">Monitor critical milestones and secure your maternal health proactively.</p>
                      
                      <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl backdrop-blur">
                         <div className="text-xl font-black bg-white text-pink-600 w-12 h-12 flex items-center justify-center rounded-xl shadow-sm">T2</div>
                         <div>
                            <p className="font-bold">Second Trimester (Week 14 - 27)</p>
                            <p className="text-sm opacity-90">Crucial anatomy ultrasounds coming up. Keep resting well.</p>
                         </div>
                      </div>
                   </div>

                   <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
                         <h3 className="font-bold text-gray-800 dark:text-white mb-4">Required Vaccinations</h3>
                         <ul className="space-y-3">
                           <li className="flex items-center gap-3 text-sm"><span className="text-green-500 font-bold">✓</span> <span className="text-gray-600 dark:text-gray-300">TT-1 (Tetanus) received</span></li>
                           <li className="flex items-center gap-3 text-sm"><span className="text-yellow-500 font-bold">⏱</span> <span className="text-gray-600 dark:text-gray-300 font-bold">TT-2 pending (Week 20)</span></li>
                           <li className="flex items-center gap-3 text-sm"><span className="text-gray-300 dark:text-zinc-700 font-bold">○</span> <span className="text-gray-500">Flu Shot Booster</span></li>
                         </ul>
                      </div>
                      <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
                         <h3 className="font-bold text-gray-800 dark:text-white mb-4">Dietary Recommendations</h3>
                         <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                            <p><b>Proteins:</b> Eggs, Lentils, Dairy.</p>
                            <p><b>Crucial Irons:</b> Spinach, Pomegranates to prevent Anemia.</p>
                            <p className="text-pink-500 font-bold mt-2 cursor-pointer hover:underline">View Detailed Diet Chart →</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           )}

           {activeTab === 'baby' && (
             <div className="space-y-8 animate-in slide-in-from-right duration-500">
                <header className="bg-blue-500 text-white rounded-3xl p-8 shadow-lg flex justify-between items-center">
                   <div>
                      <h2 className="text-3xl font-bold mb-2">Poshan Growth Chart & Nutrition</h2>
                      <p className="text-blue-100 font-light max-w-xl">Accurately determine the required calorific and supplementary dietary intake required for toddler development.</p>
                   </div>
                   <div className="text-6xl hidden sm:block">🍼</div>
                </header>
                
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Growth Tracking Curve</h3>
                      <div className="w-full h-48 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl flex items-end p-4 border border-dashed border-gray-300 dark:border-zinc-700">
                         {/* Mock Bar Chart */}
                         <div className="w-1/4 h-1/3 bg-blue-300 rounded-t-lg mx-2 flex justify-center text-xs font-bold text-blue-900 pt-2">Month 3</div>
                         <div className="w-1/4 h-1/2 bg-blue-400 rounded-t-lg mx-2 flex justify-center text-xs font-bold text-blue-900 pt-2">Month 6</div>
                         <div className="w-1/4 h-3/4 bg-blue-500 rounded-t-lg mx-2 flex justify-center text-xs font-bold text-white pt-2">Month 9</div>
                         <div className="w-1/4 h-full bg-blue-600 rounded-t-lg mx-2 flex justify-center text-xs font-bold text-white pt-2">Year 1</div>
                      </div>
                      <p className="text-center text-sm font-semibold text-green-500 mt-4">✓ Growth trajectory matching standard WHO percentiles.</p>
                   </div>

                   <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Essential Poshan (Diet) Items</h3>
                      <ul className="space-y-4">
                         <li className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                            <span className="font-bold text-yellow-800 dark:text-yellow-300">0 - 6 Months</span>
                            <p className="text-sm text-yellow-700 dark:text-yellow-500 mt-1">Exclusive breastfeeding. No artificial milk or water required.</p>
                         </li>
                         <li className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                            <span className="font-bold text-orange-800 dark:text-orange-300">6 - 9 Months</span>
                            <p className="text-sm text-orange-700 dark:text-orange-500 mt-1">Mashed bananas, boiled potato purees, khichdi, and continuing breastmilk.</p>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
           )}

           {activeTab === 'womens-hygiene' && (
             <div className="space-y-8 animate-in slide-in-from-left duration-500">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-purple-600 rounded-3xl p-8 text-white">
                      <h3 className="text-2xl font-bold mb-4">Adolescent & Mature Hygiene</h3>
                      <p className="text-purple-100 font-light mb-6">Learn best practices managing late periods, sanitation during menstruation cycles, and comprehensive birth control mechanics universally.</p>
                      <button className="px-6 py-3 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
                         Talk to a Specialist Secretly
                      </button>
                   </div>
                   
                   <div className="space-y-4">
                      {['Managing PCOS & Late Period cycles', 'Demystifying Birth Control Myths', 'Optimal Sanitary Disposals & Alternatives'].map((topic, i) => (
                         <div key={i} className="flex justify-between items-center p-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-purple-300 group cursor-pointer transition-colors">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{topic}</span>
                            <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors">▶</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
           )}

           {activeTab === 'general' && (
             <div className="space-y-8 animate-in slide-in-from-left duration-500">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">National Health Informational Database</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {['Cardiovascular Health over 50.mp4', 'Managing Type-2 Diabetes Diet.mp4', 'Importance of Routine Checkups.mkv'].map((vid, i) => (
                      <div key={i} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800 group cursor-pointer">
                         <div className="h-40 bg-gray-200 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                            <span className="text-4xl text-gray-400 group-hover:scale-125 transition-transform duration-500">▶</span>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                         </div>
                         <div className="p-5">
                            <h4 className="font-bold text-gray-900 dark:text-white">{vid.replace('.mp4', '').replace('.mkv', '')}</h4>
                            <p className="text-xs text-gray-500 mt-2">Verified by Government Health Authorities</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
           )}
        </div>

      </div>
    </ProtectedRoute>
  );
}
