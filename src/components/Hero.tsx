import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onModalOpen: () => void;
  onDrawerOpen: () => void;
}

export function Hero({ onModalOpen, onDrawerOpen }: HeroProps) {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">New Features Available</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight">
            Build Something
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onModalOpen}
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={onDrawerOpen}
              className="bg-blue-50 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-100 transition-all shadow-lg hover:shadow-xl border border-blue-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
