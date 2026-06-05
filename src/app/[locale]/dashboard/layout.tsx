"use client";

import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter, usePathname } from "@/i18n/routing";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useLocale } from "next-intl";
import LanguageTranslator from "@/components/LanguageTranslator";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, role, logoutMock } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLogout = async () => {
    logoutMock();
    try {
      await signOut(auth);
    } catch (e) {}
    router.push("/auth/login");
  };

  const toggleLanguage = () => {
    const nextLocale = currentLocale === 'en' ? 'hi' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  const getNavLinks = () => {
    if (!role) return [];
    const base = [{ name: "Overview", href: `/dashboard/${role}` }];
    if (role === 'citizen') {
       base.push({ name: "AI Symptom Checker", href: "/tools/ai-health" });
       base.push({ name: "Wellness & Education", href: "/dashboard/citizen/education" });
       base.push({ name: "Federal Schemes", href: "/dashboard/citizen/schemes" });
       base.push({ name: "Nearby Chemists", href: "/dashboard/medical-store/nearby" });
       base.push({ name: "SOS Emergency", href: "/tools/emergency" });
    }
    if (role === 'doctor') {
       base.push({ name: "Profile Onboarding", href: "/dashboard/doctor/onboarding" });
       base.push({ name: "Live Consultations", href: "/dashboard/doctor/consultation" });
       base.push({ name: "E-Prescribe", href: "/dashboard/doctor/prescription" });
       base.push({ name: "Gov Schemes", href: "/dashboard/government/schemes" });
    }
    if (role === 'medical-store') {
       base.push({ name: "Live Geo-Radar", href: "/dashboard/medical-store/nearby" });
       base.push({ name: "RX Fulfillment", href: "/dashboard/medical-store/orders" });
    }
    if (role === 'government') {
       base.push({ name: "Scheme Manager", href: "/dashboard/government/schemes" });
       base.push({ name: "Analytics", href: "/dashboard/government" });
    }
    base.push({ name: "Settings", href: "#" });
    return base;
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-black font-sans">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 hidden md:flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-zinc-800">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              AI Health
            </h1>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            <p className="px-2 text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
              {role} portal
            </p>
            <nav className="space-y-2">
              {getNavLinks().map((link) => (
                 <button 
                   key={link.name}
                   onClick={() => router.push(link.href as any)}
                   className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-colors ${
                     pathname === link.href || (pathname === '/dashboard' && link.name === 'Overview')
                       ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 shadow-sm"
                       : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800/80"
                   }`}
                 >
                   {link.name}
                 </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800 z-10">
            <div className="flex items-center md:hidden">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Health</h1>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              
              {/* Universal Notification Bell */}
              <div className="relative group">
                <button className="relative p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-300 transition-colors">
                  <span className="text-xl">🔔</span>
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-zinc-900 shadow-sm animate-pulse">2</span>
                </button>
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-zinc-800 rounded-xl shadow-2xl border border-gray-100 dark:border-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                   <div className="p-3 border-b border-gray-100 dark:border-zinc-700 font-bold text-sm text-gray-800 dark:text-white">Alerts & Notifications</div>
                   <div className="p-4 text-xs text-gray-600 dark:text-gray-300 space-y-3">
                      <div className="flex gap-3"><span className="text-teal-500 text-lg">💉</span> <p><b className="text-gray-900 dark:text-white">Upcoming Polio Drive:</b> Free vaccination camp at Central Gov Hospital tomorrow 10 AM.</p></div>
                      <div className="flex gap-3"><span className="text-indigo-500 text-lg">🏥</span> <p><b className="text-gray-900 dark:text-white">Free Checkup:</b> Maternal health awareness camp spanning sector 45.</p></div>
                   </div>
                </div>
              </div>

              <LanguageTranslator />

              <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full hidden sm:block shadow-sm">
                {user?.email || "mock-user"}
              </span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-full transition-all shadow-lg shadow-red-500/20 active:scale-95"
              >
                Logout
              </button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#050505] p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
