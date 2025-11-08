import React from 'react';
import { PlayCircle, Brain, Target, Shield, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: PlayCircle,
    title: 'Addictive Edu-Feed',
    desc: 'A TikTok-like stream of 30–60s lessons crafted to hook attention while teaching real skills.'
  },
  {
    icon: Brain,
    title: 'AI + Atomic Habits',
    desc: 'Automation blends micro-goals, cues, and rewards to reshape behavior—not just restrict time.'
  },
  {
    icon: Target,
    title: 'Daily Boosts',
    desc: 'Personalized video nudges based on an onboarding quiz keep focus sharp and consistent.'
  },
  {
    icon: Sparkles,
    title: 'Fire Streaks',
    desc: 'Retention through streaks and XP. Keep momentum and celebrate progress every day.'
  },
  {
    icon: Shield,
    title: 'Energy Limits',
    desc: 'Smart usage caps prevent endless scrolling, turning minutes into mastery.'
  },
  {
    icon: Users,
    title: 'UGC + Trivia Battles',
    desc: 'Create, share, and compete—students vs. parents or peers—inside safe community challenges.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Designed to convert distraction into disciplined growth
          </h2>
          <p className="mt-3 text-slate-600">
            Not more blocking—more meaning. Every swipe advances skills, focus, and confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 p-2 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
