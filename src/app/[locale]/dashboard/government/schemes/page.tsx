"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function SchemeCMS() {
  const [schemes, setSchemes] = useState([
    { id: 1, name: "Pradhan Mantri Jan Arogya Yojana (PM-JAY)", beneficiaries: 14203, budget: "$45M", active: true },
    { id: 2, name: "Ayushman Bharat Digital Health", beneficiaries: 520, budget: "$12M", active: true },
  ]);

  const [applications, setApplications] = useState([
    { id: 'APP-998', applicant: 'Rajesh Kumar', scheme: 'PM-JAY', status: 'Pending', docs: 'Verified' },
    { id: 'APP-999', applicant: 'Sunita Sharma', scheme: 'PM-JAY', status: 'Pending', docs: 'Mismatch' },
  ]);

  return (
    <ProtectedRoute allowedRoles={['government']}>
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="flex justify-between items-end gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Scheme Management System</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">Create policies, track beneficiaries, and approve applications.</p>
          </div>
          <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/30 transition-transform hover:scale-105">
             + Add New Scheme
          </button>
        </header>

        {/* Existing Schemes */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8">
           <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Active Policy Allocations</h2>
           <div className="grid md:grid-cols-2 gap-6">
              {schemes.map(s => (
                <div key={s.id} className="p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 hover:border-teal-300 transition-colors">
                   <div className="flex justify-between items-start mb-4">
                     <h3 className="font-bold text-lg text-gray-900 dark:text-white">{s.name}</h3>
                     <span className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                   </div>
                   <div className="flex gap-8 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Beneficiaries</p>
                        <p className="font-bold text-gray-900 dark:text-white">{s.beneficiaries.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Allocated Budget</p>
                        <p className="font-bold text-teal-600 dark:text-teal-400">{s.budget}</p>
                      </div>
                   </div>
                   <div className="mt-6 flex gap-3">
                      <button className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline">Edit Requirements</button>
                      <button className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:underline">View Analytics Report</button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Beneficiary Applications Pipeline */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8">
           <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Pending Beneficiary Pipeline</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead>
                   <tr className="border-b border-gray-100 dark:border-zinc-800 text-sm font-semibold text-gray-500">
                      <th className="pb-4 px-4">Application ID</th>
                      <th className="pb-4 px-4">Citizen Name</th>
                      <th className="pb-4 px-4">Requested Scheme</th>
                      <th className="pb-4 px-4">Document AI Validation</th>
                      <th className="pb-4 px-4 text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-zinc-800/50">
                   {applications.map(app => (
                     <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/20">
                        <td className="py-4 px-4 font-mono text-sm">{app.id}</td>
                        <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{app.applicant}</td>
                        <td className="py-4 px-4 text-gray-500">{app.scheme}</td>
                        <td className="py-4 px-4">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.docs === 'Verified' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                             {app.docs}
                           </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-3">
                           <button className="text-sm font-semibold text-green-600 hover:text-green-700">Approve</button>
                           <button className="text-sm font-semibold text-red-600 hover:text-red-700">Reject</button>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
           </div>
        </div>

      </div>
    </ProtectedRoute>
  );
}
