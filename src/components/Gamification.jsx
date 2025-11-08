import React from 'react';
import { Flame, Zap, Crown } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, gradient }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className={`inline-flex items-center gap-2 rounded-xl ${gradient} px-3 py-1 text-white`}> 
      <Icon className="h-4 w-4" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
    <div className="mt-3 text-3xl font-bold text-slate-900">{value}</div>
    <p className="mt-1 text-sm text-slate-500">Last 7 days</p>
  </div>
);

const Gamification = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Motivation engineered for consistency
            </h2>
            <p className="mt-3 text-slate-600">
              Fire Streaks reward daily learning, while Energy Limits cap sessions to keep the brain fresh. The result: sustainable focus and progress—no burnout.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><Flame className="mt-1 h-5 w-5 text-orange-500" /><span><strong>Streaks</strong> drive momentum with visible wins and gentle reminders.</span></li>
              <li className="flex items-start gap-3"><Zap className="mt-1 h-5 w-5 text-pink-500" /><span><strong>Energy</strong> refills daily to prevent overuse and support habits.</span></li>
              <li className="flex items-start gap-3"><Crown className="mt-1 h-5 w-5 text-violet-600" /><span><strong>Challenges</strong> unlock friendly competition with peers and parents.</span></li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={Flame} label="Fire Streak" value="12 days" gradient="bg-gradient-to-r from-orange-500 to-pink-500" />
            <StatCard icon={Zap} label="Energy Left" value="20%" gradient="bg-gradient-to-r from-pink-500 to-violet-600" />
            <StatCard icon={Crown} label="Trivia Ranking" value="#8 / 240" gradient="bg-gradient-to-r from-violet-600 to-indigo-600" />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Today’s Boost</p>
              <div className="mt-2 rounded-xl bg-slate-50 p-4">
                <p className="text-slate-800">"2-minute focus drill: Pomodoro micro-cycle with a breathing reset."
                </p>
                <p className="mt-2 text-xs text-slate-500">Personalized from your onboarding quiz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
