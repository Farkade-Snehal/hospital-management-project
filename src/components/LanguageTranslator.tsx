"use client";

import { useState } from "react";

export default function LanguageTranslator() {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi (हिंदी)" },
    { code: "mr", label: "Marathi (मराठी)" },
    { code: "ta", label: "Tamil (தமிழ்)" },
    { code: "te", label: "Telugu (తెలుగు)" },
    { code: "bn", label: "Bengali (বাংলা)" },
    { code: "gu", label: "Gujarati (ગુજરાતી)" },
    { code: "kn", label: "Kannada (ಕನ್ನಡ)" },
    { code: "pa", label: "Punjabi (ਪੰਜਾਬੀ)" }
  ];

  const changeLanguage = (code: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = code;
      const event = new Event('change', { bubbles: true });
      select.dispatchEvent(event);
    } else {
      document.cookie = `googtrans=/en/${code}; path=/`;
      document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname}`;
      window.location.reload();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-900 dark:text-white px-4 py-2 rounded-full transition-colors shadow-sm border border-gray-200 dark:border-zinc-700 font-bold"
        title="Translate Application"
      >
        <span className="text-xl leading-none">🌍</span>
        <span className="text-sm hidden sm:block">Translate</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-zinc-700 py-3 z-[100] animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pb-2 mb-2 border-b border-gray-100 dark:border-zinc-700">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Select Language</p>
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="w-full text-left px-5 py-2.5 hover:bg-teal-50 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-800 dark:text-gray-200 transition-colors flex justify-between items-center group"
            >
              {lang.label}
              <span className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
