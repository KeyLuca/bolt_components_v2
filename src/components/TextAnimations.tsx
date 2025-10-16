import { useState, useEffect, useRef } from 'react';

export function TextAnimations() {
  const [typewriterText, setTypewriterText] = useState('');
  const [isInView, setIsInView] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [counts, setCounts] = useState({ users: 0, projects: 0, revenue: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const fullText = 'Innovative Solutions for Modern Challenges';
  const words = ['Revolutionary', 'Powerful', 'Seamless', 'Intelligent', 'Dynamic'];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      const targets = { users: 15420, projects: 8943, revenue: 2845 };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          users: Math.floor(targets.users * progress),
          projects: Math.floor(targets.projects * progress),
          revenue: Math.floor(targets.revenue * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, increment);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-bold text-slate-900 min-h-[120px]">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </h2>

          <div className="space-y-6">
            {isInView && (
              <>
                <p className="text-lg text-slate-600 opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.2s_forwards]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-lg text-slate-600 opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.6s_forwards]">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-lg text-slate-600 opacity-0 animate-[fadeIn_0.8s_ease-in-out_1s_forwards]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-bold text-slate-900 mb-4">
            Experience{' '}
            <span className="inline-block min-w-[200px] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-500">
              {words[wordIndex]}
            </span>
          </h3>
          <p className="text-slate-600">Watch the words change automatically</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {counts.users.toLocaleString()}+
            </div>
            <div className="text-slate-600 font-medium">Active Users</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
            <div className="text-5xl font-bold text-cyan-600 mb-2">
              {counts.projects.toLocaleString()}+
            </div>
            <div className="text-slate-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl">
            <div className="text-5xl font-bold text-teal-600 mb-2">
              ${counts.revenue.toLocaleString()}K
            </div>
            <div className="text-slate-600 font-medium">Revenue Generated</div>
          </div>
        </div>

        <div className="overflow-hidden bg-slate-900 py-8 rounded-2xl">
          <div className="flex gap-8 animate-[marquee_30s_linear_infinite]">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 shrink-0">
                {['Innovation', 'Quality', 'Performance', 'Security', 'Scalability', 'Reliability'].map((tag, i) => (
                  <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-medium whitespace-nowrap">
                    {tag}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
