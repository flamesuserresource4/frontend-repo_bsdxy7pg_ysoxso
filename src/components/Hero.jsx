import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-16 md:pt-20 lg:pt-24">
        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 ring-1 ring-orange-200">
              <Flame className="h-4 w-4" />
              STOP BLOCKING, START CONVERTING
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Turn endless scrolling into
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"> focused growth</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              AI IA Labs reprograms TikTok-style habits into daily, personalized micro-learning. Restore focus and creative potential without fights over screen time.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a href="#subscribe" className="group inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                Get Started – B2C
              </a>
              <a href="#schools" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50">
                For Schools – B2B Licensing
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              For parents and students (ages 12–18) in Georgia.
            </div>
          </div>

          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
