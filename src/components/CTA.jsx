import React from 'react';
import { ArrowRight, School } from 'lucide-react';

const CTA = () => {
  return (
    <section id="subscribe" className="relative bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">B2C Subscription</h3>
            <p className="mt-2 text-slate-600">Daily Boosts, full edu-feed, and gamification tools to rebuild focus and creativity—at home.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg transition hover:bg-slate-800">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50">
                See How It Works
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Cancel anytime. Built for teens 12–18 in Georgia.</p>
          </div>

          <div id="schools" className="rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 p-[1px] shadow-xl">
            <div className="rounded-2xl bg-slate-900 p-8">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-sm text-white">
                <School className="h-4 w-4" />
                For Schools & Districts
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white">B2B School Licensing</h3>
              <p className="mt-2 text-slate-300">Deploy at school scale with admin dashboards, cohort analytics, and safe community controls.</p>
              <a href="#" className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow-lg transition hover:bg-slate-100">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
