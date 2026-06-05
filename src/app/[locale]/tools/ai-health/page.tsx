"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AIHealthCheck() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I am your AI Health Assistant. Please describe your symptoms in detail.' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `Based on your symptom ("${currentInput}"), it is recommended to rest and stay hydrated. However, this is not medical advice. I am scheduling a tele-consult with the nearest available doctor if symptoms persist.`
      }]);
    }, 1500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
            Symptom Analyzer AI
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Powered by advanced language models to give you preliminary guidance.</p>
        </header>

        <div className="flex-1 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] rounded-2xl p-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-none' 
                    : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-zinc-700 rounded-bl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Describe how you are feeling..."
                className="w-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full py-4 pl-6 pr-16 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all dark:text-white"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-transform transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
