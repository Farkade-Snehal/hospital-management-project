"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useRouter } from "@/i18n/routing";

export default function MedicalStoreDashboard() {
  const router = useRouter();
  return (
    <ProtectedRoute allowedRoles={['medical-store']}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Pharmacy Portal</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">Inventory management and digital prescription fulfillment.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => router.push('/dashboard/medical-store/orders')} className="px-5 py-2.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold rounded-xl hover:bg-emerald-100 transition-colors">
              Scan Prescription
            </button>
            <button onClick={() => router.push('/dashboard/medical-store/nearby')} className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
              View Map Radar
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Live Inventory Status</h2>
                <input 
                  type="text" 
                  placeholder="Search medicaments..." 
                  className="px-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                    <tr>
                      <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300 rounded-tl-lg rounded-bl-lg">Item Name</th>
                      <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300">Category</th>
                      <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300">Stock</th>
                      <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300 rounded-tr-lg rounded-br-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: 'Amoxicillin 500mg', cat: 'Antibiotics', stock: '450 units', status: 'Optimal', statColor: 'text-emerald-500' },
                      { item: 'Paracetamol 650mg', cat: 'Analgesics', stock: '120 units', status: 'Reorder', statColor: 'text-yellow-500' },
                      { item: 'Insulin Glargine', cat: 'Diabetes', stock: '12 units', status: 'Critical', statColor: 'text-red-500' },
                      { item: 'Cetirizine 10mg', cat: 'Antihistamines', stock: '890 units', status: 'Optimal', statColor: 'text-emerald-500' },
                    ].map((med, idx) => (
                      <tr key={idx} className="border-b border-gray-50 dark:border-zinc-800/50 last:border-0 hover:bg-gray-50/50 dark:hover:bg-zinc-800/20">
                        <td className="p-3 font-medium text-gray-900 dark:text-white">{med.item}</td>
                        <td className="p-3 text-sm text-gray-500">{med.cat}</td>
                        <td className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">{med.stock}</td>
                        <td className={`p-3 text-sm font-bold ${med.statColor}`}>{med.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-500 rounded-3xl p-8 shadow-xl shadow-emerald-500/20 text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700"></div>
              <div>
                <h3 className="font-bold text-2xl mb-1">e-Prescriptions</h3>
                <p className="text-emerald-100 mb-6">9 pending fulfillments</p>
              </div>
              <button onClick={() => router.push('/dashboard/medical-store/orders')} className="bg-white text-emerald-600 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                Process Orders
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4">Supplier Deliveries</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center bg-gray-50 dark:bg-zinc-800 p-3 rounded-xl">
                  <span className="font-medium">PharmaCorp Inc.</span>
                  <span className="text-green-500 bg-green-100 dark:bg-green-500/20 px-2 py-1 rounded text-xs font-bold">Today, 2PM</span>
                </li>
                <li className="flex justify-between items-center bg-gray-50 dark:bg-zinc-800 p-3 rounded-xl">
                  <span className="font-medium">BioTech Supplies</span>
                  <span className="text-gray-500 bg-gray-200 dark:bg-zinc-700 px-2 py-1 rounded text-xs font-bold">Tomorrow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
