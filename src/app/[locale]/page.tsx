"use client";

import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageTranslator from "@/components/LanguageTranslator";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-teal-500 selection:text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8 border-b border-gray-100 dark:border-zinc-800 backdrop-blur fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70">
        <div className="flex items-center gap-2">
           <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4h2v4zm0-6h-2V7h2v4z"/></svg>
           <span className="font-bold text-xl tracking-tight">AI Health</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-teal-500 transition-colors">Features</a>
          <a href="#about" className="hover:text-teal-500 transition-colors">About</a>
          
          <LanguageTranslator />

          <button 
            onClick={() => router.push('/auth/login')}
            className="px-5 py-2 font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Access Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-2">
          <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping"></span>
          Now live multi-lingual support
        </a>
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 delay-100">
          The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Intelligent Healthcare</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 animate-in fade-in slide-in-from-bottom-5 delay-200">
          A truly unified, role-based platform designed to connect citizens, doctors, and medical stores seamlessly. Accessible anywhere, in any language.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-6 delay-300">
          <button 
            onClick={() => router.push('/auth/register')}
            className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all hover:scale-105"
          >
            Get Started Now
          </button>
          <button 
            onClick={() => router.push('/auth/login')}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all"
          >
            Sign In Existing
          </button>
        </div>
      </main>

      {/* Feature Grids */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-transparent hover:border-gray-200 dark:hover:border-zinc-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6">🏥</div>
              <h3 className="text-xl font-bold mb-3">4 Distinct Roles</h3>
              <p className="text-gray-500 dark:text-gray-400">Tailored experiences for citizens, medical professionals, pharmacies, and government.</p>
           </div>
           <div className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-transparent hover:border-gray-200 dark:hover:border-zinc-800 transition-colors">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-xl flex items-center justify-center mb-6">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Diagnostics</h3>
              <p className="text-gray-500 dark:text-gray-400">Integrated NLP symptom checker to triage patients and recommend next steps intelligently.</p>
           </div>
           <div className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-transparent hover:border-gray-200 dark:hover:border-zinc-800 transition-colors">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-xl flex items-center justify-center mb-6">🚑</div>
              <h3 className="text-xl font-bold mb-3">Live Emergency SOS</h3>
              <p className="text-gray-500 dark:text-gray-400">One-tap medical dispatch with real-time tracking from dispatch to arrival.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
