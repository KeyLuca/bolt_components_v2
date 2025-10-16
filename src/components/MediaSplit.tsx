import { Zap, Shield, Target } from 'lucide-react';

export function MediaSplit() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Unlock Your Potential
            </h2>
            <p className="text-lg text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">Lightning Fast</h3>
                  <p className="text-slate-600">Quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">Secure & Private</h3>
                  <p className="text-slate-600">Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">Precision Targeting</h3>
                  <p className="text-slate-600">Excepteur sint occaecat cupidatat non proident</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white rounded-3xl shadow-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-video bg-white rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">
              See It In Action
            </h2>
            <p className="text-lg text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-slate-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
