import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gamification from './components/Gamification';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 text-white font-bold">AI</span>
            <span className="font-heading text-lg font-bold tracking-tight">AI IA Labs</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#subscribe" className="hover:text-slate-900">Pricing</a>
            <a href="#schools" className="hover:text-slate-900">Schools</a>
            <a href="#subscribe" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Gamification />
        <CTA />
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} AI IA Labs — Restoring Focus & Creative Potential</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#subscribe" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
